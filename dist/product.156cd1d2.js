// header
const e=document.querySelector("header");let t=60;document.addEventListener("scroll",n=>{let s=window.scrollY;t<s?e.style.transform="translateY(-65px)":e.style.transform="translateY(0px)",t=s<=60?60:s});// path
const n=new URL("/all-products/haircare/restorative-hair-mask",window.location.origin),s=document.getElementById("location"),a=n.pathname.slice(1).split("/");let d="";a.forEach(e=>{let t=e.replaceAll("-"," ");d+=`/<a class="location-part" href="#">${t}</a>`}),s.innerHTML=d.slice(1);// menu icon
let l=!1;const c=document.getElementById("categories-icon");function i(){l?c.classList.remove("menu-active"):c.classList.add("menu-active"),l=!l}c.addEventListener("click",i),document.addEventListener("mousedown",e=>{e.stopPropagation(),!c.contains(e.target)&&l&&i()});const r=document.getElementById("search");r.addEventListener("click",function(){r.classList.add("search-active"),setTimeout(()=>r.classList.remove("search-active"),600),l=!l});// form
const o=document.getElementById("buying-details"),m=document.getElementsByClassName("radio"),u=document.getElementsByClassName("buying-labels"),v=document.getElementById("quantity-input"),g=document.getElementById("minus"),E=document.getElementById("plus"),L=document.getElementById("add"),y=document.getElementById("items");let p=1;o.addEventListener("change",()=>{o["buying-option"].value!==m[0].value?(u[0].classList.add("unselected"),u[1].classList.remove("unselected")):(u[0].classList.remove("unselected"),u[1].classList.add("unselected"))}),g.addEventListener("click",()=>{p>1&&(p--,v.value=p)}),E.addEventListener("click",()=>{p<999&&(p++,v.value=p)}),v.addEventListener("change",()=>{p=Number(v.value)}),L.addEventListener("click",e=>{e.preventDefault(),e.target.classList.add("button-flip"),e.target.innerText="Added";let t=Number(y.innerText);y.innerText=t+p>99?99:t+p,setTimeout(()=>{e.target.classList.remove("button-flip")},1e3),setTimeout(()=>{e.target.innerText="Add to cart",p=1,v.value=p},400)});// ingredients
const h=document.querySelectorAll(".ingredients");h.forEach(e=>{let t=e.classList;e.children[2].addEventListener("click",()=>{t.contains("expanded")?(e.classList.remove("expanded"),e.children[2].innerText="+"):(e.classList.add("expanded"),e.children[2].innerText="-")})});// carusel
const f=document.getElementById("slide-left"),B=document.getElementById("slide-right"),x=document.getElementById("products-carousel"),I=document.getElementById("carousel-viewport"),T=window.innerWidth,k=T>700?I.offsetWidth/3:I.offsetWidth;let w=0;f.addEventListener("click",()=>{0===w?w=3:w--,x.style.transform=`translateX(${-(w*k)}px)`}),B.addEventListener("click",()=>{3===w?(w=0,x.style.transform=`translateX(${w*k}px)`):(w++,x.style.transform=`translateX(${-(w*k)}px)`)});//# sourceMappingURL=product.156cd1d2.js.map

//# sourceMappingURL=product.156cd1d2.js.map
