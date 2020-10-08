import * as helpers from "./helpers";

const SAMPLE_DATA = [
  {
    id: "ffc4211a-fb81-45e3-b1d8-2d399a92aa89",
    name: "Buy Olaplex No. 3 Hair Perfector",
    salePrice: 3145,
    retailPrice: 5000,
    imageUrl:
      "https://s.catch.com.au/images/product/0002/2114/593f690189ac9183721654_w200.jpg",
    quantityAvailable: 65,
  },
  {
    id: "f56cb6f2-a926-4ff4-80be-4518b0d1997d",
    name: "Havaianas Top Thongs -  Black",
    salePrice: 1499,
    retailPrice: 2500,
    imageUrl:
      "https://s.catch.com.au/images/product/0001/1431/57aa8e0fcba93464428129_w200.jpg",
    quantityAvailable: 71,
  },
  {
    id: "46397d56-2726-45de-8514-d8ed6984a600",
    name:
      "4 x 60pk Finish Quantum Max Powerball Super Charged Dishwashing Caps Lemon Sparkle",
    salePrice: 5900,
    retailPrice: 18417,
    imageUrl:
      "https://s.catch.com.au/images/product/0001/1909/5d47c0d64988e613254534_w200.jpg",
    quantityAvailable: 56,
  },
];

const HIGHEST = {
  value: "highest",
  text: "Highest price",
};

const LOWEST = {
  value: "lowest",
  text: "Lowest price",
};

describe("helpers", () => {
  describe("sortByLowestPrice()", () => {
    it("should return return SAMPLE_DATA sorted by ascending price amount", () => {
      const expected = [
        {
          id: "f56cb6f2-a926-4ff4-80be-4518b0d1997d",
          name: "Havaianas Top Thongs -  Black",
          salePrice: 1499,
          retailPrice: 2500,
          imageUrl:
            "https://s.catch.com.au/images/product/0001/1431/57aa8e0fcba93464428129_w200.jpg",
          quantityAvailable: 71,
        },
        {
          id: "ffc4211a-fb81-45e3-b1d8-2d399a92aa89",
          name: "Buy Olaplex No. 3 Hair Perfector",
          salePrice: 3145,
          retailPrice: 5000,
          imageUrl:
            "https://s.catch.com.au/images/product/0002/2114/593f690189ac9183721654_w200.jpg",
          quantityAvailable: 65,
        },
        {
          id: "46397d56-2726-45de-8514-d8ed6984a600",
          name:
            "4 x 60pk Finish Quantum Max Powerball Super Charged Dishwashing Caps Lemon Sparkle",
          salePrice: 5900,
          retailPrice: 18417,
          imageUrl:
            "https://s.catch.com.au/images/product/0001/1909/5d47c0d64988e613254534_w200.jpg",
          quantityAvailable: 56,
        },
      ];
      expect([...SAMPLE_DATA].sort(helpers.sortByLowestPrice)).toEqual(
        expected
      );
    });

    it("should not equal sorted and unsorted for array containing different valued objects, SAMPLE_DATA", () => {
      expect([...SAMPLE_DATA].sort(helpers.sortByLowestPrice)).not.toEqual(
        SAMPLE_DATA
      );
    });
  });

  describe("sortByHighestPrice()", () => {
    it("should return SAMPLE_DATA sorted by descending price amount", () => {
      const expected = [
        {
          id: "46397d56-2726-45de-8514-d8ed6984a600",
          name:
            "4 x 60pk Finish Quantum Max Powerball Super Charged Dishwashing Caps Lemon Sparkle",
          salePrice: 5900,
          retailPrice: 18417,
          imageUrl:
            "https://s.catch.com.au/images/product/0001/1909/5d47c0d64988e613254534_w200.jpg",
          quantityAvailable: 56,
        },
        {
          id: "ffc4211a-fb81-45e3-b1d8-2d399a92aa89",
          name: "Buy Olaplex No. 3 Hair Perfector",
          salePrice: 3145,
          retailPrice: 5000,
          imageUrl:
            "https://s.catch.com.au/images/product/0002/2114/593f690189ac9183721654_w200.jpg",
          quantityAvailable: 65,
        },
        {
          id: "f56cb6f2-a926-4ff4-80be-4518b0d1997d",
          name: "Havaianas Top Thongs -  Black",
          salePrice: 1499,
          retailPrice: 2500,
          imageUrl:
            "https://s.catch.com.au/images/product/0001/1431/57aa8e0fcba93464428129_w200.jpg",
          quantityAvailable: 71,
        },
      ];
      expect([...SAMPLE_DATA].sort(helpers.sortByHighestPrice)).toEqual(
        expected
      );
    });

    it("should not equal sorted and unsorted for array containing different valued objects, SAMPLE_DATA", () => {
      expect([...SAMPLE_DATA].sort(helpers.sortByHighestPrice)).not.toEqual(
        SAMPLE_DATA
      );
    });
  });

  describe("sortPriceList()", () => {
    it("should return SAMPLE_DATA sorted by descending price amount for 'HIGHEST' sort method slected", () => {
      const expected = [...SAMPLE_DATA].sort(helpers.sortByHighestPrice);

      expect(helpers.sortPriceList(HIGHEST, SAMPLE_DATA)).toEqual(expected);
    });

    it("should return SAMPLE_DATA sorted by ascending price amount for 'LOWEST' sort method selected", () => {
      const expected = [...SAMPLE_DATA].sort(helpers.sortByLowestPrice);

      expect(helpers.sortPriceList(LOWEST, SAMPLE_DATA)).toEqual(expected);
    });
  });
});
