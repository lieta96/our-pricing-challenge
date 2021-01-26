function annualyPrices(){
    let newBasicPrice=document.getElementById("basic-price");
    newBasicPrice.innerHTML="&dollar;199.99";
    let newProfessionalPrice=document.getElementById("professional-price");
    newProfessionalPrice.innerHTML="&dollar;249.99";
    let newMasterPrice=document.getElementById("master-price");
    newMasterPrice.innerHTML="&dollar;399.99";
}; /!--esto funciona--/
function monthlyPrices(){
    let newBasicPrice=document.getElementById("basic-price");
    newBasicPrice.innerHTML="&dollar;19.99";
    let newProfessionalPrice=document.getElementById("professional-price");
    newProfessionalPrice.innerHTML="&dollar;24.99";
    let newMasterPrice=document.getElementById("master-price");
    newMasterPrice.innerHTML="&dollar;39.99";
};

let switchLabel= document.getElementById("switch-label");

switchLabel.addEventListener('change', function() {
  if (this.checked) {
    monthlyPrices();
  } else {
    
    annualyPrices();
  }
});