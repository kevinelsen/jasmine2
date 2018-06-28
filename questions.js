var languagesArrayCreation = function () {

  return  ['Html','CSS','Java','PHP'];
}

var numbersArrayCreation = function () {

    return [0,1,2,3,4,5];
}

var ElementReplacement = function (languages) {
languages.splice(2,1,'Javascript');
  return languages;
}

var AddElementToLanguagesArray = function (languages) {
languages.splice(4,0,'Ruby','Python');
  return languages;
}

var AddElementToNumbersArray = function (numbers) {
numbers.unshift(-2,-1);
  return numbers;
}

var deleteArrayFirstElement = function (languages) {
  languages.splice(0,1);
    return languages;

}

var deleteArrayLastElement = function (languages) {
languages.splice(4,1);
  return languages;
}

var stringToArray = function (socialMediaInString) {

  return socialMediaInString.split(',');
}

var arrayToString = function (languages) {

  return languages.join(',');
}

var arraySort = function (socialMedia) {

  return socialMedia.sort();
}

var arrayInvert = function (socialMedia){


  return socialMedia.reverse();
}
