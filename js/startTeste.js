const optionsButton = document.querySelectorAll('.btn-number');
let optionSelected = null;


optionsButton.forEach((element) => {
    element.addEventListener('click', function() {
        optionsButton.forEach((element) => {
            element.classList.remove('btn-selected');
        });

        this.classList.add('btn-selected');

        localStorage.setItem("first", this.value);
        console.log(localStorage.getItem("first"));
    })
});

console.log(localStorage.getItem("first"));