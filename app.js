let txtVar = '';

function encryptText() {
    txtVar = document.getElementById('encrypt-text').value.trim();
    
    if (!validateInput(txtVar)){
        alert("solo letras minusculas");
        document.getElementById('encrypt-text').value  = '';
        return;
    }
    alert ("texto seleccionado");
    let encryptedText = txtVar.split('').reverse().join(''); 
    hiddeImg();
    document.getElementById('unscramble-text').value = encryptedText;
    document.getElementById('encrypt-text').value  = '';
}

function validateInput(text) {
    return /^[a-zñ\s]+$/.test(text);
}

function copyText() {
    const output = document.getElementById('unscramble-text').value;
    
    if (!output) {
        alert("No hay texto para copiar.");
    } else {
        navigator.clipboard.writeText(output).then(() => {
            alert('Texto copiado al portapapeles.');
        }).catch(err => {
            console.error('Error al copiar el texto: ', err);
        });
        document.getElementById('unscramble-text').value = '';
        showImg();
    }
}

function hiddeImg() {
    document.getElementById('encrypt__bg-img').style.display='none';
    document.getElementById('button-place').style.display='flex';
}

function showImg() {
    document.getElementById('encrypt__bg-img').style.display='block';
    document.getElementById('button-place').style.display='none';
}