import qs from "qs";

const CLIENT_ID = "050fc4e8839f1c7";
const ROOT_URL = "https://api.imgur.com";

export default {
  login() {
    const querystring = {
      client_id: CLIENT_ID,
      responde_type: "token",
    };
    window.location = `${ROOT_URL}/oath2/authorize?${qs.stringify(
      querystring
    )}`;
  },
};
