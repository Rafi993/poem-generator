import { random, randomElement, capitalize } from './utils';

const whiteSpace = ['.', ',', '\n', ';', ':', '--'];
const numberOfWords = 200;
const maxWordsPerLine = 80;

fetch(`${window.location.origin}/ngrams.json`)
  .then(res => res.json())
  .then(ngrams => {
    const keys = Object.keys(ngrams).filter(
      word => ![...whiteSpace, 'an', 'the'].includes(word)
    );

    let currentWord = keys[random(0, keys.length)];
    document.getElementById('title').innerHTML = currentWord;

    let poem = '';
    let line = '';

    for (let i = 0; i < numberOfWords; i++) {
      const possibleWords = ngrams[currentWord];
      if (possibleWords) {
        if (i === 0) {
          // Capitalize first word in poem
          line += capitalize(currentWord);
        }

        currentWord = randomElement(possibleWords);
        if (currentWord) {
          if (whiteSpace.includes(currentWord)) {
            // Join white space chars without space

            line = line + currentWord;
          } else {
            line = line + ' ' + currentWord;
          }

          if (line.length > maxWordsPerLine) {
            poem += line + '<br/>';
            line = '';
          }
        }
      }
    }

    // Adding last line
    poem += line;

    document.getElementById('poem').innerHTML = poem;
  });
