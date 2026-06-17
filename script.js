const form = document.querySelector('form')
form.addEventListener('submit', (event) =>{
    event.preventDefault();
    const name = document.getElementById('name').value;
    const birthdate = document.getElementById('birthdate').value;
    const position = document.getElementById('position').value;
    const instagram = document.getElementById('instagram').value;
    const video = document.getElementById('video').value;

    if (name.trim() === '') {
        alert("Erro: O nome não pode ficar em branco.")
        return;
    }

    if (birthdate === '') {
        alert("Erro: Por favor, insira sua data de nascimento.")
        return;
    }

    if (position === '') {
        alert("Erro: Selecione sua posição no campo.")
        return;
    }

    if (instagram.trim() === '') {
        alert("Erro: Coloque seu usuário no Instagram.")
        return;
    }

    if (video.trim() === '' || (!video.includes('youtube.com') && !video.includes('youtu.be'))) {
        alert("Erro: Insira um link válido do youtube.")
        return;
    }
    const successBox = document.getElementById('success-message');
    successBox.style.display = 'block'
    
    form.reset();
    setTimeout(function (){
        successBox.style.display = 'none'
    }, 3000)
})

const nameInput = document.getElementById('name')

nameInput.addEventListener('input', () =>{
    if (nameInput.value.trim() !== '') {
        nameInput.classList.remove('erro')
        nameInput.classList.add('sucesso')
    } else {
        nameInput.classList.remove('sucesso')
        nameInput.classList.add('erro')
    }
})

const videoInput = document.getElementById('video')
const videoContainer = videoInput.parentElement;

videoInput.addEventListener('input', () =>{
    const videoValue = videoInput.value.trim();
    if (videoValue === '' || (!videoValue.includes('youtube.com') && !videoValue.includes('youtu.be'))) {
        videoContainer.classList.remove('sucesso');
        videoContainer.classList.add('erro');
    } else {
        videoContainer.classList.remove('erro');
        videoContainer.classList.add('sucesso');
    }
})

const birthdateInput = document.getElementById('birthdate');

birthdateInput.addEventListener('change', () =>{
    if (birthdateInput.value !== '') {
        birthdateInput.classList.remove('erro');
        birthdateInput.classList.add('sucesso');
    } else {
        birthdateInput.classList.remove('sucesso');
        birthdateInput.classList.add('erro');
    }
})

const positionInput = document.getElementById('position');

positionInput.addEventListener('change', () =>{
    if(positionInput.value !== '') {
        positionInput.classList.remove('erro');
        positionInput.classList.add('sucesso');
    } else {
        positionInput.classList.remove('sucesso');
        positionInput.classList.add('erro');
    }
})

const instagramInput = document.getElementById('instagram');
const instagramContainer = instagramInput.parentElement;

instagramInput.addEventListener('input', () =>{
    if (instagramInput.value.trim() !== '') {
        instagramContainer.classList.remove('erro')
        instagramContainer.classList.add('sucesso')
    } else {
        instagramContainer.classList.remove('sucesso')
        instagramContainer.classList.add('erro')

    }
})