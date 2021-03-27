const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const ul = document.querySelector('ul');
const heading = document.querySelector('h2');

btn.addEventListener('click', addListedItem);


function clearField() {
    input.value = '';
}

function upFirstLetter(input) {
    return input.value.charAt(0).toUpperCase() + input.value.slice(1);
}


function showHeading() {
    const liArr = document.querySelectorAll('ul li');

    const tasks = Array.from(liArr);


    if(tasks.length){
        heading.style.display = 'block';
    } else {
        heading.style.display = 'none';
    }
}

function addListedItem(e) {
    if(input.value === ''){
        alert ('napishi shtoto');
        return;
    } 

    const li = document.createElement('li');
    const i = document.createElement('i');
    const a = document.createElement('a');
    i.className = 'fas fa-times remove';
    li.innerText = upFirstLetter(input);
    a.appendChild(i);
    li.appendChild(a);
    ul.appendChild(li);
    
    clearField();
    
    showHeading();
    
    a.addEventListener('click', deleteListedItem);
    e.preventDefault()
}


function deleteListedItem(e) {
    e.target.parentElement.parentElement.remove();  
    showHeading();
    
}
