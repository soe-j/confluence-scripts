const dotenv = require('dotenv');
const config = dotenv.config().parsed;

const axios = require('axios');
const moment = require('moment');

const date = moment().add(1, 'day').format('YYYY/MM/DD')

const createPage = () => {
  const title = `${config.TITLE}_${date}`;
  const body = config.BODY;
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
