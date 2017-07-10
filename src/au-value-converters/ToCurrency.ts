import {valueConverter} from "aurelia-framework";

@valueConverter("toCurrency")
export class ToCurrency {
  toView(input:number, currency:string) {
    return new Intl.NumberFormat("en-US", {style: "currency", currency: currency}).format(input);
  }
}
