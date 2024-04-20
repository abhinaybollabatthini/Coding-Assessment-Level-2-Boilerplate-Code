const productImg = document.getElementById('product-img');
const img1 = document.getElementById('img1') ;
const img2 = document.getElementById('img2') ;
const img3 = document.getElementById('img3') ;
const img4 = document.getElementById('img4') ;

const img1Src = img1.getAttribute('src') ;
const img2Src = img2.getAttribute('src') ;
const img3Src = img3.getAttribute('src') ;
const img4Src = img4.getAttribute('src') ;

const addToCartBtn = document.getElementById('add-to-cart-btn');
const colorInputs = document.querySelectorAll('.color input');
const sizeInputs = document.querySelectorAll('.size input') ;
const form = document.querySelector('.form') ;

const colorText = document.getElementById('color-text');
const sizeText = document.getElementById('size-text');

const minusBtn = document.getElementById('minus-btn') ;
const plusBtn = document.getElementById('plus-btn') ;
const number = document.getElementById('number') ;
const outputText = document.getElementById('output-text') ;

    let quantity = 1;
    let total = 12999;
    let color = '' ;
    let size = '' ;

    minusBtn.addEventListener('click', () => {

       
        if (quantity > 1) {
            quantity--;
            number.innerHTML = quantity;
            total = quantity * 12999;

            
           
            
        }
    });

    plusBtn.addEventListener('click', ()=> {

        
        quantity++;
        number.innerHTML = quantity;
        total = quantity * 12999;
        
    });


function chose() {
    

    colorInputs.forEach(input => {
        if (input.checked) {
            color = input.getAttribute('id');
            
        }
    });

    sizeInputs.forEach(input => {
        if (input.checked) {
            size = input.getAttribute('id');
            
        }
    });

    
    

    outputText.innerHTML = `
    <p class="output-messege">Embrace Sideboard with color ${color} and size ${size} added to cart</p>
    ` ;

    number.innerHTML = 1 ;

    
    
       
    
}

addToCartBtn.addEventListener('click', () => {
   
    chose();
});

img1.addEventListener('click' , () => {
    productImg.src = img1Src ;
}) ;

img2.addEventListener('click' , () => {
    productImg.src = img2Src ;
}) ;

img3.addEventListener('click' , () => {
    productImg.src = img3Src ;
}) ;

img4.addEventListener('click' , () => {
    productImg.src = img4Src ;
}) ;

