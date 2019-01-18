import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output('navselected') navselected = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  onselect(select: string) {
    this.navselected.emit(select);
  }
}
