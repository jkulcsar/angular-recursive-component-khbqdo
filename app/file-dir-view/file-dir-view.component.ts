/**
 * This component will render a file directory structure
 */
import { Component, Input } from '@angular/core';

export interface IDirectory {
  dirName: string;
  fileNames: string[];
  childDirs: IDirectory[];
}

@Component({
  selector: 'file-dir-view',
  templateUrl: './file-dir-view.component.html',
  styleUrls: ['./file-dir-view.component.css'],
})
export class FileDirViewComponent {
  //receive the prop as input data
  @Input() dirData!: IDirectory;
  //all other processing happens in template file
}
