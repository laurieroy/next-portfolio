import fs from "fs"
import {join }from "path"

const getDir = (path: string) => join(process.cwd(), path);

const getFileNames = (dir: string): string[] => { 
  return fs.readdirSync(dir);
 }

 const getItemInPath = (filePath: string):string => {
  const fileContent = fs.readFileSync(filePath, "utf-8");
  return fileContent;
 }

 export {
  getDir,
  getFileNames,
  getItemInPath
 }