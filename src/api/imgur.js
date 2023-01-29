import qs from "qs";
import axios from "axios";

const CLIENT_ID = "050fc4e8839f1c7";
const ROOT_URL = "https://api.imgur.com";

export default {
  login() {
    const querystring = {
      client_id: CLIENT_ID,
      responde_type: "token",
    };
    window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(
      querystring
    )}`;
  },
  fetchImages(token) {
    return axios.get(`${ROOT_URL}/3/image/{{imageHash}}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};
