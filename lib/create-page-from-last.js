const getLastPage = require("./get-last-page");
const createPage = require("./create-page");

module.exports = async ({ newTitle, ancestorId }) => {
  try {
    const lastPage = await getLastPage({
      ancestorId,
    });

    const res = await createPage({
      title: newTitle,
      body: lastPage.body.storage.value,
      ancestorId,
    });

    console.log({
      status: res.status,
      statusText: res.statusText,
      id: res.data.id,
      title: res.data.title,
      url: `${res.data._links.base}${res.data._links.editui}`,
    });
  } catch (e) {
    if (e.response) console.error(e.response.data);
    else console.error(e);
  }
};
