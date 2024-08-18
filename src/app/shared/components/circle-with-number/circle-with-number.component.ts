import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-circle-with-number',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './circle-with-number.component.html',
  styleUrls: ['./circle-with-number.component.scss']
})
export class CircleWithNumberComponent {
  @Input() number: string = '1';
}
