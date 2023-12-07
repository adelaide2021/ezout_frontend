export default class Socket {
  constructor(url) {
    this.open = null;
    this.message = null;
    this.close = null;
    this.error = null;
    if (url) {
      this.socket = new WebSocket(url);
      const socket = this.socket;
      socket.addEventListener("open", () => {
        this.open && this.open();
      });

      socket.addEventListener("message", (event) => {
        const data = JSON.parse(event.data);
        this.message && this.message(data);
      });

      socket.addEventListener("close", () => {
        this.close && this.close();
      });

      socket.addEventListener("error", (err) => {
        this.error && this.error(err);
      });
    }
  }

  addListener({ open, message, close, error }) {
    if (open) this.open = open;
    if (message) this.message = message;
    if (close) this.close = close;
    if (error) this.error = error;
  }

  send(msg) {
    this.socket.send(msg);
  }
  close() {
    this.socket.close();
  }
}
