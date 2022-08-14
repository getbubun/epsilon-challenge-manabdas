import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'sort-widget',
  templateUrl: './sort-widget.component.html',
  styleUrls: ['./sort-widget.component.css'],
})
export class SortWidgetComponent implements OnChanges {
  @Input() sortState: string | null;
  isUp = false;
  isDown = false;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {}
}
