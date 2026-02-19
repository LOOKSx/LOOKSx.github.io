/* ---------- AUTH ---------- */

function register(){
    let u=username.value;
    let p=password.value;

    if(!u||!p){
        alert("กรอกข้อมูลให้ครบ");
        return;
    }

    if(localStorage.getItem("user_"+u)){
        alert("Username ซ้ำ");
        return;
    }

    localStorage.setItem("user_"+u,p);
    alert("สมัครสำเร็จ");
    location.href="login.html";
}

function login(){
    let u=username.value;
    let p=password.value;

    let saved=localStorage.getItem("user_"+u);

    if(saved===p){
        localStorage.setItem("login",u);
        location.href="index.html";
    }else{
        alert("ข้อมูลไม่ถูกต้อง");
    }
}

function checkLogin(){
    let user=localStorage.getItem("login");
    if(!user) location.href="login.html";

    if(document.getElementById("welcome"))
        welcome.innerText="👋 "+user;
}

function logout(){
    localStorage.removeItem("login");
    location.href="login.html";
}

/* ---------- SHOP ---------- */

function addCart(name,price){
    let cart=JSON.parse(localStorage.getItem("cart"))||[];
    cart.push({name,price});
    localStorage.setItem("cart",JSON.stringify(cart));
    loadCart();
}

function loadCart(){
    let cart=JSON.parse(localStorage.getItem("cart"))||[];
    let html="";
    let total=0;

    cart.forEach((item,i)=>{
        total+=item.price;
        html+=`
        <p>${item.name} - ${item.price} บาท
        <button onclick="removeItem(${i})">ลบ</button></p>`;
    });

    html+=`<hr><b>รวม ${total} บาท</b>`;
    cartBox.innerHTML=html;
}

function removeItem(i){
    let cart=JSON.parse(localStorage.getItem("cart"));
    cart.splice(i,1);
    localStorage.setItem("cart",JSON.stringify(cart));
    loadCart();
}

function checkout(){
    let cart=JSON.parse(localStorage.getItem("cart"))||[];

    if(cart.length===0){
        alert("ยังไม่มีสินค้า");
        return;
    }

    alert("สั่งซื้อสำเร็จ 🎉");
    localStorage.removeItem("cart");
    loadCart();
}
