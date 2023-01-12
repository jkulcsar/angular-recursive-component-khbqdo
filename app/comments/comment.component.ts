import { Component, Input } from '@angular/core';

@Component({
  selector: 'comments',
  template: `
     <div *ngFor="let comment of comments">
      <ul>
       <li>
         {{comment.text}}
         <comments [comments]="comment.comments" *ngIf="comment.comments"></comments>
       </li>
      </ul>
    </div>
  `,
})
export class CommentComponent {
  @Input() comments;
}