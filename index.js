"use strict";

function getDataType(data) {
  return Object.prototype.toString.call(data).slice(8, -1);
}

function isCyclic(data) {
  let seenObjects = [];

  function detect(data) {
    if (data && getDataType(data) === "Object") {
      if (seenObjects.indexOf(data) !== -1) {
        return true;
      }

      seenObjects.push(data);

      for (var key in data) {
        if (data.hasOwnProperty(key) === true && detect(data[key])) {
          return true;
        }
      }
    }
    return false;
  }

  return detect(data);
}

const deepClone = function(data) {
  if (data === null || data === undefined) {
    return undefined;
  }

  const dataType = getDataType(data);

  if (dataType === "Date") {
    let clonedDate = new Date();
    clonedDate.setTime(data.getTime());

    return clonedDate;
  }

  if (dataType === "Object") {
    if (isCyclic(data) === true) {
      return data;
    }

    let copiedObject = {};

    // Iterate over the objects keys
    for (let key in data) {
      copiedObject[key] = deepClone(data[key]);
    }

    return copiedObject;
  }

  if (dataType === "Array") {
    let copiedArray = [];

    for (var i = 0; i < data.length; i++) {
      copiedArray.push(deepClone(data[i]));
    }

    return copiedArray;
  } else {
    return data;
  }
};

module.exports = deepClone;
