import {valueConverter} from "aurelia-framework";

@valueConverter("toString")
export class ToString {
  toView(input:Number) {
    return input.toString();
  }
  fromView(input:string) {
    return parseFloat(input);
  }
}
