export class App {
  number:number = 42.33212;
  currencyFormat:string = "USD";

  setRandomNumber() {
    this.number = Math.random()*100;
  }
}
