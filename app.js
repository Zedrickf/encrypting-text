document.addEventListener('DOMContentLoaded', function() {
    initialValues();
    document.getElementById('unscramble-text').value = '';
});

let txtVar = '';
const replacementMap = {
    'a': 'ai',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufat',
    'ñ': 'ñ'
};

const inverReplacementMap = {
    'ai': 'a',
    'enter': 'e',
    'imes': 'i',
    'ober': 'o',
    'ufat': 'u',
    'ñ': 'ñ'
};

function encryptText() {
    txtVar = document.getElementById('encrypt-text').value.trim();
    
    if (txtVar === '') {
        showAlert ("Please add some text");
        return;
    } else if (!validateInput(txtVar)){
        showAlert ("Only lower case and spaces are availables");
        initialValues();
        document.getElementById('unscramble-text').value = '';
        return;
    } else {
        document.getElementById('unscramble-text').value = encrypting(txtVar);
        finalValues();

    }
    
}

//function to validate only lower case words
function validateInput(text) {
    return /^[a-zñ\s]+$/.test(text);
}

//function to "ecrypt" the text
function encrypting(inputText) {
    
    let encryptedTt = '';

    for (let i = 0; i < inputText.length; i++) {
        const currentChar = inputText[i];

        switch (currentChar) {
            case 'a':
                encryptedTt += replacementMap['a'];
                break;
            case 'e':
                encryptedTt += replacementMap['e'];
                break;
            case 'i':
                encryptedTt += replacementMap['i'];
                break;
            case 'o':
                encryptedTt += replacementMap['o'];
                break;
            case 'u':
                encryptedTt += replacementMap['u'];
                break;
            case 'ñ':
                encryptedTt += replacementMap['ñ'];
                break;
            default:
                encryptedTt += currentChar;
        }
    }

    return encryptedTt;
}

//function to "unscramble" the text
function decryptText() {
    let outtext = document.getElementById('unscramble-text').value;
    let decryptedText = '';
    let i = 0;

    if (outtext === '') {
        showAlert ("There is no information to decrypt");
    } else {
        while (i < outtext.length) {
            if (outtext.slice(i, i + 2) === 'ai') {
                decryptedText += inverReplacementMap['ai'];
                i += 2;
            } else if (outtext.slice(i, i + 5) === 'enter') {
                decryptedText += inverReplacementMap['enter'];
                i += 5;
            } else if (outtext.slice(i, i + 4) === 'imes') {
                decryptedText += inverReplacementMap['imes'];
                i += 4;
            } else if (outtext.slice(i, i + 4) === 'ober') {
                decryptedText += inverReplacementMap['ober'];
                i += 4;
            } else if (outtext.slice(i, i + 4) === 'ufat') {
                decryptedText += inverReplacementMap['ufat'];
                i += 4;
            } else if (outtext[i] === 'ñ') {
                decryptedText += inverReplacementMap['ñ'];
                i += 1;
            } else {
                decryptedText += outtext[i];
                i += 1;
            }
        }

        document.getElementById('unscramble-text').value = decryptedText;
        finalValues();
        console.log(decryptedText);
    }
}
 
//function to copy text
function copyText() {
    const output = document.getElementById('unscramble-text').value;
    
    if (!output) {
         showAlert ("There is no text to copy");
    } else {
        navigator.clipboard.writeText(output).then(() => {
            showMesage ('Text copy sucessfully');
        }).catch(err => {
            console.error('Error al copiar el texto: ', err);
        });
        finalValues();
    }
}

//function to hidde the button and show the image
function initialValues() {
    document.getElementById('encrypt-text').value = '';
    document.getElementById('encrypt__bg-img').style.display='block';
    document.getElementById('button-place').style.display='none';
    console.log("cleaning the inputfield");
}

//function to show the the button and hidde the image
function finalValues() {
    document.getElementById('encrypt__bg-img').style.display='none';
    document.getElementById('button-place').style.display='flex';
    document.getElementById('encrypt-text').value = '';
}

//function to style the alert mesage
function showAlert(message, duration = 1500) {  
    const modal = document.getElementById("customAlert");
    const span = document.getElementsByClassName("close")[0];
    document.getElementById("alertMessage").textContent = message;
    modal.style.display = "block";

    function closeModal() {
        modal.style.display = "none";
    }

    span.onclick = closeModal;
    window.onclick = function(event) {
        if (event.target == modal) {
            closeModal();
        }
    }

    setTimeout(closeModal, duration);
}

//function to style the sucess mesage
function showMesage(message, duration = 1500) {  
    const modal = document.getElementById("customMesage");
    const span = document.getElementsByClassName("close")[0];
    document.getElementById("sucessMessage").textContent = message;
    modal.style.display = "block";

    // Función para cerrar el modal
    function closeModal() {
        modal.style.display = "none";
    }

    // Cerrar al hacer clic en la 'x' o fuera del modal
    span.onclick = closeModal;
    window.onclick = function(event) {
        if (event.target == modal) {
            closeModal();
        }
    }

    // Cerrar automáticamente después de 'duration' milisegundos
    setTimeout(closeModal, duration);
}