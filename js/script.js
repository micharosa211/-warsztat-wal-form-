let newsLetterForm = document.getElementById('newsLetter-form');
console.log(newsLetterForm);
let allAgreeChx = document.getElementById('zgody');




const validate = (event) => {
    
    
    let textName = document.getElementById('name');
    let txtEmail = document.getElementById('email');
    let agree1 = document.getElementById('agree1');
    let errors = document.getElementById('errors');

    errors.innerHTML = '';

    if (textName.value.trim() === '') {
        let liError = document.createElement('li');
        liError.innerText = 'Wpisz imię i nazwisko !';
        errors.appendChild(liError)
    }
    if (txtEmail.value.trim() === '') {
        let liError = document.createElement('li');
        liError.innerText = 'Wpisz email!';
        errors.appendChild(liError)
    }

    if (!txtEmail.value.includes('@')) {
        let liError = document.createElement('li');
        liError.innerText = 'Adres email musi zawierać @';
        errors.appendChild(liError)
    } 
    if (!agree1.checked) {
        let liError = document.createElement('li');
        liError.innerText = 'Nie wyraziłeś zgody 1';
        errors.appendChild(liError)
    }
    if (errors.children.length > 0) {
        event.preventDefault();
    }
   
}

const allAgree = (event) => {
    // console.log(event);
    let agree1 = document.getElementById('zgoda1');
    let agree2 = document.getElementById('zgoda2');
    
    agree1.checked = event.target.checked;
    agree2.checked = event.target.checked;
    
    agree1.disabled = event.target.checked;
    agree2.disabled = event.target.checked;
    
}
newsLetterForm.addEventListener('submit', validate);
allAgreeChx.addEventListener('change', allAgree);

