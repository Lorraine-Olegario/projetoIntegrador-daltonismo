const optionsButton = document.querySelectorAll('.btn-number');
const numberPage = document.querySelector('#quest-number');

let optionSelected = null;

if (localStorage.hasOwnProperty(numberPage.innerText)) {
    first = localStorage.getItem(numberPage.innerText);
    optionsButton.forEach((element) => {
        if(element.value == first)
            element.classList.add('btn-selected');
    });
}  

optionsButton.forEach((element) => {
    element.addEventListener('click', function() {
        optionsButton.forEach((element) => {
            element.classList.remove('btn-selected');
        });

        this.classList.add('btn-selected');

        localStorage.setItem(numberPage.innerText, this.value);
    })
});
