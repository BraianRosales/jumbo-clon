import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircleWithNumberComponent } from 'src/app/shared/components/circle-with-number/circle-with-number.component';

@Component({
  selector: 'app-upper-bar',
  standalone: true,
  imports: [CommonModule, CircleWithNumberComponent],
  templateUrl: './upper-bar.component.html',
  styleUrls: ['./upper-bar.component.scss']
})
export class UpperBarComponent {

}
