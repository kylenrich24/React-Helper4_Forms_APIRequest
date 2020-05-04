import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID GVPUTGuZmt1i8j3qxJxOkSCumkzUljNYvUIyYPXFkbg",
  },
});
