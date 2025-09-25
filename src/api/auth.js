import { apiAuth } from "./axios";

class ApiAuth {
    static verify() {
        return apiAuth.get("/verify.php");
    }
    static login() {
        return apiAuth.get("/login.php");
    }
}

export default ApiAuth;