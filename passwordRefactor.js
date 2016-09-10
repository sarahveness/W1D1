function replaceAllOccurrences(input, characterToFind, characterToReplace) {
  input = input.split('');
  for (var i = 0; i < input.length; i++) {
    if (input[i] === characterToFind) {
      input[i] = characterToReplace;
    }
  }
  input = input.join('');
  return input;
}

function passwordNew(input, substitutionValuePairs) {
  substitutionValuePairs.forEach(function (pair) {
    var toFind = pair[0];
    var replacement = pair[1];
    input = replaceAllOccurrences(input, pair[0], pair[1]);
  });
  return input;
}

var test2 = passwordNew('obfuscate', [['a', '4'], ['e', '3'], ['o', '0'], ['l', '1']]);
console.log(test2);
