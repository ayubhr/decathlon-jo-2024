import axios from "axios";

const basicAuth = `Basic QzBlZjlkNjAxZjkwMWZmMDdkNWUzYzg3YjVkMmM1YmIyOWMzMzk1MGU6U2lhaGZnRkE0NDFSMzliaEJkSEFJZUpOV3Y4MFNBMVpia21pRXV6ZkYya2RIb1ZHYnRuZWR0Qkl3NU9yaTVySQ==`;

const apiAuth = axios.create({
  baseURL: "https://idpdecathlon.oxylane.com/as/token.oauth2",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: basicAuth,
  },
});

apiAuth.interceptors.response.use(function (response) {
  let { status, data, headers } = response;

  if (status === 200) {
    let { access_token } = data;

    if (access_token) {
      window.localStorage.setItem("access_token", access_token);
    }
  }
});

const api = axios.create({
  baseURL:
    "https://cors-anywhere.herokuapp.com/https://api.decathlon.net/sport_vision_api/v1",
  //mode: "no-cors",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    //"Access-Control-Allow-Origin": "*",
    "x-api-key": "b161265e-774e-4c16-ae29-024078274571",
  },
});

export { apiAuth, api };
