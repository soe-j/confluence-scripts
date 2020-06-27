const dotenv = require('dotenv');
const config = dotenv.config().parsed;

const createPage = () => {
  console.log(config);
}

exports.createPage = createPage
