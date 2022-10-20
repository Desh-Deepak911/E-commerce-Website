var chosenCard1 = JSON.parse(localStorage.getItem('selectedProduct'));

console.log(chosenCard1);
chosenCard1.forEach(showCard);

function showCard(chosenCard){

let div1 = document.createElement('div');
div1.className = 'card';
div1.id = "product-card";
div1.style.width = '18rem';

let img = document.createElement('img');
img.src = `${chosenCard.pimg}`;
img.className = "card-img-top";
img.alt = "iPhone 12";


let div2 = document.createElement('div');
div2.className = 'card-body';

let h5 = document.createElement('h5');
h5.className = "card-title";
h5.textContent = `${chosenCard.pname}`;
div2.appendChild(h5);

let pdesc = document.createElement('p');
pdesc.class = "card-text";
pdesc.textContent = `${chosenCard.pdesc}`;

let pprice = document.createElement('h4');
pprice.textContent = `Rs. ${chosenCard.pprice}`;
// pquantity.style.border = '1px solid black';
pprice.style.width = 'auto';

// let pquantity = document.createElement('h6');
// pquantity.textContent = `${chosenCard.pquantity}`;
// // pquantity.style.border = '1px solid black';
// pquantity.style.width = 'auto';

let a1 = document.createElement('a');
a1.className = 'btn btn-primary btn-p';
a1.id = 'cart';
a1.innerHTML = 'Add to Cart';
a1.style.margin = '10px';

let a2 = document.createElement('a');
a2.className = 'btn btn-primary btn-p';
a2.id = 'Buy Now';
a2.innerHTML = 'Buy Now';

div1.style.marginLeft = 40; 

div2.appendChild(pdesc);
div2.appendChild(pprice);
// div2.appendChild(pquantity);
div2.appendChild(a1);
div2.appendChild(a2);
div1.appendChild(img);
div1.appendChild(div2);

div1.style.display = "flex";
div1.style.flexDirection = 'column';
div1.style.padding = '20px';
div1.style.margin = '30px';

document.body.appendChild(div1);
// window.open("products.html", '_blank');

}