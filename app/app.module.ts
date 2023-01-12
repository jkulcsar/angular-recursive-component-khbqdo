import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CommentComponent } from './comments/comment.component';
import { FileDirViewComponent } from './file-dir-view/file-dir-view.component';
import { ObjectDisplayComponent } from './app-object-display/app-object-display.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    CommentComponent,
    FileDirViewComponent,
    ObjectDisplayComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
