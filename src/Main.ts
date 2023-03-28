import * as Fs from 'fs';
import {Helper} from './Helper.js';

console.log("fs");

class Main {
    static HelperInst = new Helper();
    protected dirContents: string[];

    constructor(path: string) {
        this.dirContents = Fs.readdirSync(path);
    }

    run(): void {
        console.log(new Helper().getHelp(), this.dirContents);
    }
}

const index = new Main(".");
index.run();