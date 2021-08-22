<template>
<slot></slot>
</template>

<script>
export default {
  methods: {
    connect() {
      return new Promise((resolve, reject) => {
        const connection = new WebSocket('ws://localhost:7071/ws');

        connection.onopen = () => {
          resolve(connection);
        };
        connection.onerror = () => {
          reject(new Error('Cannot connect to Websocket'));
        };
        connection.onclose = () => {
          this.$store.dispatch('handleDisconnect');
        };
      });
    },
    triggerConnection() {
      this.connect()
        .then((connection) => {
          this.$store.dispatch('handleConnection', { connection });
        })
        .catch(() => {
          setTimeout(() => {
            this.triggerConnection();
          }, 3000);
        });
    },
  },
  computed: {
    connection() {
      return this.$store.getters.connection;
    },
  },
  watch: {
    connection(newConnection) {
      if (!newConnection) {
        this.triggerConnection();
      }
    },
  },
  created() {
    if (!this.$store.getters.connection) {
      this.triggerConnection();
    }
  },
};
</script>
