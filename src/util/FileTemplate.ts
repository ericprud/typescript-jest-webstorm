import * as Fs from 'fs';
import * as JsYaml from 'js-yaml';

export class FileTemplate extends Map<string, string> {
    from: string;

    constructor(from: string, format: FileTemplate.Format) {
        super();
        this.from = from;
        const templateText = Fs.readFileSync(from, "utf8")
        const asObject = format === FileTemplate.Format.YAML
            ? JsYaml.load(templateText) as { [key: string]: string }
            : JSON.parse(templateText);
        Object.keys(asObject).forEach(key => this.set(key, asObject[key]));
    }

    substitute(key: string, mappings: { [key: string]: string }): string {
        if (!this.has(key))
            throw new Error(`key ${key} not found in ${this.from}`)
        const raw = this.get(key)!;
        return Object.keys(mappings).reduce(
            (ret, key) => ret.replace(RegExp(`{{${key}}}`, 'g'), mappings[key]),
            raw
        );
    }
}

export namespace FileTemplate {
    export enum Format {
        YAML,
        JSON
    }
}
