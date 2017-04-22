import {Component} from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ['app.component.css']
})

export class AppComponent {
  title: String;

  // 构造函数
  constructor() {
    this.title = "AngularDemo";
  }
}
