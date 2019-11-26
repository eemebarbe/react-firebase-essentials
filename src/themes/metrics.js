const metrics = {
  baseUnit: 12,
  baseFontUnit: 12,
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
  },
  get smallText() {
    return this.baseFontUnit * 1.25;
  },
  get regularText() {
    return this.baseFontUnit * 1.5;
  },
  get H1() {
    return this.baseFontUnit * 4;
  },
  get H2() {
    return this.baseFontUnit * 2;
  },
  get H1Mobile() {
    return this.baseFontUnit * 3.5;
  },
  animationLength: 400
};

export default metrics;
