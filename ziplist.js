function zipList(listOne, listTwo) {
  const result = [];
  if (listOne.length === listTwo.length) {
    for (let i = 0; i < listOne.length; i++) {
      result.push(listOne[i]);
      result.push(listTwo[i]);
    }
  }
  return result;
}

console.log(zipList([1, 2, 3], ['a', 'b', 'c']));

function zipListTheSimpleWay(listOne, listTwo) {
  let result = [];
  if (_.size(listOne) === _.size(listTwo)) {
    result = _.flatten(_.zip(listOne, listTwo));
    return result;
  }
  return 0;
}

console.log((zipListTheSimpleWay([1, 2, 3], ['a', 'b', 'c'])));
