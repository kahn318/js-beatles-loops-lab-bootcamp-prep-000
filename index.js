// add string to the empty array created
function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0, n = musicians.length; i < n; i++) {
      array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}

function johnLennonFacts(facts) {
  var i = 0;
  while (i < facts.length) {
    facts[i] += "!!!";
    i++;
  }
  return facts;
}

function iLoveTheBeatles(number) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    number++;
  } while (number < 15)

  return array
}
