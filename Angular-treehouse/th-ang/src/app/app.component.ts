import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ang Emo App';
  emoji = ['🎉', '😍', '😜', '👍'];
  expression = '';
  activeEmoji: string;
  changeEmoji() {
    this.activeEmoji = this.emoji[Math.floor(Math.random() * this.emoji.length)];
  }
}

// Difference between "=" sign and "==" sign and "===" sign

// use "=" to assign a value to value

let hello = "Hello";

// By using "==" you check if something is equal to something else.
// "==" only compares value not type

1 == "1" // true

// By using === you check if something is equal to something else.
//  "===" compares the value and type
1 === 1 // true
1 === "1" // false