const dotenv = require('dotenv');
const config = dotenv.config().parsed;

const fs = require('fs');
const axios = require('axios');

const createPage = () => {
  const title = '2020-MM-DD 小ページ作った2 from js';
  const body = fs.readFileSync('./template.html').toString();
  console.log(title, body);
  request(title, body);
}

const request = (title, body) => {
  axios.request({
    method: 'post',
    baseURL: `https://${config.DOMAIN}`,
    url: '/wiki/rest/api/content',
    auth: {
      username: config.USER,
      password: config.TOKEN
    },
    data: {
      title: title,
      type: "page",
      space: {
        key: config.SPACE
      },
      ancestors: [{
        id: config.PAGE
      }],
      body: {
        storage: {
          value: body,
          representation: "storage"
        }
      }
    }
  });
}

exports.createPage = createPage
