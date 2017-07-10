export class ToCurrencyValueConverter {
  toView(input:number, currency:string) {
    return new Intl.NumberFormat("en-US", {style: "currency", currency: currency}).format(input);
  }
}
