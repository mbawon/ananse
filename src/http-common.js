import axios from "axios";

const http = axios.create({
  baseURL: "https://ananse.internal.vodafone.com/api/v2",
  headers: {
    "Content-Type": "application/json",
  },
});

export default http;
