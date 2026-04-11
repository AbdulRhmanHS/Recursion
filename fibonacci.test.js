const { fibs } = require("./fibonacci");

test("fibs returns 1", () => {
  expect(fibs()).toBe(1);
});
