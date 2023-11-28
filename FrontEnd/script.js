const inputName = document.getElementById('name');
const inputEmail = document.getElementById('email');
const inputPhone = document.getElementById('phone');
const userList = document.getElementById('users');
const form = document.getElementById('form');
const msg = document.querySelector('.msg');

form.addEventListener('submit', addUser);
userList.addEventListener('click', removeUser);
userList.addEventListener('click', editUser);

//Accessing userData from localStorage and displaying it
window.addEventListener('DOMContentLoaded', () => {
    const localStorageObject = localStorage;
    // console.log(localStorageObject.length);
    const localStorageKeys = Object.keys(localStorageObject);

    for (var i = 0; i < localStorageKeys.length; i++) {
        const key = localStorageKeys[i];
        const userDetailString = localStorageObject[key];
        const userDetailObj = JSON.parse(userDetailString);
        showUserDetail(userDetailObj);
    }
})

function showUserDetail(user) {
    //Creating different elements to be added in DOM
    const li = document.createElement('li');
    const delBtn = document.createElement('input');
    const editBtn = document.createElement('input');

    //Creating Delete button
    delBtn.className = 'del float-right';
    delBtn.setAttribute('type', "button");
    delBtn.setAttribute('value', "DELETE");

    //Creating Edit button
    editBtn.className = 'edit float-right';
    editBtn.setAttribute('type', "button");
    editBtn.setAttribute('value', "EDIT");

    //Appending all above 3 elements
    li.appendChild(document.createTextNode(`${user.userName} - ${user.userEmail} - ${user.userPhone}`));
    li.appendChild(delBtn);
    li.appendChild(editBtn);

    if(localStorage.length > 0) {
        flag = true;
        appointmentListCSS();
    }

    //appendimg the li to ul inside DOM
    userList.appendChild(li);
}

function addUser(e) {
    e.preventDefault();

    if (inputName.value === '' || inputEmail.value === '' || inputPhone.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
        console.log(1);

        setTimeout(() => msg.remove(), 3000);
    } else {
        //Creating different elements to be added in DOM
        const li = document.createElement('li');
        const delBtn = document.createElement('input');
        const editBtn = document.createElement('input');

        //Creating Delete button
        delBtn.className = 'del float-right';
        delBtn.setAttribute('type', "button");
        delBtn.setAttribute('value', "DELETE");

        //Creating Edit button
        editBtn.className = 'edit float-right';
        editBtn.setAttribute('type', "button");
        editBtn.setAttribute('value', "EDIT");

        //Appending all above 3 elements
        li.appendChild(document.createTextNode(`${inputName.value} - ${inputEmail.value} - ${inputPhone.value}`));
        li.appendChild(delBtn);
        li.appendChild(editBtn);

        //appendimg the li to ul inside DOM
        userList.appendChild(li);

        //Storing user Data as an object
        const userData = {
            userName: `${inputName.value}`,
            userEmail: `${inputEmail.value}`,
            userPhone: `${inputPhone.value}`
        }

        //setting localStorage with userData
        localStorage.setItem(inputEmail.value, JSON.stringify(userData));
        console.log(localStorage.length);
        if(localStorage.length > 0) {
            flag = true;
            appointmentListCSS();
        }

        inputName.value = '';
        inputEmail.value = '';
        inputPhone.value = '';
    }
}

function removeUser(e) {
    if (e.target.classList.contains('del')) {
        //spliting li text, returns an array
        partsString = e.target.parentElement.innerText.split('-');
        email_add = partsString[1].trim();
        userList.removeChild(e.target.parentElement);
        localStorage.removeItem(email_add);
        if(localStorage.length == 0) {
            flag = false;
            appointmentListCSS();
        }
        console.log(localStorage.length);
    }
}

function editUser(e) {
    if (e.target.classList.contains('edit')) {
        partsString = e.target.parentElement.innerText.split('-');
        inputName.value = partsString[0].trim();
        inputEmail.value = partsString[1].trim();
        inputPhone.value = partsString[2].trim();
        localStorage.removeItem(partsString[1].trim());
        userList.removeChild(e.target.parentElement);
    }
}

function appointmentListCSS() {
    var appointments = document.getElementById('appointments');
    // var flag = true;
    appointments.style.visibility = 'hidden';
    if(flag) {
        appointments.classList.add('appointments-style');
        appointments.style.visibility = 'visible';
    } else {
        appointments.classList.remove('appointment-style');
        appointments.style.visibility = 'hidden';
    }
    
}

appointmentListCSS();