const DEBUG = true;

const PORT_FRONTEND = 8887;

const HOST_URL = DEBUG ? "http://localhost:6700" : "http://newsysu.cn:6700";

const IMG_URL = "http://newsysu.cn:3003/img/"
module.exports = {
  DEBUG,
  PORT_FRONTEND,
  HOST_URL,
  IMG_URL
};
