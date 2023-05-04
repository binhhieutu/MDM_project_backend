const MALE = "male";
const FEMALE = "female";
const DEFAULT_AVATAR = `${global.gConfig.base_url}${global.gConfig.icon.default_avatar}`;
const PLATFORM = { ios: "ios", android: "android" };
const USER_STATUS = { active: "active", deleted: "deleted" };
const LOGIN_METHOD = {
  email: "email",
  phone: "phone",
  facebook: "facebook",
  google: "google",
  apple: "apple",
  zalo: "zalo",
};
module.exports = {
  DEFAULT_AVATAR,
  MALE,
  FEMALE,
  PLATFORM,
  USER_STATUS,
  LOGIN_METHOD,
};
