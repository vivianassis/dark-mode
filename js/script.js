const $html = document.querySelector('html')
const $checkbox = document.querySelector('#switch')

//darkmode//
$checkbox.addEventListener('change', function() {
    $html.classList.toggle('dark-mode')
})
//darkmode//
