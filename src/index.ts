import * as Fs from 'fs';
console.log("fs");
import {hey} from './helper.js';

console.log(hey());

console.log(Fs.readdirSync("."));