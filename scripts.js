const burgaBtn = document.getElementById('burga-btn')
const hidden = document.querySelector('.hidden')

burgaBtn.addEventListener('click', function(){
    hidden.classList.toggle('show')
})