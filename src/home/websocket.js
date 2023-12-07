import data from "./mock";

const randomData = (d) => {
  const index = parseInt(Math.random() * data.length - 2);
  const length = parseInt(Math.random() * 10);
  return data.slice(index, index + length);
};

export default class Socket {
  constructor(url, isMock) {
    this.isMock = isMock;
    this.open = null;
    this.message = null;
    this.close = null;
    this.error = null;
    if (url && !isMock) {
      this.socket = new WebSocket(url);
      const socket = this.socket;
      socket.addEventListener("open", () => {
        this.open && this.open();
      });

      socket.addEventListener("message", (event) => {
        this.message && this.message(event.data);
      });

      socket.addEventListener("close", () => {
        this.close && this.close();
      });

      socket.addEventListener("error", (err) => {
        this.error && this.error(err);
      });
    }

    if (isMock) {
      setTimeout(() => {
        this.message && this.message(data);
      }, 500);
      setInterval(() => {
        this.message && this.message(randomData());
      }, 10000);
    }
  }

  addListener({ open, message, close, error }) {
    if (open) this.open = open;
    if (message) this.message = message;
    if (close) this.close = close;
    if (error) this.error = error;
  }

  send(msg) {
    if (this.isMock) {
      // 模拟发送
      console.log("模拟发送", msg);
      setTimeout(() => {
        this.message(
          data.filter((e) =>
            msg.shopId === "" ? true : e.shop_id == msg.shopId
          )
        );
      }, Math.random() * 300);
    } else this.socket.send(msg);
  }
  close() {
    this.socket.close();
  }
}
