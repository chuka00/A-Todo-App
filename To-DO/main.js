let addTodoButton = document.getElementById('addToDo');
let todoContainer = document.getElementById('todo-container');
let inputField = document.getElementById('inputfield');

addTodoButton.addEventListener('click',function(){
    var paragraph = document.createElement('p')
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    todoContainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        todoContainer.removeChild(paragraph);
    })
})
