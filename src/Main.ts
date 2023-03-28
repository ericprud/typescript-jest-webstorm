import * as Fs from 'fs';
import {FileTemplate} from "./util/FileTemplate";

export class Main {
    protected dirContents: string[];

    constructor(path: string) {
        this.dirContents = Fs.readdirSync(path);
    }

    run(from: string, format: FileTemplate.Format): string {
        const t = new FileTemplate(from, format)
        // console.log([...t.entries()]);
        return '"' + t.substitute('Constructor', {NAME: "Bob", OPTIONS: "OpTiOnS"}) + '"'
            + this.dirContents.join(', ');
    }
}

/* istanbul ignore next */
if (require.main.loaded) {
    const index = new Main(".");
    console.log(index.run("test/resources/typescript.yaml", FileTemplate.Format.YAML));
}