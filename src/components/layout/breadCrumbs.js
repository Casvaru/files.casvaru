const url = window.location
const $span = document.getElementById('span')
$span.textContent = url.pathname
$span.setAttribute('href', url.href)
