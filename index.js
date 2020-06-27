const dotenv = require('dotenv');
const config = dotenv.config().parsed;

const axios = require('axios');
const moment = require('moment');

const date = moment().add(1, 'day').format('YYYY/MM/DD')

const createPage = () => {
  const title = `${config.CONFLUENCE_TITLE}_${date}`;
  const body = config.CONFLUENCE_BODY;
  console.log(title, body);
  request(title, body);
}

const request = (title, body) => {
  axios.request({
    method: 'post',
    baseURL: `https://${config.CONFLUENCE_DOMAIN}`,
    url: '/wiki/rest/api/content',
    auth: {
      username: config.CONFLUENCE_USER,
      password: config.CONFLUENCE_TOKEN
    },
    data: {
      title: title,
      type: "page",
      space: {
        key: config.CONFLUENCE_SPACE
      },
      ancestors: [{
        id: config.CONFLUENCE_PAGE
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
