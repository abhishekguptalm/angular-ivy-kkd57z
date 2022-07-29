import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-childcomponent',
  templateUrl: './childcomponent.component.html',
  styleUrls: ['./childcomponent.component.css'],
})
export class ChildcomponentComponent implements OnInit {
  @Input() parentMessageToChild = '';

  @Output() childMessageToParent = new EventEmitter<string>();

  value: string = 'This is child message to parent';

  constructor() {}

  ngOnInit() {}

  AddItem(value: string) {
    this.childMessageToParent.emit(value);
  }
}
