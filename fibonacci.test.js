const { fibs, fibsRec } = require("./fibonacci");

describe("fibs", () => {
  test("returns empty array for 0", () => {
    expect(fibs(0)).toEqual([]);
  });

  test("returns [0] for 1", () => {
    expect(fibs(1)).toEqual([0]);
  });

  test("returns [0, 1] for 2", () => {
    expect(fibs(2)).toEqual([0, 1]);
  });

  test("returns [0, 1, 1] for 3", () => {
    expect(fibs(3)).toEqual([0, 1, 1]);
  });

  test("returns [0, 1, 1, 2] for 4", () => {
    expect(fibs(4)).toEqual([0, 1, 1, 2]);
  });

  test("returns first 8 fibonacci numbers for 8", () => {
    expect(fibs(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  });

  test("returns correct sequence for 10", () => {
    expect(fibs(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
  });
});

describe("fibsRec", () => {
  test("returns empty array for 0", () => {
    expect(fibsRec(0)).toEqual([]);
  });

  test("returns [0] for 1", () => {
    expect(fibsRec(1)).toEqual([0]);
  });

  test("returns [0, 1] for 2", () => {
    expect(fibsRec(2)).toEqual([0, 1]);
  });

  test("returns [0, 1, 1] for 3", () => {
    expect(fibsRec(3)).toEqual([0, 1, 1]);
  });

  test("returns [0, 1, 1, 2] for 4", () => {
    expect(fibsRec(4)).toEqual([0, 1, 1, 2]);
  });

  test("returns first 8 fibonacci numbers for 8", () => {
    expect(fibsRec(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  });

  test("returns correct sequence for 10", () => {
    expect(fibsRec(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
  });
});
