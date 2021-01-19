let test = require("../src/stringCalculator")
let add = test.add

describe("add()", function () {

    it("allows up to two numbers separated by a comma.", function () {
        expect(add("")).toBe(0) 
        expect(add("1")).toBe(1) 
        expect(add("1,2")).toBe(3)
    })

    it("handles more numbers and returns their sum.", function () {
        expect(add("7,3,57,3")).toBe(70)
        expect(add("7,3,3")).toBe(13)
    })

    it("ignores newlines and continue adding numbers", function () {
        expect(add("1\n2,3")).toBe(6);
    });

    it("supports different delimiters", function () {
        expect(add("//;\n1;2")).toBe(3);
       });

    it("returns an error message and a negative number(s)", function () {
        expect(() => {
            add("/-1\n-2%")
        }).toThrowError("negatives not allowed -1 -2 ");
    })

    it("ignores numbers bigger than 1000", function () {
        expect(add("2 + 1001")).toEqual(2);
    });
    
    it("returns an error message if input is invalid", function () {
        expect(() => {
            add("//;\n1000;1;2;")
        }).toThrowError("ERROR: invalid input");
    })

    it("returns an error message if input is invalid", function () {
        expect(() => {
            add("   //;\n1000,1;2")
        }).toThrowError("ERROR: invalid input");
    })

    it("returns an error message if input is invalid", function () {
        expect(() => {
            add("1,2,3//;\n1000,1;2")
        }).toThrowError("ERROR: invalid input");
    })
})