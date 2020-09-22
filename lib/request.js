const axios = require("axios");

const defaultConfig = {
  method: "get",
  baseURL: `https://${process.env.CONFLUENCE_DOMAIN}`,
  url: "wiki/rest/api/content/search",
  auth: {
    username: process.env.CONFLUENCE_USER,
    password: process.env.CONFLUENCE_TOKEN,
  },
  params: {},
  data: {},
};

module.exports = (config) => {
  return axios.request(Object.assign({}, defaultConfig, config));
};
