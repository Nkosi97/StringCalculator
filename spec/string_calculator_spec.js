let Add = require("../src/string_Calculator")
let add = Add.add

describe("add()", function () {

    it("should allow up to two numbers separated by a comma.", function () {
        expect(add("")).toBe(0) // Allows 0 numbers
        expect(add("1")).toBe(1) // Allows 1 number
        expect(add("1,2")).toBe(3) // Allows 2 numbers
    })

    it("should handle more numbers and returns their sum.", function () {
        expect(add("7,3,57,3")).toBe(70)
        expect(add("7,3,3")).toBe(13)
    })

    it("should ignore newlines and continue adding numbers", function () {
        expect(add("1\n2,3")).toBe(6);
    });

    it("should support different delimiters", function () {
        expect(add("//;\n1;2")).toBe(3);
    });

    it("should return an error message and a negative number(s)", function () {
        expect(() => {
            add("/-1\n-2%")
        }).toThrowError("negatives not allowed -1 -2 ");
    })

    it("should ignore numbers bigger than 1000", function () {
        expect(add("2 + 1001")).toEqual(2);
    });

})