class item{
  amount: number;
  price: number;
  isChecked:boolean;
}
function checkoutBalance() {
var pizza =new item();
pizza.amount=parseInt((<HTMLInputElement>document.getElementById("pizzaamount")).value,10);
pizza.price=parseInt((<HTMLInputElement>document.getElementById("pizza")).value, 10);
var inputElement=<HTMLInputElement>document.getElementById("pizza");
pizza.isChecked=inputElement.checked;
var burger =new item();
burger.amount=parseInt((<HTMLInputElement>document.getElementById("burgeramount")).value,10);
burger.price=parseInt((<HTMLInputElement>document.getElementById("burger")).value, 10);
inputElement=<HTMLInputElement>document.getElementById("burger");
burger.isChecked=inputElement.checked;
var crepe =new item();
crepe.amount=parseInt((<HTMLInputElement>document.getElementById("crepeamount")).value,10);
crepe.price=parseInt((<HTMLInputElement>document.getElementById("crepe")).value, 10);
inputElement=<HTMLInputElement>document.getElementById("crepe");
crepe.isChecked=inputElement.checked;
var sum:number=0;
var element = <HTMLInputElement> document.getElementById("pizza");
var isChecked = element.checked;
if(pizza.isChecked==true)
{
  sum=sum+(pizza.amount*pizza.price);
}
if(burger.isChecked==true)
{
  sum=sum+(burger.amount*burger.price);
}
if(crepe.isChecked==true)
{
  sum=sum+(crepe.amount*crepe.price);
}
  if(confirm("The totalsum is "+sum+ "\n Confirm order?")==true)
  {
    document.getElementById("confirmed").innerHTML = "Order Confirmed";
  }
}
