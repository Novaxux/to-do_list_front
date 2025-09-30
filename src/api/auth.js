import { apiAuth } from "./axios";

class ApiAuth {
    static verify() {
        return apiAuth.get("/verify.php");
    }
}

export default ApiAuth;