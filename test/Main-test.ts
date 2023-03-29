import {Application} from "../src/Application";
import {FileTemplate} from "../src/util/FileTemplate";

describe('Application', () => {
    it("should should load YAML", () => {
        const main = new Application('.');
        let ret = main.run("test/resources/typescript.yaml", FileTemplate.Format.YAML);
        expect(typeof ret).toBe('string');
    });
    it("should should load JSON", () => {
        const main = new Application('.');
        let ret = main.run("test/resources/typescript.json", FileTemplate.Format.JSON);
        expect(typeof ret).toBe('string');
    });
});