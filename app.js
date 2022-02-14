// const detailsButton = document.getElementById("detail-submit-btn");

// detailsButton.addEventListener("click", function () {
//   const buyerDetails = document.getElementById("buyer-details-input");
//   document.getElementById("buyer-info").innerText = buyerDetails.value;
//   buyerDetails.value = "";
// });

// const addProductBtn = document.getElementById("add-details-btn");

// addProductBtn.addEventListener("click", function () {
//   const infoTable = document.getElementById("info-table");
//   const itemName = document.getElementById("item-name-input");
//   const itemPrice = document.getElementById("item-price-input");
//   const itemQuantity = document.getElementById("item-quantity-input");

//   if (
//     itemName.value == "" ||
//     itemPrice.value < 0 ||
//     itemQuantity.value < 0 ||
//     itemPrice.value == "" ||
//     itemQuantity.value == ""
//   ) {
//     console.log("sorry");
//     return;
//   }

//   {
//     /* <tr>
//  <th >1</th>
//  <td>Mark</td>
// <td>Otto</td>
// <td class='item-total'>@mdo</td>
// </tr> */
//   }

//   const totalPrice = parseInt(itemPrice.value) * parseInt(itemQuantity.value);

//   //   const tr = document.createElement("tr"); //<tr></tr>
//   const tr = element("tr");
//   const th = element("th");

//   const td1 = document.createElement("td");
//   const td2 = document.createElement("td");
//   const td3 = document.createElement("td");

//   td3.classList.add("item-total");
//   th.innerText = itemName.value; //<th >onion</th>
//   td1.innerText = itemPrice.value; //<th >1</th>
//   td2.innerText = itemQuantity.value;
//   td3.innerText = totalPrice;

//   tr.appendChild(th);
//   tr.appendChild(td1);
//   tr.appendChild(td2);
//   tr.appendChild(td3); //<td class="item-total">35</td>
//   infoTable.appendChild(tr);
//   totalCalculation();
// });

// function element(param) {
//   return document.createElement(param);
// }

// function totalCalculation() {
//   const subTotal = calculateSubTotal();

//   const subTotalToDisplay = document.getElementById("sub-total");
//   subTotalToDisplay.innerText = subTotal;

//   const tax = subTotal * 0.2;

//   document.getElementById("tax").innerText = tax.toFixed(2);
//   document.getElementById("grand-total").innerText = subTotal + tax;
//   document.getElementById("grand-total-2").innerText = subTotal + tax;
// }

// function calculateSubTotal() {
//   let subTotal = 0;

//   const cost = document.getElementsByClassName("item-total");

//   for (let i = 0; i < cost.length; i++) {
//     const element = cost[i]; //<td class="item-total">35</td>
//     const price = parseInt(element.innerText);

//     subTotal = subTotal + price;
//   }

//   return subTotal;
// }
// ..................................................................


document.getElementById('detail-submit-btn').addEventListener('click', function(){
   const inputBuyerInfo = document.getElementById('buyer-details-input');
   document.getElementById('buyer-info').innerText = inputBuyerInfo.value;
   inputBuyerInfo.value = '';
   
});
// item-name-input
// item-price-input
// item-quantity-input
// add-details-btn
document.getElementById('add-details-btn').addEventListener('click', function(){
   // get input field 
   const InputName = document.getElementById('item-name-input');
   const InputPrice = document.getElementById('item-price-input');
   const InputQuantity = document.getElementById('item-quantity-input');
  
   //get input field value
   const InputNameValue = InputName.value;
   const InputPriceValue = InputPrice.value;
   const InputQuantityValue = InputQuantity.value;
   const singlePriceAmount = parseInt(InputPriceValue) * parseInt(InputQuantityValue);
   // input field value clear
   InputName.value= '';
   InputPrice.value= '';
   InputQuantity.value= '';

/*
  <tbody id="info-table">
      <tr>n
         <th >1</th>
         <td>Mark</td>
         <td>Otto</td>
         <td>@mdo</td>
      </tr>
   </tbody>
 */
   // get parent table element 
   const infoTable = document.getElementById('info-table');
   // create tr and td element 
   const tr = document.createElement('tr');
   const th = document.createElement('th');
   const td1 = document.createElement('td');
   const td2 = document.createElement('td');
   const td3 = document.createElement('td');
// ................................................
   // add class all td3 element
   td3.classList.add('all-value');
// .................................................
   // add tr to child th and td 
   tr.appendChild(th);
   tr.appendChild(td1);
   tr.appendChild(td2);
   tr.appendChild(td3);
   // add tr parent info table
   infoTable.appendChild(tr);
   // assign value to th and td
   th.innerText = InputNameValue;
   td1.innerText = InputPriceValue;
   td2.innerText = InputQuantityValue;
   td3.innerText = singlePriceAmount;
   
 
  
   calculateTotal();
});
/* sub-total
tax
grand-total
grand-total-2 */
function calculateTotal(){
   const subTotal =  CalculatorSubTotal();
   const subTotalId  = document.getElementById('sub-total');
   subTotalId.innerHTML = subTotal;

   const taxValue = subTotal * .2;
   const taxFixedVale = taxValue.toFixed(2)
   document.getElementById('tax').innerText = taxFixedVale

   document.getElementById('grand-total').innerText = subTotal + parseFloat(taxFixedVale);
   document.getElementById('grand-total-2').innerText = subTotal + parseFloat(taxFixedVale);




}
function CalculatorSubTotal(){
   let subTotal = 0;
   let cost = document.getElementsByClassName('all-value');
   for(let i = 0; i < cost.length; i++){
      let element = cost[i];
      // console.log(element.innerText);
      const price = parseInt(element.innerText);
      subTotal = subTotal + price; 
   }
   // console.log(subTotal); 
   return subTotal;

}
