var allpro = document.querySelectorAll(".shop-item .shop-item-details  button")
var div1 = document.getElementById("div1")
var div2 = document.getElementById("div2")
var btn1 = document.getElementById("pruch")
var totalprice = 0

allpro.forEach(function (item) {
    item.onclick = function (){
        totalprice +=  +(item.getAttribute("price"))
        div1.innerHTML += item.getAttribute("data-") + "  &  "

        if (div1.innerHTML != ""){
            btn1.style.display = "block"
        }

    }
})

btn1.onclick = function (){
    div2.innerHTML = totalprice + "$"
}