import {FileTemplate} from "../../src/util/FileTemplate";

describe('FileTemplate', () => {
    it("should substitute", done => {
        const t = new FileTemplate("/home/eric/checkouts/ericprud/ts-jison/packages/lexer-generator/templates/typescript.yaml", FileTemplate.Format.YAML)
        let got = t.substitute('Constructor', {NAME: "Bob", OPTIONS: "OpTiOnS"});
        expect(got).toMatch(/BobLexer extends JisonLexer/);
        expect(got).toMatch(/options: any = OpTiOnS/);
        done();
    });
    it("should whine", done => {
        const t = new FileTemplate("/home/eric/checkouts/ericprud/ts-jison/packages/lexer-generator/templates/typescript.yaml", FileTemplate.Format.YAML)
        expect(() => {
            t.substitute('Constructor999', {NAME: "Bob", OPTIONS: "OpTiOnS"});
        }).toThrow(Error);
        done();
    });
});