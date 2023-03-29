import {FileTemplate} from "./util/FileTemplate";
import {Application} from "./Application";

// if (require.main.loaded)
/* istanbul ignore next */
console.log(new Application(".").run("test/resources/typescript.yaml", FileTemplate.Format.YAML));