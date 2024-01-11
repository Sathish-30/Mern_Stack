import fs from "fs";
import path from "path";
import {v4} from "uuid";

const uuid = v4;
const dirCodes = path.join(path.resolve("./"), "codes");

if(!fs.existsSync(dirCodes)){
    fs.mkdirSync(dirCodes , {recursive:true});
}

const generateFile = async(format , code) => {
    const jobId = uuid();
    const fileName = `${jobId}.${format}`;
    const filePath = path.join(dirCodes , fileName);
    // console.log(filePath);
    await fs.writeFileSync(filePath , code);
    return filePath;
};
export default generateFile;