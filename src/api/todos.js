import api from "./axios";

class Api {
  static  getTasks() {
    return api.get("/");
  }
  static createTask(data) {
    return api.post("/", data);
  }
  static deleteTask(id) {
    return api.delete(`/${id}`);
  }
}

export default Api;