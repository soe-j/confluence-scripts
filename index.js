require('dotenv').config();

const axios = require('axios');
const moment = require('moment');

const date = moment().add(1, 'day').format('YYYY/MM/DD')

const createPage = () => {
  const title = `${process.env.CONFLUENCE_TITLE}_${date}`;
  const body = process.env.CONFLUENCE_BODY;
  console.log(title, body);
  request(title, body);
}

const request = (title, body) => {
  axios.request({
    method: 'post',
    baseURL: `https://${process.env.CONFLUENCE_DOMAIN}`,
    url: '/wiki/rest/api/content',
    auth: {
      username: process.env.CONFLUENCE_USER,
      password: process.env.CONFLUENCE_TOKEN
    },
    data: {
      title: title,
      type: "page",
      space: {
        key: process.env.CONFLUENCE_SPACE
      },
      ancestors: [{
        id: process.env.CONFLUENCE_PAGE
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
