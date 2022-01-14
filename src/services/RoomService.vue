<template>
<slot></slot>
</template>

<script>
import io from 'socket.io-client';

export default {
  methods: {
    connect() {
      return new Promise((resolve, reject) => {
        const connection = io(process.env.VUE_APP_BACKEND_URL);

        connection.on('connect', () => {
          resolve(connection);
        });

        connection.on('disconnect', () => {
          this.$store.dispatch('handleDisconnect');
          reject(new Error('Disconnected'));
        });

        connection.on('reconnect', () => {
          resolve(connection);
        });

        connection.on('STATE_CHANGE', (newRoomState) => {
          this.$store.dispatch('handleRoomStateChange', { roomState: newRoomState });
        });

        connection.on('SHOW_CARDS', (cards) => {
          this.$store.dispatch('handleShowCards', { cards });
        });
      });
    },
    triggerConnection() {
      this.connect()
        .then((connection) => {
          this.$store.dispatch('handleConnection', { connection });
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
