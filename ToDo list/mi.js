var spans = document.getElementsByTagName("span");
var ul = document.querySelector("ul");


// Удаление записи из списка
export function DeleteTodo() {
    for (let span of spans){
        span.addEventListener("click", function (){
            span.parentElement.remove();
        });
    }
};

// Загрузка данных в локальное хранилище
function loadTodos() {
    const data = localStorage.getItem("todoList");
    if (data) {
        ul.innerHTML = data;
    }
    DeleteTodo();
}
loadTodos();

// Импорт и вызов функций из других модулей
import {Button_f, icons_f} from './click.js';
Button_f ();
icons_f();