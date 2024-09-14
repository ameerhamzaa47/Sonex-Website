// Header Navbar

var show = document.getElementById("show");
var opn = document.getElementById("open");
opn.addEventListener("click", function () {
  show.classList.toggle("active");
});


// Cart-Tab JS

let iconcart=document.querySelector(".icon-cart")
let close=document.querySelector(".close")
let body=document.querySelector("body")

iconcart.addEventListener("click",()=>{
    body.classList.toggle("showCart")
})
close.addEventListener("click",()=>{
    body.classList.toggle("showCart")
})

// Flilter Categories Search Bar

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  const input = document.getElementById("myInput");
  const filter = input.value.toUpperCase();
  const div = document.getElementById("myDropdown");
  const a = div.getElementsByTagName("a");
  for (let i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}


let arr=[]

jsonData=async ()=>{
  let prom= await fetch("Products.json")
  let data=await prom.json()
  arr.push(...data)

  display()
}

jsonData()


const list_path1 = document.querySelector("#list_path1");
const list_path2 = document.querySelector("#list_path2");
const list_path3 = document.querySelector("#list_path3");
const list_path4 = document.querySelector("#list_path4");


 display=()=>{


   let arr1=arr.splice(0,8)
   arr1.forEach(element=>{
     list_path1.innerHTML +=`
     <div class="productsItem">
     <div class="imgHover">
     <img class="PahliImg" src="${element.Image}" alt="">
     <img class="dosriImg" src="${element.Image1}" alt="">
     </div>
     <p>${element.title}</p>
     <h6>${element.name}</h6>
     <b>Rs. ${element.Price}</b>
     <button class="cartButton"><i class="fa-solid fa-plus"></i> Add To Cart</button>
     </div>`
    })



// Filter From arr1

//Frying Pan

    let filFryingPan=document.getElementById("filFryingPan")
    filFryingPan.addEventListener("click",function(){
      list_path4.innerHTML = '';
     let FryingPan=arr1.filter(fil)
     for(let i=0;i<8;i++){
      if(FryingPan[i].category=="FryingPan"){


                 // H2 Hide After Filter
                  let hr=document.querySelectorAll(".products h2")[0]
                  let hr1=document.querySelectorAll(".products h2")[1]
                  let hr2=document.querySelectorAll(".products h2")[2]
                  hr.style.display="none"
                  hr1.style.display="none"
                  hr2.style.display="none"

                  // hr Hide After Filter
                  let h2=document.querySelectorAll(".products hr")[0]
                  let h21=document.querySelectorAll(".products hr")[1]
                  let h22=document.querySelectorAll(".products hr")[2]
                  h2.style.display="none"
                  h21.style.display="none"
                  h22.style.display="none"

                  // Other product remove
                  list_path1.style.display="none"
                  list_path2.style.display="none"
                  list_path3.style.display="none"


          list_path4.innerHTML +=`
     <div class="productsItem">
     <div class="imgHover">
     <img class="PahliImg" src="${FryingPan[i].Image}" alt="">
     <img class="dosriImg" src="${FryingPan[i].Image1}" alt="">
     </div>
     <p>${FryingPan[i].title}</p>
     <h6>${FryingPan[i].name}</h6>
     <b>Rs. ${FryingPan[i].Price}</b>
     <button><i class="fa-solid fa-plus"></i> Add To Cart</button>
     </div>`

      }
     }
   })


   function fil(element){
    return element
   }


   //  Pressure Cooker


PreesureCooker=document.getElementById("PreesureCooker")
PreesureCooker.addEventListener("click",function(){
  list_path4.innerHTML = '';
   let PressurCooker=arr1.filter(fil)
   for(let i=0;i<8;i++){
    if(PressurCooker[i].category=="PressurCooker"){

               // H2 Hide After Filter
                let hr=document.querySelectorAll(".products h2")[0]
                let hr1=document.querySelectorAll(".products h2")[1]
                let hr2=document.querySelectorAll(".products h2")[2]
                hr.style.display="none"
                hr1.style.display="none"
                hr2.style.display="none"

                // hr Hide After Filter
                let h2=document.querySelectorAll(".products hr")[0]
                let h21=document.querySelectorAll(".products hr")[1]
                let h22=document.querySelectorAll(".products hr")[2]
                h2.style.display="none"
                h21.style.display="none"
                h22.style.display="none"

                // Other product remove
                list_path1.style.display="none"
                list_path2.style.display="none"
                list_path3.style.display="none"


        list_path4.innerHTML +=`
   <div class="productsItem">
   <div class="imgHover">
   <img class="PahliImg" src="${PressurCooker[i].Image}" alt="">
   <img class="dosriImg" src="${PressurCooker[i].Image1}" alt="">
   </div>
   <p>${PressurCooker[i].title}</p>
   <h6>${PressurCooker[i].name}</h6>
   <b>Rs. ${PressurCooker[i].Price}</b>
   <button><i class="fa-solid fa-plus"></i> Add To Cart</button>
   </div>`
  }

   }

   
 })


 function fil(element){
  return element
 }



 // Gift Pack

 GiftPack=document.getElementById("GiftPack")
 GiftPack.addEventListener("click",function(){
  list_path4.innerHTML = '';
   let GiftPack=arr1.filter(fil)
   for(let i=0;i<8;i++){
    if(GiftPack[i].category=="GiftPack"){

               // H2 Hide After Filter
                let hr=document.querySelectorAll(".products h2")[0]
                let hr1=document.querySelectorAll(".products h2")[1]
                let hr2=document.querySelectorAll(".products h2")[2]
                hr.style.display="none"
                hr1.style.display="none"
                hr2.style.display="none"

                // hr Hide After Filter
                let h2=document.querySelectorAll(".products hr")[0]
                let h21=document.querySelectorAll(".products hr")[1]
                let h22=document.querySelectorAll(".products hr")[2]
                h2.style.display="none"
                h21.style.display="none"
                h22.style.display="none"

                // Other product remove
                list_path1.style.display="none"
                list_path2.style.display="none"
                list_path3.style.display="none"


        list_path4.innerHTML +=`
   <div class="productsItem">
   <div class="imgHover">
   <img class="PahliImg" src="${GiftPack[i].Image}" alt="">
   <img class="dosriImg" src="${GiftPack[i].Image1}" alt="">
   </div>
   <p>${GiftPack[i].title}</p>
   <h6>${GiftPack[i].name}</h6>
   <b>Rs. ${GiftPack[i].Price}</b>
   <button><i class="fa-solid fa-plus"></i> Add To Cart</button>
   </div>`
  }


   }
 })


 function fil(element){
  return element
 }




//  Product two

let arr2 = arr.splice(0, 2)
arr2.forEach(element => {

  list_path2.innerHTML += `
    <div class="productsItem">
    <div class="imgHover">
      <img class="PahliImg" src="${element.Image}" alt="">
      <img class="dosriImg" src="${element.Image1}" alt="">
    </div>
      <p>${element.title}</p>
      <h6>${element.name}</h6>
      <b>Rs. ${element.Price}</b>
      <button class="cartButton"><i class="fa-solid fa-plus"></i> Add To Cart</button>
  </div>`
})


// Filter From arr2

// Frying Pan 

   filFryingPan=document.getElementById("filFryingPan")
  filFryingPan.addEventListener("click",function(){
   let FryingPan=arr2.filter(fil)
   for(let i=0;i<8;i++){
    if(FryingPan[i].category=="FryingPan"){

               // H2 Hide After Filter
                let hr=document.querySelectorAll(".products h2")[0]
                let hr1=document.querySelectorAll(".products h2")[1]
                let hr2=document.querySelectorAll(".products h2")[2]
                hr.style.display="none"
                hr1.style.display="none"
                hr2.style.display="none"

                // hr Hide After Filter
                let h2=document.querySelectorAll(".products hr")[0]
                let h21=document.querySelectorAll(".products hr")[1]
                let h22=document.querySelectorAll(".products hr")[2]
                h2.style.display="none"
                h21.style.display="none"
                h22.style.display="none"

                // Other product remove
                list_path1.style.display="none"
                list_path2.style.display="none"
                list_path3.style.display="none"


        list_path4.innerHTML +=`
   <div class="productsItem">
   <div class="imgHover">
   <img class="PahliImg" src="${FryingPan[i].Image}" alt="">
   <img class="dosriImg" src="${FryingPan[i].Image1}" alt="">
   </div>
   <p>${FryingPan[i].title}</p>
   <h6>${FryingPan[i].name}</h6>
   <b>Rs. ${FryingPan[i].Price}</b>
   <button><i class="fa-solid fa-plus"></i> Add To Cart</button>
   </div>`
  }



   }
 })


 function fil(element){
  return element
 }


//  Pressure Cooker


PreesureCooker=document.getElementById("PreesureCooker")
PreesureCooker.addEventListener("click",function(){
   let PressurCooker=arr2.filter(fil)
   for(let i=0;i<8;i++){
    if(PressurCooker[i].category=="PressurCooker"){

               // H2 Hide After Filter
                let hr=document.querySelectorAll(".products h2")[0]
                let hr1=document.querySelectorAll(".products h2")[1]
                let hr2=document.querySelectorAll(".products h2")[2]
                hr.style.display="none"
                hr1.style.display="none"
                hr2.style.display="none"

                // hr Hide After Filter
                let h2=document.querySelectorAll(".products hr")[0]
                let h21=document.querySelectorAll(".products hr")[1]
                let h22=document.querySelectorAll(".products hr")[2]
                h2.style.display="none"
                h21.style.display="none"
                h22.style.display="none"

                // Other product remove
                list_path1.style.display="none"
                list_path2.style.display="none"
                list_path3.style.display="none"


        list_path4.innerHTML +=`
   <div class="productsItem">
   <div class="imgHover">
   <img class="PahliImg" src="${PressurCooker[i].Image}" alt="">
   <img class="dosriImg" src="${PressurCooker[i].Image1}" alt="">
   </div>
   <p>${PressurCooker[i].title}</p>
   <h6>${PressurCooker[i].name}</h6>
   <b>Rs. ${PressurCooker[i].Price}</b>
   <button><i class="fa-solid fa-plus"></i> Add To Cart</button>
   </div>`
  }

   }



 })


 function fil(element){
  return element
 }




//  Product three




let arr3 = arr.splice(0, 18)
arr3.forEach(element => {
  list_path3.innerHTML += `
    <div class="productsItem">
    <div class="imgHover">
      <img class="PahliImg" src="${element.Image}" alt="">
      <img class="dosriImg" src="${element.Image1}" alt="">
    </div>
      <p>${element.title}</p>
      <h6>${element.name}</h6>
      <b>Rs. ${element.Price}</b>
      <button class="cartButton"><i class="fa-solid fa-plus"></i> Add To Cart</button>
  </div>`
})

//       // Fillter From arr3

//       // Frying Pan

      filFryingPan=document.getElementById("filFryingPan")
  filFryingPan.addEventListener("click",function(){
   let FryingPan=arr3.filter(fil)
   for(let i=0;i<8;i++){
    if(FryingPan[i].category=="FryingPan"){


               // H2 Hide After Filter
                let hr=document.querySelectorAll(".products h2")[0]
                let hr1=document.querySelectorAll(".products h2")[1]
                let hr2=document.querySelectorAll(".products h2")[2]
                hr.style.display="none"
                hr1.style.display="none"
                hr2.style.display="none"

                // hr Hide After Filter
                let h2=document.querySelectorAll(".products hr")[0]
                let h21=document.querySelectorAll(".products hr")[1]
                let h22=document.querySelectorAll(".products hr")[2]
                h2.style.display="none"
                h21.style.display="none"
                h22.style.display="none"

                // Other product remove
                list_path1.style.display="none"
                list_path2.style.display="none"
                list_path3.style.display="none"


        list_path4.innerHTML +=`
   <div class="productsItem">
   <div class="imgHover">
   <img class="PahliImg" src="${FryingPan[i].Image}" alt="">
   <img class="dosriImg" src="${FryingPan[i].Image1}" alt="">
   </div>
   <p>${FryingPan[i].title}</p>
   <h6>${FryingPan[i].name}</h6>
   <b>Rs. ${FryingPan[i].Price}</b>
   <button><i class="fa-solid fa-plus"></i> Add To Cart</button>
   </div>`


  }



}

 })


 function fil(element){
  return element
 }

//  // Gift Pack

 GiftPack=document.getElementById("GiftPack")
 GiftPack.addEventListener("click",function(){
   let GiftPack=arr3.filter(fil)
   for(let i=0;i<8;i++){
    if(GiftPack[i].category=="GiftPack"){

               // H2 Hide After Filter
                let hr=document.querySelectorAll(".products h2")[0]
                let hr1=document.querySelectorAll(".products h2")[1]
                let hr2=document.querySelectorAll(".products h2")[2]
                hr.style.display="none"
                hr1.style.display="none"
                hr2.style.display="none"

                // hr Hide After Filter
                let h2=document.querySelectorAll(".products hr")[0]
                let h21=document.querySelectorAll(".products hr")[1]
                let h22=document.querySelectorAll(".products hr")[2]
                h2.style.display="none"
                h21.style.display="none"
                h22.style.display="none"

                // Other product remove
                list_path1.style.display="none"
                list_path2.style.display="none"
                list_path3.style.display="none"


        list_path4.innerHTML +=`
   <div class="productsItem">
   <div class="imgHover">
   <img class="PahliImg" src="${GiftPack[i].Image}" alt="">
   <img class="dosriImg" src="${GiftPack[i].Image1}" alt="">
   </div>
   <p>${GiftPack[i].title}</p>
   <h6>${GiftPack[i].name}</h6>
   <b>Rs. ${GiftPack[i].Price}</b>
   <button><i class="fa-solid fa-plus"></i> Add To Cart</button>
   </div>`
  }

   }

   let buttons=document.querySelectorAll("#list_path4 .productsItem")

buttons.forEach(button=>{
  button.addEventListener("click",function(){
    alert("hd")
  })
})
 })


 function fil(element){
  return element
 }


// Click on product button & add Product to the Cart


let cart = document.querySelector(".listCart");
let itemData = document.querySelectorAll(".list .productsItem button");

itemData.forEach(button => {
    button.addEventListener("click", function() {
        alert("Product Added Successfully!");
        let data = button.closest('.productsItem');

        let img = data.querySelector("img").src;
        let name = data.querySelector("h6").innerHTML;
        let priceText = data.querySelector("b").innerHTML;
        let price = parseFloat(priceText.replace("Rs. ", ""));
        let existingCartItem = cart.querySelector(`.name[data-name="${name}"]`);

        if (existingCartItem) {
            let quantityElement = existingCartItem.parentElement.querySelector('.quantity span:nth-child(2)');
            let quantity = parseInt(quantityElement.innerText);
            quantityElement.innerText = quantity + 1;

            // Update total price
            let totalPriceElement = existingCartItem.parentElement.querySelector('.totalPrice');
            let totalPrice = price * (quantity + 1);
            totalPriceElement.innerText = `Rs. ${totalPrice.toFixed(2)}`;
        } else {
            let cartItem = document.createElement('div');
            cartItem.classList.add('item');
            cartItem.innerHTML = `
                <div class="image">
                    <img id="addimage" src="${img}" alt="">
                </div>
                <div class="name" data-name="${name}">${name}</div>
                <div class="totalPrice">Rs. ${price.toFixed(0)}</div>
                <div class="quantity">
                    <span class="minus">-</span>
                    <span>1</span>
                    <span class="plus">+</span>
                </div>`;



            cart.appendChild(cartItem);
        }

        
        let cartIconSpan = document.querySelector("#cartIcon span");
        cartIconSpan.textContent = parseInt(cartIconSpan.textContent) + 1;
    });
});

// Increment/Decrement Button
cart.addEventListener('click', function(e) {
    if (e.target.classList.contains('minus') || e.target.classList.contains('plus')) {
        let quantityElement = e.target.parentElement.querySelector('span:nth-child(2)');
        let quantity = parseInt(quantityElement.innerText);

        if (e.target.classList.contains('minus') && quantity > 1) {
            quantityElement.innerText = quantity - 1;

            
            let totalPriceElement = e.target.closest('.item').querySelector('.totalPrice');
            let price = parseFloat(totalPriceElement.innerText.replace("Rs. ", ""));
            totalPriceElement.innerText = `Rs. ${(price - price / quantity).toFixed(0)}`;
        } else if (e.target.classList.contains('plus')) {
            quantityElement.innerText = quantity + 1;

            
            let totalPriceElement = e.target.closest('.item').querySelector('.totalPrice');
            let price = parseFloat(totalPriceElement.innerText.replace("Rs. ", ""));
            totalPriceElement.innerText = `Rs. ${(price / quantity * (quantity + 1)).toFixed(0)}`;
        } else if (e.target.classList.contains('minus') && quantity === 1) {
            let cartItem = e.target.closest('.item');
            cartItem.remove();
        }

        
        let cartIconSpan = document.querySelector("#cartIcon span");
        cartIconSpan.textContent = parseInt(cartIconSpan.textContent) + (e.target.classList.contains('minus') ? -1 : 1);
    }
});




// Click on image & see detail page
// Event listener for clicking on product images to see details
let detailOnImage = document.querySelectorAll(".list .productsItem img");

detailOnImage.forEach(image => {
  image.addEventListener("click", function () {
    let element = image.parentElement.parentElement;
    console.log(element)
    let pic = element.querySelector(".imgHover .PahliImg").src;
    let pic2 = element.querySelector(".imgHover .dosriImg").src;
    let name = element.querySelector("h6").innerText;
    let price = element.querySelector("b").innerText;

    window.location.href = `Detail Page.html?pic=${pic}&pic2=${pic2}&name=${name}&price=${price}`;
    
  });
});

}



