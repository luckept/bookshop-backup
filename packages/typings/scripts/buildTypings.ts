// happy path
import { createYwCollector } from "@bookshop/tools";
import path from "path";

export enum FileType {
  TS = ".ts",
  DTS = ".d.ts",
}

type FileTypeToAbsPath = Record<FileType, string[]>;

const collector = createYwCollector();

const rootTsFileAbsPath = path.resolve(process.cwd(), "./enum.ts");

const rootDTsFileAbsPath = path.resolve(process.cwd(), "./index.d.ts");

collector.getFilesInDirPath(path.resolve(process.cwd(), "./modules"));

const fileTypeToAbsPathMap: FileTypeToAbsPath = {
  [FileType.TS]: [],
  [FileType.DTS]: [],
};

collector.fileAbsPathLake.forEach((absPath) => {
  if (collector.ifFileTypeIsTheGivinType(absPath, FileType.DTS)) {
    fileTypeToAbsPathMap[FileType.DTS].push(absPath);
  } else {
    fileTypeToAbsPathMap[FileType.TS].push(absPath);
  }
});

function replaceImport(text: string) {
  return text.replace(/import.*?;/gs, "");
}

let rootTsContent = "";
let rootDTsContent = "";

fileTypeToAbsPathMap[FileType.TS].forEach((absPath) => {
  rootTsContent += replaceImport(collector.getFileContent(absPath));
});

fileTypeToAbsPathMap[FileType.DTS].forEach((absPath) => {
  rootDTsContent += replaceImport(collector.getFileContent(absPath)).replace(/export/gs, "");
});

collector.setFileContent(rootTsFileAbsPath, rootTsContent);
collector.setFileContent(rootDTsFileAbsPath, rootDTsContent);
