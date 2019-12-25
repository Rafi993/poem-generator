import { random, randomElement } from './utils';

fetch(`${window.location.origin}/ngrams.json`)
  .then(res => res.json())
  .then(ngrams => {});

// document.getElementById('title').innerText = '';
// document.getElementById('sonnet').innerHTML = ;
