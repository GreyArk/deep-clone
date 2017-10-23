const assert = require("assert");
const deepClone = require("./");

describe("deepclone()", function() {
  it("should clone primitives", function() {
    assert.deepEqual(deepClone(6), 6);
    assert.deepEqual(deepClone("test"), "test");
  });

  it("shouold clone Arrays", function() {
    const arr = [1, 2, 3, 4, 5, 6];
    const strArr = ["Hello", "World"];

    assert.deepEqual(deepClone(arr), arr);
    assert.deepEqual(deepClone(strArr), strArr);
  });

  it("should deeply clone arrays", function() {
    const arr = [[1, 2, 3], ["a", "b", "c"], [4, 5, 6], ["d", "e", "f"]];
    let cloneArr = deepClone(arr);
    cloneArr[0] = ["A", "B", "C"];

    assert.notDeepEqual(cloneArr, arr);
  });

  it("should deep clone objects", function() {
    const obj = { a: 0, b: 1, c: 2, d: 4 };

    assert.deepEqual(deepClone(obj), obj);
  });

  it("should deep clone objects", function() {
    const obj = { a: 0, b: 1, c: 2 };
    let copyObj = deepClone(obj);
    copyObj.b = 5;

    assert.notDeepEqual(copyObj, obj);
  });

  it("returns undefined when passed undefined", function() {
    assert.deepEqual(deepClone(undefined), undefined);
  });

  it("returns undefined when null is passed", function() {
    assert.deepEqual(deepClone(null), undefined);
  });

  it("shouls clone date new instances of Date", function() {
    const date = new Date();

    assert.deepEqual(deepClone(date), date);
  });

  it("should clone array of objects", function() {
    const arr = [
      {
        id: 0,
        name: "Kafil Uddin",
        selection: [0, 1, 2]
      },
      {
        id: 1,
        name: "Maksudur Shipon",
        selection: [3, 4, 5]
      }
    ];

    assert.deepEqual(deepClone(arr), arr);
  });

  it("can clone arrays filled with nulls and undefined", function() {
    var arr = [null, undefined, undefined, null];

    assert.deepEqual(deepClone(arr), arr);
  });

  it("can clone objects filled with nulls and undefined", function() {
    var obj = { undefined: 0, null: undefined, "": [undefined, null], 1: null };

    assert.deepEqual(deepClone(obj), obj);
  });

  it("should clone objects with a nested arrays as a value", function() {
    const obj = {
      a: [["things", 1, 2], ["hello", 3, 4], ["world", 7, 29]],
      b: [["test"], ["more testing"]]
    };

    assert.deepEqual(deepClone(obj), obj);
  });

  it("should clone regex", function() {
    assert.deepEqual(deepClone(/foo/g), /foo/g);
  });

  it("should detect circular references", function() {
    const a = {};
    const b = {};
    a.b = b;
    b.a = a;

    assert.equal(deepClone(a), a);
  });
});
