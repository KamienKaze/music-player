import { Component } from '@angular/core';
import {ProgressBarComponent} from "../progress-bar/progress-bar.component";
import {PlayButtonComponent} from "../play-button/play-button.component";

@Component({
  selector: 'app-player-window',
  standalone: true,
  imports: [
    ProgressBarComponent,
    PlayButtonComponent
  ],
  templateUrl: './player-window.component.html',
  styleUrl: './player-window.component.scss'
})
export class PlayerWindowComponent {
  public songLength: number = 100;
}
