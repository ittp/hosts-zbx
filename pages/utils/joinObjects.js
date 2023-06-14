function joinObjects() {
  var idMap = {};
  // Iterate over arguments
  for (var i = 0; i < arguments.length; i++) {
    // Iterate over individual argument arrays (aka json1, json2)
    for (var j = 0; j < arguments[i].length; j++) {
      var currentID = arguments[i][j]['id'];
      if (!idMap[currentID]) {
        idMap[currentID] = {};
      }
      // Iterate over properties of objects in arrays (aka id, name, etc.)
      for (key in arguments[i][j]) {
        idMap[currentID][key] = arguments[i][j][key];
      }
    }
  }

  // push properties of idMap into an array
  var newArray = [];
  for (property in idMap) {
    newArray.push(idMap[property]);
  }
  return newArray;
}

module.exports = { joinObjects };
