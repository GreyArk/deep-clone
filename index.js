'use strict';

function getDataType(data) {
  return Object.prototype.toString.call(data).slice(8, -1);
}

function isCyclic(data) {
  let seenObjects = [];

  function detect(data) {
    if (data && getDataType === 'object') {
      if (seenObjects.indexOf(data) !== -1) {
        return true;
      }

      seenObjects.push(data);

      for(var key in data) {
        if (data.hasOwnProperty(key) === true && detect(data[key])) {
          return true;
        }
      }
    }
    return false;
  }
  return detect(data);
}

const deepClone = (data) => {
  if (data === null || data === undefined) {
    return undefined;
  }

  const dataType = getDataType(data);

  if (dataType === 'Date') {
    let cloneDate = new Date();
    cloneDate.setTime(data.getTime());

    return cloneDate;
  }
}
