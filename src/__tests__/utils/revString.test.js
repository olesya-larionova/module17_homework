import {revString} from "../../utils/revString.js";

describe('revereses given string', () => {
    it("reverse Hello", () => {
        expect(revString('Hello')).toBe('olleH');
    });
    it("reverse second", () => {
        expect(revString('second')).toBe('dnoces');
    });
});

