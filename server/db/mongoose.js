var mongoose = require('mongoose');

const config = {
  autoIndex: false,
  useNewUrlParser: true
};

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, config);

module.exports = { mongoose };
