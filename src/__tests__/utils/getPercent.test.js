import { getPercent } from "../../utils/getPercent.js";

describe("testing getPercent", () => {
    it("5 of 100 eq 5", () => {
        expect(getPercent(5,100)).toBe(5);
    });
    it("35 of 350 eq 10", () => {
        expect(getPercent(35,350)).toBe(10);
    });
    it("0 of 10000000 eq 0", () => {
        expect(getPercent(0,10000000)).toBe(0);
    });
    it("20 of 0 eq NaN (division by zero)", () => {
        expect(getPercent(20,0)).toBe(NaN);
    });
    it("-22 of 200 eq -11", () => {
        expect(getPercent(-22,200)).toBe(-11);
    });
    it("1 of 10000000 eq 0.00001", () => {
        expect(getPercent(1,10000000)).toBe(0.00001);  // из-за неточности расчетов выражений с плавающей точкой должно давать ошибку
    });

})