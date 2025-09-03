import { sum, mult } from "../calculator.js";

it("should return sum", () => {
    expect(sum(2, 3)).toEqual(5);
});
it("should return mult", () => {
    expect(mult(2, 3)).toEqual(6);
});
