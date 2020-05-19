import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-color-box',
  templateUrl: './color-box.component.html',
  styleUrls: ['./color-box.component.scss']
})
export class ColorBoxComponent implements OnInit {
  @Input() color: string;
  @Input() opacity = .9;

  constructor() { }

  ngOnInit(): void {
    this.color = '#456789';
  }

}
