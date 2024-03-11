const form = document.querySelector('form');
const enterName = document.querySelector('#enterName');
const email = document.querySelector('#exampleInputEmail1');
const subject = document.querySelector('#subject');
const message = document.querySelector('#message');

form.addEventListener('submit', formHandler);


function formHandler(e){
    e.preventDefault();

    const formInfo = {
        EnterName: enterName.value,
        Email: email.value,
        Subject: subject.value,
        Message: message.value
    }

    console.log(formInfo);

    enterName.value = '',
    email.value = '',
    subject.value = '',
    message.value = ''
}
