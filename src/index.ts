import * as Fs from 'fs';
import {Helper} from './helper.js';

console.log("fs");

class Index {
    static HelperInst = new Helper();
    protected dirContents: string[];

    constructor(path: string) {
        this.dirContents = Fs.readdirSync(path);
    }

    run(): void {
        console.log(new Helper().getHelp(), this.dirContents);
    }
}

const index = new Index(".");
index.run();