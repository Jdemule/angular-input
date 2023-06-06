import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

 users = [
    { nom: 'Jamal', age: 33, hobby: 'Parfum' },
    { nom: 'Carle', age: 35, hobby: 'Football-americain' },
    { nom: 'Tawfik', age: 44, hobby: 'Train' },
    { nom: 'Bryce', age: 37, hobby: 'Vietnam' },
    { nom: 'Damien', age: 36, hobby: 'Diablo' }
  ];


  deleteUsers(personne: any) {
    const index = this.users.indexOf(personne);
      this.users.splice(index, 1);
  }

}
