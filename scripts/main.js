
// set sidebar focus
const sideTagArea = document.querySelector(".sidetag-area");
const cartIcon = document.querySelector('.icon-bag-svg');
const cartArea = document.querySelector('.cart-area');
const sideTagAreaChild = n=>document.querySelector(".sidetag-area").children[n]
const closeBtn = document.querySelector('.close-button');

for(let i =0; i<sideTagArea.children.length;i++){
    sideTagAreaChild(i).addEventListener('click',()=>{fullpage_api.moveTo(`${i+1}`,0)})

}


// cart on/off
cartIcon.addEventListener('click',()=>{
    cartArea.classList.add('show-cart');
    cartArea.children[0].classList.add('show-cart-content');
})

cartArea.addEventListener('click',(e)=>{
    if(e.target ==cartArea||e.target==closeBtn){
        cartArea.classList.remove('show-cart');
        cartArea.children[0].classList.remove('show-cart-content');
    }
})