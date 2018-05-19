const data = require('./data');
const dom = require('./dom');

const buttonEvent = () => {
  $('#rude').click(() => {
    // build domstring
    dom.domString(data.getDescriptors(), data.getDescriptors(), data.getNouns());
  });
};

module.exports = buttonEvent;
