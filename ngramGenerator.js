const poems = require('./poems');
const fs = require('fs').promises;

const order = 1;
let ngrams = {};

const write = async ngramsString => {
  await fs.writeFile('./public/ngrams.json', ngramsString, 'utf8');
};

poems.forEach(poem => {
  poem.every((word, index) => {
    if (index + order <= poem.length) {
      if (!ngrams[word]) {
        ngrams[word] = [];
      }

      ngrams[word].push(poem[index + order]);

      return true;
    }
    return false;
  });
});

try {
  write(JSON.stringify(ngrams));
} catch (error) {
  console.log('Unable to create ngrams', error);
}
