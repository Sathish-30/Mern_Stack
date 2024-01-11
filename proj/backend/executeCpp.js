import {exec} from "child_process";
import path from "path";
import fs from "fs";
// Creating a output directory
const outputPath = path.join(path.resolve("./") , "outputs");
if(!fs.existsSync(outputPath)){
    fs.mkdirSync(outputPath , {recursive:true});
}

const executeCpp = (filePath) => {
    const jobId = path.basename(filePath , '.cpp');
    const outPath = path.join(outputPath , `${jobId}.out`);
    return new Promise((resolve , reject) => {
        exec(`g++ ${filePath} -o ${outPath} && cd ${outputPath} && ./${jobId}.out` , 
            (err , stdout , stderr) => {
                err && reject({err , stderr});
                stderr && reject(stderr)
                resolve(stdout);
            }
        );
    });
}

export default executeCpp;