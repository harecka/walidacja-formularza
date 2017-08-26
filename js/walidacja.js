"use strict"

var wyslijBtn= document.getElementById("wyslij");
var wszystkieZgody=document.getElementById("wszystkie-zgody");
var zgodaMarketingowa1 = document.getElementById("zgoda-marketingowa-1");
var zgodaMarketingowa2 = document.getElementById("zgoda-marketingowa-2");

function stanCheckbox() {
    zgodaMarketingowa1.checked = this.checked;
    zgodaMarketingowa2.checked = this.checked;
}


function waliduj() {
    if(document.getElementById("name").value.trim() == "") {
        alert("Wypełnij imie");
    }
if(document.getElementById("email").value.trim() =="") {
        alert("Wypełnij email");
}
    if(!zgodaMarketingowa1.checked){
        alert("zaznacz pierwszą zgodę!");
    }
}
wyslijBtn.addEventListener("click", waliduj);
wszystkieZgody.addEventListener("change",stanCheckbox);