const IncomingWebhook = require("@slack/webhook").IncomingWebhook;

const url = process.env.SLACK_WEBHOOK_URL;
const webhook = new IncomingWebhook(url);

module.exports = (text) => {
  webhook.send({
    text,
    icon_emoji: ":yoshi:",
    username: "genba-neko",
  });
};
