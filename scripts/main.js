
// set sidebar focus
const sideTagArea = document.querySelector(".sidetag-area");
const cartIcon = document.querySelector('.icon-bag-svg');
const cartBackground = document.querySelector('.cart-background');
const cartContent = document.querySelector('.cart-content');
const sideTagAreaChild = n=>document.querySelector(".sidetag-area").children[n]
const closeBtn = document.querySelector('.close-button');
const cartArea =document.querySelector('.cart-area');

for(let i =0; i<sideTagArea.children.length;i++){
    sideTagAreaChild(i).addEventListener('click',()=>{fullpage_api.moveTo(`${i+1}`,0)})

}


// cart on/off
cartIcon.addEventListener('click',()=>{
    cartBackground.classList.add('show-cart');
    cartContent.classList.add('show-cart-content');
})

cartArea.addEventListener('click',(e)=>{
    console.log(`${e.target} is clicked`)
    if(e.target ==cartBackground||e.target==closeBtn){
        cartBackground.classList.remove('show-cart');
        cartContent.classList.remove('show-cart-content');
    }
})