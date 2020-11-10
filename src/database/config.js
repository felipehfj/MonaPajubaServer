const config = require('../config');

function getByEnv() {
  let dbUri = '';
  switch (config.NODE_ENV) {
    case 'development':
      dbUri = "mongodb+srv://felipe:y5L2JXIa97vhRiLh@mymongocluster.vd5nk.mongodb.net/MonaDoPajubaDev?retryWrites=true&w=majority"
      break;
    case 'production':
      dbUri = "mongodb+srv://felipe:y5L2JXIa97vhRiLh@mymongocluster.vd5nk.mongodb.net/MonaDoPajuba?retryWrites=true&w=majority"
      break;
    default:
      dbUri = "mongodb+srv://felipe:y5L2JXIa97vhRiLh@mymongocluster.vd5nk.mongodb.net/MonaDoPajuba?retryWrites=true&w=majority"
      break;
  }

  return dbUri;
}

module.exports = {
  uri: getByEnv()
};