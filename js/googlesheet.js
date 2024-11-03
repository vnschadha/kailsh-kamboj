const scriptURL = 'https://script.google.com/macros/s/AKfycbz4fkqiAauRIHqYl58wLTHBWKhgkJaGaS21kC_zacG8A5cIMJqfHWhGgaVXNd65jrJ0uQ/exec'
const form = document.forms['kk-book-launch-form']
form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
.then(response => alert("Looking Forward to Seeing You at the Book Launch Event" ))
.then(() => { window.location.reload(); })
.catch(error => console.error('Error!', error.message))
})