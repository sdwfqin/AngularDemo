import {Component} from "@angular/core";
import {From} from "./from";

@Component({
  selector: "my-form",
  templateUrl: "./form.component.html",
  styleUrls: ['./form.component.css']
})

export class FormComponent {

  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  model = new From(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  newHero() {
    this.model = new From(42, '', '');
  }

  // TODO: 返回这个模型的 JSON 形式。在开发过程中，它用于调试
  get diagnostic() {
    return JSON.stringify(this.model);
  }
}
