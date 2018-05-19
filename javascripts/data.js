let nouns = [];
let descriptors = [];

const descriptorsJSON = () => {
  return new Promise((resolve, reject) => {
    $.get('../db/descriptors.json')
      .done((data) => {
        resolve(data.descriptors);
      })
      .fail((err) => {
        reject(`Oi got an error!`, err);
      });
  });
};

const nounsJSON = () => {
  return new Promise((resolve, reject) => {
    $.get('../db/nouns.json')
      .done((data) => {
        resolve(data.nouns); // just resolve array not the whole file
      })
      .fail((err) => {
        reject(`Oi got an error!`, err);
      });
  });
};

const getAllData = () => {
  return Promise.all([descriptorsJSON(), nounsJSON(),])
    .then((monkeyButt) => {
      nouns = monkeyButt[0];
      descriptors = monkeyButt[1];
    }).catch((error) => {
      console.error(error);
    });
};

const initializer = () => {
  getAllData();
};

const getNouns = () => {
  return nouns[Math.floor(Math.random() * nouns.length)].text;
};

const getDescriptors = () => {
  return descriptors[Math.floor(Math.random() * descriptors.length)].text;
};

module.exports = {
  initializer,
  getDescriptors,
  getNouns,
};
