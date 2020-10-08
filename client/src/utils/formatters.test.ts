import * as formatters from "./formatters";

describe("formatters", () => {
  describe("formatProductsPrice()", () => {
    it("should return 1.00 for 100 input as cents", () => {
      const expected = "1.00";
      expect(formatters.formatProductsPrice(100)).toEqual(expected);
    });

    it("should return .09 for 9 input as cents", () => {
      const expected = "0.09";
      expect(formatters.formatProductsPrice(9)).toEqual(expected);
    });

    it("should return 100.00 for 10000 input as cents", () => {
      const expected = "100.00";
      expect(formatters.formatProductsPrice(10000)).toEqual(expected);
    });
  });
});
