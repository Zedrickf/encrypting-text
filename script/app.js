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
        showAlert("Please add some text");
        return;
    } else if (!validateInput(txtVar)){
        showAlert("Only lower case and spaces are available");
        initialValues();
        document.getElementById('unscramble-text').value = '';
        return;
    } else {
        document.getElementById('unscramble-text').value = encrypting(txtVar);
        finalValues();
    }
}

// Function to validate only lower case letters and spaces
function validateInput(text) {
    return /^[a-zñ\s]+$/.test(text);
}

// Function to "encrypt" the text
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

// Modified function to "unscramble" the text
function decryptText() {
    
    //to copy the text in the encrypt-text area
    let outtext = document.getElementById('encrypt-text').value.trim();
    
    if (outtext === '') {
        showAlert("There is no information to decrypt");
        return;
    }
    
    document.getElementById('unscramble-text').value = outtext; // to copy the text and move it to the unscramble-text area

    let decryptedText = '';
    let i = 0;

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

// Function to copy text
function copyText() {
    const output = document.getElementById('unscramble-text').value;
    
    if (!output) {
        showAlert("There is no text to copy");
    } else {
        navigator.clipboard.writeText(output).then(() => {
            showMesage('Text copied successfully');
        }).catch(err => {
            console.error('Error copying text: ', err);
        });
        finalValues();
    }
}

// Function to hide the button and show the image
function initialValues() {
    document.getElementById('encrypt-text').value = '';
    document.getElementById('encrypt__bg-img').style.display = 'block';
    document.getElementById('button-place').style.display = 'none';
    console.log("Cleaning the input field");
}

// Function to show the button and hide the image
function finalValues() {
    document.getElementById('encrypt__bg-img').style.display = 'none';
    document.getElementById('button-place').style.display = 'flex';
    document.getElementById('encrypt-text').value = '';
}

// Function to style the alert message
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

// Function to style the success message
function showMesage(message, duration = 1500) {  
    const modal = document.getElementById("customMesage");
    const span = document.getElementsByClassName("close")[0];
    document.getElementById("sucessMessage").textContent = message;
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