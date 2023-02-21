
const email = document.getElementById('email');
const button = document.getElementById("btn");
const error = document.querySelector('.error')


button.addEventListener('submit', (e) =>{
    e.preventDefault()
    const reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!(reg.test(email.value))) {
      error.style.display = 'block'
      email.style.borderColor = 'hsl(354, 100%, 66%)'
      error.innerHTML = 'Please provide a valid email address'
    } else {
      email.style.borderColor = 'var(--pale-blue)'
      error.innerHTML = ''
      email.value = ''
      error.style.display = 'none'
    }
  })
console.log(error);