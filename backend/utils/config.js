require('dotenv').config();

let MONGODB_URI = process.env.MONGODB_URI;

if (process.env.NODE_ENV === 'test' || process.env.NODE_ENV === 'dev') {
  MONGODB_URI = process.env.TEST_MONGODB_URI;
  console.log('NODE_ENV: ', process.env.NODE_ENV);
}

module.exports = {
  PORT: process.env.PORT,
  MONGODB_URI,
  SECRET: process.env.SECRET,
};
