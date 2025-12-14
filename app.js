const PRODUCTS=[{id:1,title:"Ebook",description:"Crypto basics",price:19.99,tag:"Instant"},
{id:2,title:"Course",description:"Trading TA",price:49,tag:"HD"},
{id:3,title:"License Key",description:"Software key",price:29.5,tag:"Key"},
{id:4,title:"Template Pack",description:"HTML templates",price:15,tag:"ZIP"}];

let cart=[];
const grid=document.getElementById("productsGrid");
const drawer=document.getElementById("cartDrawer");
const overlay=document.getElementById("overlay");
const cartCount=document.getElementById("cartCount");
const cartItems=document.getElementById("cartItems");
const cartTotal=document.getElementById("cartTotal");

function renderProducts(){
  grid.innerHTML="";
  PRODUCTS.forEach(p=>{
    const d=document.createElement("div");
    d.className="product-card";
    d.innerHTML=`<h3>${p.title}</h3><p>${p.description}</p>
    <strong>$${p.price}</strong><br>
    <button onclick="addToCart(${p.id})">Add</button>`;
    grid.appendChild(d);
  });
}

function addToCart(id){
  const item=cart.find(x=>x.id===id);
  if(item)item.qty++; else cart.push({...PRODUCTS.find(p=>p.id===id),qty:1});
  update();
  openCart();
}

function removeItem(id){
  cart=cart.filter(i=>i.id!==id);
  update();
}

function update(){
  cartItems.innerHTML="";
  let total=0,count=0;
  cart.forEach(i=>{
    total+=i.price*i.qty; count+=i.qty;
    const div=document.createElement("div");
    div.innerHTML=`${i.title} x${i.qty} - $${(i.price*i.qty).toFixed(2)}
    <button onclick="removeItem(${i.id})">X</button>`;
    cartItems.appendChild(div);
  });
  cartTotal.textContent="$"+total.toFixed(2);
  cartCount.textContent=count;
}

function openCart(){drawer.classList.add("open");overlay.classList.add("show");}
function closeCart(){drawer.classList.remove("open");overlay.classList.remove("show");}

document.getElementById("cartToggle").onclick=openCart;
document.getElementById("closeCart").onclick=closeCart;
overlay.onclick=closeCart;

document.getElementById("checkoutBtn").onclick=()=>alert("Demo checkout");
document.getElementById("year").textContent=new Date().getFullYear();

renderProducts();
