const getLastPage = require("./get-last-page");
const createPage = require("./create-page");

module.exports = async ({ newTitle, ancestorId }) => {
  const lastPage = await getLastPage({
    ancestorId,
  });

  const res = await createPage({
    title: newTitle,
    body: lastPage.body.storage.value,
    ancestorId,
  });

  return res.data;
};
