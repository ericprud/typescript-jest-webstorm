import {Main} from "../src/Main";
import {FileTemplate} from "../src/util/FileTemplate";

describe('Main', () => {
    it("should should load YAML", () => {
        const main = new Main('.');
        let ret = main.run("test/resources/typescript.yaml", FileTemplate.Format.YAML);
        expect(typeof ret).toBe('string');
    });
    it("should should load JSON", () => {
        const main = new Main('.');
        let ret = main.run("test/resources/typescript.json", FileTemplate.Format.JSON);
        expect(typeof ret).toBe('string');
    });
});