const request = require("./request");

module.exports = async ({ ancestorId }) => {
  const res = await request({
    method: "get",
    url: "wiki/rest/api/content/search",
    params: {
      cql: `ancestor=${ancestorId} order by created desc`,
      limit: 1,
      expand: "body.storage",
    },
  });
  return res.data.results[0];
};
