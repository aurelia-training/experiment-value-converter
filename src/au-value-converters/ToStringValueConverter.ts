export class ToStringValueConverter {
  toView(input:Number) {
    return input.toString();
  }
  fromView(input:string) {
    return parseFloat(input);
  }
}
