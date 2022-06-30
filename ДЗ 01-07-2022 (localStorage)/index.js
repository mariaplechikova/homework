const checkbox = document.forms["my-form"].elements["checkbox"]
const text = document.querySelector(`form[name=my-form] input[name=text]`)
const select = document.querySelector(`form[name=my-form] select[name=select`)
buttonSave = document.querySelector('.save')
buttonClear = document.querySelector('.clear')


buttonSave.addEventListener('click', function() {
    localStorage.setItem('keyText', text.value)
    localStorage.setItem('keyCheckbox', checkbox.checked)

    for (let i = 0; i < select.length; i++) {
        if (select.options[i].selected) {
            const index = i
            localStorage.setItem('keySelect', index)
        }
    }
})

buttonClear.addEventListener('click', function() {
    localStorage.removeItem('keyText')
    localStorage.removeItem('keyCheckbox')
    localStorage.removeItem('keySelect')
})

text.setAttribute('value', localStorage.getItem('keyText'))
checkbox.checked = localStorage.getItem('keyCheckbox')
select.options[localStorage.getItem('keySelect')].selected = true