//Detail Page add to cart


let listCart = document.querySelector("#dList");
let dBtn = document.querySelector("#productDetail .dBtn");
let span = document.querySelector("#cartIcon span");

dBtn.addEventListener("click", function(){
  alert("Product Added Successfully!");
  let value = dBtn.parentElement.parentElement;
  console.log(value);
  let img = value.querySelector("img").src;
  let name = value.querySelector("h5").innerHTML;
  let price = parseFloat(value.querySelector("b").innerText.replace(/[^0-9.]/g, '')); // Correctly retrieve the price value and convert to float

  let totalPrice = price;

  listCart.innerHTML = `
    <div class="item">
      <div class="image">
        <img id="addimage" src="${img}" alt="">
      </div>
      <div class="name">${name}</div>
      <div class="totalPrice">${totalPrice.toFixed(2)}</div> <!-- Display initial total price with two decimal places -->
      <div class="quantity">
        <span class="minus">-</span>
        <span class="quantityValue">1</span>
        <span class="plus">+</span>
      </div>
    </div>`;

//Increment Decrement Button
  let minusBtn = listCart.querySelector(".minus");
  let plusBtn = listCart.querySelector(".plus");
  let quantityValue = listCart.querySelector(".quantityValue");
  let totalPriceElement = listCart.querySelector(".totalPrice");

  minusBtn.addEventListener("click", function() {
    let currentValue = parseInt(quantityValue.innerText);
    if (currentValue > 1) {
      currentValue--;
      quantityValue.innerText = currentValue;
      totalPrice = price * currentValue;
      totalPriceElement.innerText = totalPrice.toFixed(2);
      span.innerHTML = currentValue;
    } else {
      listCart.innerHTML = '';
      span.innerHTML = '0';
    }
  });

  plusBtn.addEventListener("click", function() {
    let currentValue = parseInt(quantityValue.innerText);
    currentValue++;
    quantityValue.innerText = currentValue;
    totalPrice = price * currentValue;
    totalPriceElement.innerText = totalPrice.toFixed(2);
    span.innerHTML = currentValue; 
  });

  
  span.innerHTML = '1';
});






//  let listCart=document.querySelector("#dList")
//  let dBtn=document.querySelector("#productDetail .dBtn")
//  let span=document.querySelector("#cartIcon span")

//  dBtn.addEventListener("click",function(){
//   alert("Product Added Succefully!")
//   // span.innerHTML=1
//   let value=dBtn.parentElement.parentElement
//   console.log(value)
//       let img = value.querySelector("img").src;
//         let name = value.querySelector("h5").innerHTML;
//         let price = value.querySelector("b").innerHTML;
        
//         listCart.innerHTML=`
//         <div class="item">
//           <div class="image">
//               <img id="addimage" src="${img}" alt="">
//           </div>
//           <div class="name">${name}</div>
//           <div class="totalPrice">${price}</div>
//           <div class="quantity">
//           <span class="minus">-</span>
//           <span>1</span>
//           <span class="plus">+</span>
//           </div>
//         </div>`
//  })