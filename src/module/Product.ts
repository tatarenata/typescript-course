import Asus from "./Asus";
import MacBook from "./MacBook";


let asus = new Asus("zenbook", true, true);
console.log(asus);

let macBook = new MacBook(2017, false, false);
console.log("macbook");
macBook.a();
macBook.b();