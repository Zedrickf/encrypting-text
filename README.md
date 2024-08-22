Matrix Text Encryptor

Este proyecto es un encriptador y desencriptador de texto inspirado en la estética y temática de la película Matrix. La aplicación permite a los usuarios encriptar y desencriptar texto utilizando un mapa de reemplazo personalizado, lo que agrega un toque único y enigmático a los mensajes.
Características

    Encriptar Texto: Convierte el texto normal en un formato encriptado utilizando un mapa de reemplazo basado en palabras clave de la película.
    
    Desencriptar Texto: Revierta el texto encriptado al formato original utilizando el mismo mapa de reemplazo.
    
    Interfaz Inspirada en Matrix: El diseño visual de la página refleja la estética icónica de Matrix, incluyendo efectos visuales, colores oscuros y una atmósfera futurista.
    
    Alertas Personalizadas: Las notificaciones se presentan a través de un modal personalizado que se integra perfectamente con el tema de la página, evitando interrupciones visuales y funcionales.

Cómo Funciona
Mapa de Reemplazo

El proceso de encriptación y desencriptación se basa en un simple mapa de reemplazo de caracteres:

```
javascript

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
```

Encriptar Texto

El texto ingresado es procesado a través de la función encryptText, que utiliza un ciclo for y un switch para reemplazar cada carácter según el replacementMap. El texto encriptado se muestra en un área de texto designada para su posterior uso.
Desencriptar Texto

La función decryptText recorre el texto encriptado y lo convierte de nuevo a su formato original utilizando el inverReplacementMap. El proceso garantiza que cualquier encriptación múltiple sea manejada adecuadamente.

Instalación y Uso

    Clonar el Repositorio

    bash

    git clone https://github.com/tu-usuario/matrix-text-encryptor.git
    cd matrix-text-encryptor

    Abrir el Archivo HTML
        Abre el archivo index.html en tu navegador preferido.

    Encriptar y Desencriptar
        Escribe el texto en el campo de entrada y presiona el botón "Encriptar".
        El texto encriptado aparecerá en el área de salida.
        Para revertir el proceso, presiona el botón "Desencriptar".

Personalización

Modificar el Mapa de Reemplazo

Puedes ajustar el mapa de reemplazo en los archivos JavaScript para utilizar diferentes patrones de encriptación según tus necesidades.
Tematización

El diseño está inspirado en Matrix, pero puedes personalizar los estilos en el archivo CSS para adaptarlo a cualquier otra estética.
Contribuir

Si deseas contribuir al proyecto, siéntete libre de abrir un pull request o crear un issue en el repositorio.
