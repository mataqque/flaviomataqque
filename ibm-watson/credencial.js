const AssistantV2 = require("ibm-watson/assistant/v2");
const {IamAuthenticator } = require("ibm-watson/auth");

const assistant = new AssistantV2({
    version: '2019-12-20',
    authenticator: new IamAuthenticator({
      apikey: 'L8kBWpvH1Nwm8prnboEGMPIyoUJCXMGUxfu_MgnDbLWh',
    }),
    url: 'https://gateway.watsonplatform.net/assistant/api',
  });


module.exports = assistant;