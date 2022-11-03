# **Proyecto Amigo Secreto**

## Introducción

Realizaremos la creación de una plataforma/herramienta digital para la implementación y logistica de un juego de amigo secreto para una empresa la cual esta constituida por mas de 3000 empleados. 

## Sobre nosotros

Somos un equipo de trabajo conformado por 2 personas localizadas en la ciudad de medellin con la ambición de formular y crear un proyecto de amigo secreto a través de cooperación colectaiva, recursos de virtualidad, compartiendo conocimientos del uno al otro y unidos por el código. 

## Qué haremos?

1. Se enviará un comunicado a toodos los colaboradores de la empresa a través de correo electrónico informando que se llevará a cabo un juego de amigo secreto con fecha limite de respuesta. Las personas que acepten, dependiendo el área y/o dpto de trabajo, serán agregadas en uno de los 10 grupos que se crearán. 

2. Una vez creados los grupos se enviará un segundo comunicado por medio del mismo correo dando a conocer a que grupo pertenece cada persona, como se registrará, modalidad, terminos y condiciones del juego. 

3. Todos los empleados podran registrarse con su nombre, correo electrónico corporativo (Office 365), y de la misma manera se brindará la opción de registrar gustos y disgustos.

- Se crearán grupos. 
- Cada grupo tendrá un lider. 

- Todo el juego será de forma aleatoria.  
- Se asignaran fechas para endulzadas. 
- Se determinará fecha para evento de descubrimiento.

Juan Felipe Bustamante Correa ®

# Qué hicimos?

- El juego será ejecutado y trabajado por un servidor y un cliente, luego de consultar y realizar un proceso investigativo, JavaScript no es capaz de enviar correos electrónicos por si solo, node.js si soporta dicho proceso, los correos elecrónicos serán el medio por el cual las personas se van a comunicar con la maquina para saber que amigo secreto fue el que les tocó. 
Al momento de presionar el botón jugar, se enviaran correo a cada persona registrada en la plataforma, en el correo se encontrará el nombre de la persona que le tocó como amigo secreto, correo corporativo, gustos y disgustos. 

- Instalamos Packaje.json por medio de npm init --yes, con el fin de instalar paquetes o dependencias en el proyecto. Su finalidad es mantener un historial de los paquetes instalados y optimizar la forma en que se generan las dependencias del proyecto y los contenidos de la carpeta node_modules/ 

- Instalamos express por medio del  npm install express, como bien sabemos express es un  framework (Marco de trabajo) para Node.js que sirve para ayudarnos a crear aplicaciones web en menos tiempo ya que nos proporciona funcionalidades como el enrutamiento, opciones para gestionar sesiones y cookies, etc. 

- Instalamos Socket io por medio del npm install socket.io@2.2.0, sirve para realizar conexiones directas entre servidor y cliente sin necesidad de realizar peticiones POST o GET, es como si el servidor o el cliente estuvieran conectados en un mismo host. 

- Instalamos nodemon -D, dependenncia de desarrollo. 

- Instalamos nodemailer por medio de npm install nodemailer, modulo que sirve de interfaz para el envío de correos electrónicos. 

- Instalamos el script "start": "node server.js" para ejecutar nuestro programa, para iniciar nuestro servidor. 

- Instalamos el script de desarrollo "dev": "nodemon server.js", para iniciar, reiniciar nuestro servidor cada vez que haya un cambio en un archivo .js o .html. 
















