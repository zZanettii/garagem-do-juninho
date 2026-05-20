import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  readonly year = new Date().getFullYear();

  readonly developer = {
    name: 'zZanetti',
    github: 'https://github.com/zZanettii',
    linkedin: 'https://www.linkedin.com/in/daniel-zanetti-a24128352',
  };
}
