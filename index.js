const dotenv = require('dotenv');
const config = dotenv.config().parsed;

const axios = require('axios');

const createPage = () => {
  axios.request({
    method: 'post',
    baseURL: `https://${config.DOMAIN}`,
    url: '/wiki/rest/api/content',
    auth: {
      username: config.USER,
      password: config.TOKEN
    },
    data: {
      title: "2020-MM-DD 小ページ作った from js",
      type: "page",
      space: {
        key: config.SPACE
      },
      ancestors: [{
        id: config.PAGE
      }],
      body: {
        storage: {
          value: "<h2>すごいページ</h2>すごいページです。とっても。",
          representation: "storage"
        }
      }
    }
  });
}

exports.createPage = createPage
