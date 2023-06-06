import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() users: any;
  @Output() deleteUsers = new EventEmitter<any>();

  supprimer() {
    this.deleteUsers.emit(this.users);
  }
  
}
