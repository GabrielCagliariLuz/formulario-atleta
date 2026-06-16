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