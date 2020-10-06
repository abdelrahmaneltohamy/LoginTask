function checkoutBalance() {
  //document.getElementById("demo").innerHTML = "Hello JavaScript!";
var sum=0;
if(document.getElementById("pizza").checked==true)
{
  sum=sum+(parseInt(document.getElementById("pizza").value, 10)*document.getElementById("pizzaamount").value);
}
if(document.getElementById("burger").checked==true)
{
  sum=sum+(parseInt(document.getElementById("burger").value, 10)*document.getElementById("burgeramount").value);
}
if(document.getElementById("crepe").checked==true)
{
  sum=sum+(parseInt(document.getElementById("crepe").value, 10)*document.getElementById("pizzaamount").value);
}
  if(confirm("The totalsum is "+sum+ "\n Confirm order?")==true)
  {
    document.getElementById("confirmed").innerHTML = "Order Confirmed";
  }
}
