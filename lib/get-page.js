const axios = require('axios');

const getPage = async () => {
  const page = await axios.request({
    method: 'get',
    baseURL: `https://${process.env.CONFLUENCE_DOMAIN}`,
    url: `/wiki/rest/api/content/${process.env.CONFLUENCE_PAGE}`,
    auth: {
      username: process.env.CONFLUENCE_USER,
      password: process.env.CONFLUENCE_TOKEN
    },
    params: {
      expand: 'body.storage'
    }
  });

  console.log({
    title: page.data.title,
    body: page.data.body.storage.value
  });
}

module.exports = getPage;
