const form = document.querySelector('form')
const spans = document.querySelectorAll('.error')
const nameInput = document.getElementById('name')
const birthdateInput = document.getElementById('birthdate')
const positionInput = document.getElementById('position')
const instagramInput = document.getElementById('instagram') 
const videoInput = document.getElementById('video')

const instagramContainer = instagramInput.parentElement
const videoContainer = videoInput.parentElement

function mostrarErro(index, mensagem, elementoBorda){
    spans[index].style.display = 'block'
    spans[index].innerText = mensagem
    elementoBorda.classList.remove('sucesso')
    elementoBorda.classList.add('erro')
}

function removerErro(index, elementoBorda){
    spans[index].style.display = 'none'
    elementoBorda.classList.remove('erro')
    elementoBorda.classList.add('sucesso')
}

nameInput.addEventListener('input', () => {
    if (nameInput.value.trim() === '') {
        mostrarErro(0, 'O nome não pode ficar em branco', nameInput)
    } else {
        removerErro(0, nameInput)
    }
})

birthdateInput.addEventListener('change', () =>{
    if (birthdateInput.value.trim() === '') {
        mostrarErro(1, 'Insira sua data de nascimento', birthdateInput)
    } else {
        removerErro(1, birthdateInput)
    }
})

positionInput.addEventListener('change', () =>{
    if (positionInput.value === '') {
        mostrarErro(2, 'Selecione uma posição válida', positionInput)
    } else {
        removerErro(2, positionInput)
    }
})

instagramInput.addEventListener('input', () =>{
    if (instagramInput.value.trim() === '') {
        mostrarErro(3, 'Preencha o seu usuário do Instagram', instagramContainer)
    } else {
        removerErro(3, instagramContainer)
    }
})

videoInput.addEventListener('input', () =>{
    const videoValue = videoInput.value.trim()
    if (videoValue === '' || (!videoValue.includes('youtube.com') && !videoValue.includes('youtu.be'))) {
        mostrarErro(4, 'Insira um link válido do Youtube', videoContainer)
    } else {
        removerErro(4, videoContainer)
    }
})

form.addEventListener('submit', (event) =>{
    event.preventDefault();
    let formValido = true

    if (nameInput.value.trim() === '') { mostrarErro(0, 'O nome é obrigatório', nameInput); formValido = false}
    if (birthdateInput.value === '') { mostrarErro(1, 'A data é obrigatória', birthdateInput); formValido = false}
    if (positionInput.value === '') { mostrarErro(2, 'A posição é obrigatória', positionInput); formValido = false}
    if (instagramInput.value.trim() === '') { mostrarErro(3, 'O instagram é obrigatório', instagramContainer); formValido = false}

    const videoValue = videoInput.value.trim();
    if (videoValue === '' || (!videoValue.includes('youtube.com') && !videoValue.includes('youtu.be'))) {
        mostrarErro(4, 'O link do Youtube é obrigatório e deve ser válido', videoContainer)
        formValido = false
    }
    
    if (formValido) {
        const submitBtn = form.querySelector('button[type="submit"]')
        const originalText = submitBtn.innerText

        submitBtn.disabled = true
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Enviando...';

        setTimeout(() => {
            const successBox = document.getElementById('success-message')
            successBox.style.display = 'block'

            form.reset();
            document.querySelectorAll('.sucesso').forEach(el => el.classList.remove('sucesso'))

            submitBtn.disabled = false
            submitBtn.innerText = originalText

            setTimeout(() => { successBox.style.display = 'none'}, 3000)
        }, 2000)
    }
})

