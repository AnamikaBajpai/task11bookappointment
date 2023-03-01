
//  const myForm = document.querySelector('#my-form');
// // const nameInput =document.querySelector('#name');
// // const emailInput = document.querySelector('#email');
// // const phoneInput = document.querySelector('#phone');
// // const msg =document.querySelector('.msg');
// // const userList = document.querySelector('#users');

// myForm.addEventListener('submit' , onSubmit);

function saveToLocalStorage(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const phonenumber =event.target.phone.value;
    
    localStorage.setItem('name' , name);
    localStorage.setItem('email' , email);
    localStorage.setItem('phonenumber' , phonenumber);

    const obj = {
        name: name,
        email: email,
        phonenumber: phonenumber
    }
   localStorage.setItem('userDetails', JSON.stringify(obj));

}

// function onSubmit(e) {
//     e.preventDefault();

//     if(nameInput.value ==='' || emailInput.value === '' || phoneInput.value ==='') {
//         msg.classList.add('error');
//         msg.innerHTML =' please enter all fields';

//         setTimeout(() => msg.remove(),3000);
      
//     } else {
        
   

//     // const li = document.createElement('li');
//     // //li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value} : ${phoneInput.value}`));

    
//     // userList.appendChild(li);

    // nameInput.value ='';
    // emailInput.value ='';
    // phoneInput.value ='';



    
// }


// }
// }