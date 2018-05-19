const outputDiv = $('#textBox');

const domString = (word1, word2, noun) => {
  let dString = '';
  dString += `<div class="col-sm-6 col-md-4">`;
  dString += `<div class="thumbnail">`;
  dString += `<div class="caption">`;
  dString += `<h3>${word1} ${word2} ${noun}</h3>`;
  dString += `</div>`;
  dString += `</div>`;
  dString += `</div>`;
  printToDom(dString);
};

const printToDom = (insult) => {
  outputDiv.html(insult);
};

// html  will replace
// append will add new one
// text  will replce

module.exports = {
  domString,
};
