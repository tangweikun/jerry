class RangeList {
  constructor() {
    this.rangeList = [];
  }

  isValidRangeFormat(range) {
    if (!Array.isArray(range)) {
      return false;
    }

    if (range.length !== 2) {
      return false;
    }

    if (range[0] >= range[1]) {
      return false;
    }

    return true;
  }

  /**
   * Adds a range to the list
   * @param {Array<number>} range - Array of two integers that specify beginning and end of range.
   */
  add(range) {
    if (!this.isValidRangeFormat(range)) {
      return;
    }

    let [rangeStart, rangeEnd] = range;
    const newRangeList = [];

    let i = 0;
    while (i < this.rangeList.length) {
      const currRange = this.rangeList[i];
      const [currStart, currEnd] = currRange;

      if (rangeStart > currEnd) {
        newRangeList.push(currRange);
        i++;
        continue;
      }

      if (rangeStart > currStart) {
        rangeStart = currStart;
      }
      break;
    }

    const startIndex = i;
    while (i < this.rangeList.length) {
      const currRange = this.rangeList[i];
      const [currStart, currEnd] = currRange;

      if (rangeEnd > currEnd) {
        if (i !== startIndex && i !== this.rangeList.length - 1) {
          newRangeList.push(currRange);
        }
        i++;
        continue;
      }

      if (rangeEnd >= currStart) {
        rangeEnd = currEnd;
        i++;
      }
      break;
    }

    newRangeList.push([rangeStart, rangeEnd]);
    this.rangeList = [...newRangeList, ...this.rangeList.slice(i)];
  }

  /**
   * Removes a range from the list
   * @param {Array<number>} range - Array of two integers that specify beginning and end of range.
   */
  remove(range) {
    if (!this.isValidRangeFormat(range)) {
      return;
    }

    const [rangeStart, rangeEnd] = range;
    const newRangeList = [];

    let i = 0;
    while (i < this.rangeList.length) {
      const currRange = this.rangeList[i];
      let [currStart, currEnd] = currRange;

      if (rangeStart > currEnd) {
        newRangeList.push(currRange);
        i++;
        continue;
      }

      if (rangeStart > currStart) {
        newRangeList.push([currStart, rangeStart]);
      }
      break;
    }

    while (i < this.rangeList.length) {
      let currRange = this.rangeList[i];
      let [currStart, currEnd] = currRange;
      i++;

      if (rangeEnd > currEnd) {
        continue;
      }

      if (rangeEnd >= currStart && rangeEnd !== currEnd) {
        currRange = [rangeEnd, currEnd];
      }
      newRangeList.push(currRange);
      break;
    }

    this.rangeList = [...newRangeList, ...this.rangeList.slice(i)];
  }

  /**
   * Prints out the list of ranges in the range list
   */
  print() {
    // Format each range as we desire
    const output = this.rangeList.reduce(
      (acc, currRange) => acc + "[" + currRange[0] + ", " + currRange[1] + ") ",
      ""
    );
    console.log(output);

    // return rangeList for testing
    return this.rangeList;
  }
}

module.exports = RangeList;
