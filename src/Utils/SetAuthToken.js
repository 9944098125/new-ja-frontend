import api from "../Redux/Api/Api";

export default function SetAuthToken(token) {
  if (token) {
    localStorage.setItem("jobsToken", token);
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    localStorage.removeItem("jobsToken");
    delete api.defaults.headers.common["Authorization"];
  }
}
