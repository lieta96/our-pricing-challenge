// Arrays that contains the annualy/monthly prices
let annualyPrices = ["&dollar;199.99","&dollar;249.99","&dollar;399.99"]
let monthlyPrices=["&dollar;19.99","&dollar;24.99","&dollar;39.99"]

//Get the elements that contains the prices
let basicPrice=document.getElementById("basic-price");
let professionalPrice=document.getElementById("professional-price");
let masterPrice=document.getElementById("master-price");

// Array that contains the diferents options    
let card=[basicPrice, masterPrice,professionalPrice ];

// Set annualy/monthly Prices using the array card
function setAnnualyPrices(){
  for (let index = 0; index < annualyPrices.length; index++) {
    card[index].innerHTML=annualyPrices[index];    
  }  
};
function setMonthlyPrices(){
  for (let index = 0; index < monthlyPrices.length; index++) {
    card[index].innerHTML=monthlyPrices[index];    
  }
};

//Get the switch button
let switchLabel= document.getElementById("switch-label");

// Change the prices acoording to the switch button
switchLabel.addEventListener('change', function() {
  if (this.checked) {
    setMonthlyPrices();
  } else {
    setAnnualyPrices();
  }
});

setMonthlyPrices();