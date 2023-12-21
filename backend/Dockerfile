# Seleccionamos la imagen base de Docker: la seleccionamos de Docker hub
# Alpine es una pequena version muy ligera y liviana de linux
#Esto quiere decir que cada contenedor tendra alpine de linux y solo nos consumira algunos megas 
#a diferencia de tener un sistema completo como ubuntu o debian

FROM node:18

#indicar una ruta
#indicamos el directorio donde se crea nuestra aplicacion (ruta del mismo contenedor )
#esta ruta no hace referencia a la de nuestra maquina
RUN mkdir -p /home/app

#COPIAMOS ESA RUTA Y LE INDICAMOS EN LA RUTA DEL CONTENEDOR DONDE SE VA A GUARDAR LA APP
COPY . /home/app

#hacer una copia del PACKAGE.JSON Y PACKAGE-LOCK.JSON
#EN LO QUE DOCKER CREA LA CAPA DE LA APLICACION EST PROCESO SOLO SE HACE UNA VEZ
COPY package*.json ./


#si nuestro package.json no cambia, no tendremos que ejecutar el npm install 
RUN npm install

#Exponemos nuestro servidor en el puerto 3000 para poder acceder a nuestro contenedor n
#o al contenedor 
EXPOSE 3000

# Comandos para correr nuestro contenedor 
# Lo guardamos en una matriz  (un arreglo ) para tenerlo por separado 

CMD ["node", "/home/app/index.js"]
# Si utilizamos nodemon seria 
# Cmd ["npm", "run", "start"]