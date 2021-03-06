import filter from 'lodash/filter';
import json from '../library.json';
import { debounce } from './debounce.js';
import { capitalizeFirstLetter } from './capitalize';
import { removeAccent } from './convert';
import { getQueryParam, updateURL } from './queryParameters.js';

const generateRandomKey = (data = []) => Math.floor(Math.random() * (data.length - 0) + 0);

export const translate = (library, inputText) => {
  let translatedText = inputText;
  filter(library, (politicalLanguage, peopleLanguage) => {
    const peopleLanguageRegex = new RegExp(`\\b${peopleLanguage}\\b`, 'gm');
    const peopleLanguageWithoutAccentRegex = new RegExp(`\\b${removeAccent(peopleLanguage)}\\b`, 'gm');
    
    translatedText = translatedText
      .replace(peopleLanguageRegex, politicalLanguage)
      .replace(peopleLanguageWithoutAccentRegex, politicalLanguage);
    

  });
  updateURL('text', encodeURI(inputText));
  return translatedText;
};

export const translator = (e) => {
  const $translator = document.querySelector('[data-translator="input"]');
  const $result = document.querySelector('[data-translator="result"]');
  const $reload = document.querySelector('[data-translator="reload"]');

  const textTranslate = (e) => {
    let text;
    text = $translator.value.toLowerCase();
    if(text === ''){
      $result.value = 'Tradução';
      updateURL('text', encodeURI(''));
      return;
    }else{
      text = translate(json, text);
      $result.value = capitalizeFirstLetter(text) || 'Tradução';
      $translator.value = capitalizeFirstLetter($translator.value);
    }
    
  };

  const getRandomText = () => {
    const keys = Object.keys(json);
    const phrase = keys[generateRandomKey(keys)];
    $translator.value = capitalizeFirstLetter(phrase);
    $result.value = capitalizeFirstLetter(translate(json, phrase));
  };

  $translator.addEventListener('keyup', (e) => debounce(textTranslate(), 600));
  $reload.addEventListener('click', () => getRandomText());
  window.addEventListener('load', () => {


    if(getQueryParam('text') == '' || getQueryParam('text') == undefined){
      getRandomText();
    }else{
      $translator.value = capitalizeFirstLetter(decodeURI(getQueryParam('text')));
      debounce(textTranslate(), 600);
    }
  
  });
};
