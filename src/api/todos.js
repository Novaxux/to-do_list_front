import { apiTodos } from "./axios";

class Api {
  static getTasks(userId) {
    return apiTodos.get(`/${userId}`);
  }
  static createTask(data) {
    return apiTodos.post("/", data);
  }
  static deleteTask(data) {
    return apiTodos.delete('/', {data});
  }
}

export default Api;