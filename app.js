const link = document.querySelectorAll('#mainmenu ul li a');

link.forEach(link => {
    link.addEventListener('click', function (event) {
        link.forEach(link => {
            link.parrentElement.classList.remove('active');
        })
        this.parrentElement.classList.add('active');
    })
})