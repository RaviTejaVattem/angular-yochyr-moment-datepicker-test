import { Component } from "@angular/core";

import moment from "moment";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";
  value: Date;

  valueChange() {
    console.log(moment(this.value).utc().toString());
    console.log("valueChange", moment(this.value).endOf('day').toString());
    console.log("valueChange", moment(this.value).endOf('day').utc().format('YYYY-MM-DDTHH:mm:ss').toString());
  }

  constructor() {
    console.log(moment().utc().toString());
  }
}
