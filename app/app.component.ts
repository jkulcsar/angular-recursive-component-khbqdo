import { Component } from '@angular/core'
import { CurrentDeviceState } from './model/device-state.data';
import { comments } from './comments/comments-data'
import { exampleInput } from './file-dir-view/file-dir-view.data'



@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular 5';
  commentsData = comments;
  fileDirData = exampleInput;
  aDeviceState = CurrentDeviceState;
}
