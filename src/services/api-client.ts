import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "3074c2f24e40435a8b3a394ffc03c052",
  },
});
