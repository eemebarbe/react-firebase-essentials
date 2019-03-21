const metrics = {
  baseUnit: 12,
  globalBorderRadius: 4,
  get bodyWidth() {
    return this.baseUnit * 64;
  },
  get bodyPadding() {
    return this.baseUnit * 2;
  },
  get mobileMenuHeight() {
    return this.baseUnit * 4;
  },
  get headerHeight() {
    return this.baseUnit * 6;
  }
};

export default metrics;
