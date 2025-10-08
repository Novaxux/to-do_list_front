import { apiTodos } from "./axios";

class Api {
  static getTasks() {
    // return apiTodos.get(`/${userId}`);
      return apiTodos.get(`/`);
  }  
  static createTask(data) {
    return apiTodos.post("/", data);
  }
  static deleteTask(id) {
    // return apiTodos.delete('/', {data});
    return apiTodos.delete(`/${id}`);
  }
}

export default Api;