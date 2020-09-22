const request = require("./request");

module.exports = ({ title, body, ancestorId }) => {
  return request({
    method: "post",
    url: "/wiki/rest/api/content",
    data: {
      title: title,
      type: "page",
      space: {
        key: process.env.CONFLUENCE_SPACE,
      },
      ancestors: [
        {
          id: ancestorId,
        },
      ],
      body: {
        storage: {
          value: body,
          representation: "storage",
        },
      },
    },
  });
};
