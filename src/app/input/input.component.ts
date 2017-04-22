import {Component} from "@angular/core";

@Component({
  selector: "my-input",
  templateUrl: "./input.component.html"
})

export class InputComponent{

  clickMessage = '';
  values = '';
  values1 = '';
  values2 = '';
  values3 = '';

  onClickMe(){
    if(this.clickMessage == ''){
      this.clickMessage = 'You are my hero!';
    } else {
      this.clickMessage = '';
    }
  }

  onKey(event: KeyboardEvent){
    this.values += (<HTMLInputElement>event.target).value + ' | ';
  }

  onKey1(value: string) {
    this.values1 += value + ' | ';
  }

  onKey2(value: string) {
    this.values2 = value;
  }

  onKey3(value: string) {
    this.values3 = value;
  }

}
