import * as Fs from 'fs';
console.log("fs");
import {Helper} from './helper.js';

class Index {
    static HelperInst = new Helper();
    private dirContents: string[];

    constructor(path: string) {
        this.dirContents = Fs.readdirSync(path);
    }

    run(): void {
        console.log(new Helper().getHelp(), this.dirContents);
    }
}

const index = new Index(".");
index.run();