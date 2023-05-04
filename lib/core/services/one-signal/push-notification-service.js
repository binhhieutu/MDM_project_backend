const OneSignal = require("onesignal-node");

const client = new OneSignal.Client(
  global.gConfig.oneSignal.appId,
  global.gConfig.oneSignal.appKey
);

module.exports = async () => {
  const notification = {
    name: { en: "My notification Name" },
    contents: { en: "English Message" },
    headings: { en: "English Title" },
    include_player_ids: ["f643e5af-3dcd-4847-bb99-c1ee9cd81dfd"],
  };

  try {
    const response = await client.createNotification(notification);

    console.log(JSON.stringify(response.body));
  } catch (e) {
    if (e instanceof OneSignal.HTTPError) {
      // When status code of HTTP response is not 2xx, HTTPError is thrown.
      console.log(e.statusCode);
      console.log(e.body);
    }
  }
};
