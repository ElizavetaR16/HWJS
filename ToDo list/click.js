var input = document.querySelector("input[type='text']");
var ul = document.querySelector("ul");
var pencil = document.querySelector("#pencil");
var saveBtn = document.querySelector(".save");
var clearBtn = document.querySelector(".clear");
var tipsBtn = document.querySelector(".tipBtn");
var closeBtn = document.querySelector(".closebtn");
var close2Btn = document.querySelector(".close2btn");
var overlay = document.getElementById("overlay");
var overlay2 = document.getElementById("overlay2");
var coronaBtn = document.querySelector(".coronaBtn");

import {DeleteTodo} from './mi.js';

function Button_f (){
    // открывание типса и виджета по нажатию на кнопки
tipsBtn.addEventListener("click", function(){
    overlay.style.height="100%";
});
closeBtn.addEventListener("click", function(){
    overlay.style.height="0";
});  
coronaBtn.addEventListener("click", function(){
    overlay2.style.height="100%";
});
close2Btn.addEventListener("click", function(){
    overlay2.style.height="0";
});
    // Очищение и сохранение списка по нажатию на кнопки
clearBtn.addEventListener('click', function () {
    ul.innerHTML= "";
    localStorage.removeItem("todoList", ul.innerHTML);
 });
saveBtn.addEventListener('click', function () {
    localStorage.setItem ("todoList", ul.innerHTML);
 });
}


function icons_f (){
    // функция добавления элементов в список
input.addEventListener ("keypress", function(key){
    if(key.which ===13){
        var li = document.createElement ("li");
        var spanElement = document.createElement ("span");
        var icon = document.createElement ("i");
        var newtodo = this.value;
        this.value ="";
        if(newtodo == "") {
            alert("Вы ничего не написали!");
        } else{
        icon.classList.add ('fas', 'fa-trash-alt');
        spanElement.append (icon);
        ul.appendChild(li).append(spanElement, newtodo);
        DeleteTodo();
        }
    }
});
ul.addEventListener('click', function (e) {
    if(e.target.tagName === "LI") {
       e.target.classList.toggle('checked');
    } else if(e.target.tagName === "SPAN") {
       var div = e.target.parentNode;
       div.remove();
    }
}, 
false);
pencil.addEventListener('click', function(){
    input.classList.toggle ("display");

});
}
export {Button_f,icons_f };