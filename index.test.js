const RangeList = require("./index.js");

describe("RangeList", () => {
  const rl = new RangeList();

  test("add [1, 5]", () => {
    rl.add([1, 5]);
    expect(rl.print()).toEqual([[1, 5]]);
  });

  test("add [10, 20]", () => {
    rl.add([10, 20]);
    expect(rl.print()).toEqual([
      [1, 5],
      [10, 20],
    ]);
  });

  test("add [20, 20]", () => {
    rl.add([20, 20]);
    expect(rl.print()).toEqual([
      [1, 5],
      [10, 20],
    ]);
  });

  test("add [20, 21]", () => {
    rl.add([20, 21]);
    expect(rl.print()).toEqual([
      [1, 5],
      [10, 21],
    ]);
  });

  test("add [2, 4]", () => {
    rl.add([2, 4]);
    expect(rl.print()).toEqual([
      [1, 5],
      [10, 21],
    ]);
  });

  test("add [3, 8]", () => {
    rl.add([3, 8]);
    expect(rl.print()).toEqual([
      [1, 8],
      [10, 21],
    ]);
  });

  test("add [10, 10]", () => {
    rl.remove([10, 10]);
    expect(rl.print()).toEqual([
      [1, 8],
      [10, 21],
    ]);
  });

  test("add [10, 11]", () => {
    rl.remove([10, 11]);
    expect(rl.print()).toEqual([
      [1, 8],
      [11, 21],
    ]);
  });

  test("add [15, 17]", () => {
    rl.remove([15, 17]);
    expect(rl.print()).toEqual([
      [1, 8],
      [11, 15],
      [17, 21],
    ]);
  });

  test("add [3, 19]", () => {
    rl.remove([3, 19]);
    expect(rl.print()).toEqual([
      [1, 3],
      [19, 21],
    ]);
  });
});

describe("RangeList", () => {
  const rl = new RangeList();

  test("add [1, 5]", () => {
    rl.add([1, 5]);
    expect(rl.print()).toEqual([[1, 5]]);
  });

  test("Do nothing if the range is empty", () => {
    rl.add([1, 1]);
    expect(rl.print()).toEqual([[1, 5]]);
  });

  test("Do nothing if the range is invalid", () => {
    rl.remove([3, 1]);
    expect(rl.print()).toEqual([[1, 5]]);
  });
});
