import fs from "fs/promises";
import path from "path";

export async function FileUpload(files = []) {
    try {
        const fileNames = [];
        async function fileHandler(f){
            const bytes = await f.arrayBuffer();
            const buffer = Buffer.from(bytes);
            const fileName = `${Date.now()}-${f.name}`;
            const filePath = path.resolve(`${process.cwd()}/public/`,'uploads');
            await fs.writeFile(`${filePath}/${fileName}`, buffer);
            fileNames.push(fileName);
            return fileName;
        };

        const fileExecutionArr = await Promise.all([...files.map(x => fileHandler(x))]);
        return fileExecutionArr
    } catch (error) {
        throw error
    }    
}

export function getURL(){
const env = process.env.NODE_ENV
if(env == "development"){
  return process.env.DEVOLOPMENT_URL
}
return process.env.PRODUCTION_URL
}