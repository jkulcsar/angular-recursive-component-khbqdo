import { IDirectory } from "./file-dir-view.component";

/*
 * An example input which can be used to view the component
 */
export const exampleInput: IDirectory = {
  dirName: "root",
  fileNames: ["readme.txt", "system.info"],
  childDirs: [{
      dirName: "users",
      fileNames: ["userInfo.txt"],
      childDirs: [{
          dirName: "public",
          fileNames: [],
          childDirs: [{
              dirName: "documents",
              fileNames: [],
              childDirs: []
          }, {
              dirName: "downloads",
              fileNames: [],
              childDirs: []
          }]
      }, {
          dirName: "byte-this",
          fileNames: [],
          childDirs: [{
              dirName: "documents",
              fileNames: ["customer-credit-cards.json", "just-kidding.txt"],
              childDirs: []
          }, {
              dirName: "downloads",
              fileNames: [],
              childDirs: []
          }]
      }]
  }, {
      dirName: "system",
      fileNames: ["systemInfo.txt", "error.log"],
      childDirs: []
  }]
};
