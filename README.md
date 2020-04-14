# Practica00-Consumo-de-APIs-en-la-nube

Arquitectura cliente-servidor:
La arquitectura funciona cuando un cliente solicita ingresar a una pagina en internet para realizar alguna petición, a su vez, el servicio de internet interactúa con la base de datos y esta devuelve la información solicitada, de la misma forma, el servicio de internet y el servicio web intercambia información para que la información se agregue a la pagina HTML, y finalmente la pagina muestra el resultado al cliente.

![image](https://user-images.githubusercontent.com/34308601/79171868-c58c9280-7db8-11ea-9db7-066c7428fed4.png)

DESARROLLO DE LA PRACTICA:

HTML:
En principio se debe crear una pagina web con html, es una pagina sencilla, con un menú de búsqueda que se lo crea de la siguiente forma:

![image](https://user-images.githubusercontent.com/34308601/79141663-e389d100-7d7f-11ea-9b97-158f0bb1d1b8.png)

Luego de ello, hay que crear una tabla en donde se van a mostrar todos los datos generales de                              cada pelicula:
![image](https://user-images.githubusercontent.com/34308601/79141676-e8e71b80-7d7f-11ea-99bf-ef8c45dbba70.png)

Tambien se crea otra tabla dentro de id detalles para muestra a detalle con todos los datos de cada pelicula y dos botones para la paginacion que se lo hace de la siguinete forma:
![image](https://user-images.githubusercontent.com/34308601/79141690-edabcf80-7d7f-11ea-925e-04ee9d71c1e9.png)

JAVASCRIPT
En la parte de javascript se crean varias funciones para un correcto proceso: en primera una funcion del boton buscar en donde se pasa el titulo ingresado y se llama a la funcion buscarla url de busqueda en la api:
![image](https://user-images.githubusercontent.com/34308601/79141702-f00e2980-7d7f-11ea-8463-d088b24d07da.png)

La siguiente funcion busca en la base de datos de la api todos los datos relacionados al nombre de la pelicula que se ha ingresado:
![image](https://user-images.githubusercontent.com/34308601/79141716-f43a4700-7d7f-11ea-8ca7-66e45a2a4cad.png)

La siguiente funcion busca por el id y devuelve todos los datos a detalle de cada pelicula para mostrar en la pagina web:
![image](https://user-images.githubusercontent.com/34308601/79141720-f7cdce00-7d7f-11ea-8c4a-101f6a3d10ac.png)

Finalmente, la funcion de cambiar() hace referencia  la paginacion, esta funciona de la siguiente forma:
![image](https://user-images.githubusercontent.com/34308601/79141730-fbf9eb80-7d7f-11ea-9001-b563c116cb36.png)

PAGINA WEB:
La parte de busqueda se muestra asi:
![image](https://user-images.githubusercontent.com/34308601/79141740-01efcc80-7d80-11ea-9819-16a50b15cbbb.png)

Luego de ello, la seccion de muestra de datos generales se muestra de esta forma:
![image](https://user-images.githubusercontent.com/34308601/79141751-05835380-7d80-11ea-8170-3a7b087d9d02.png)

Finalmente, se muestra la tabla de datos de cada pelicula y los botones para cambiar de pagina:
![image](https://user-images.githubusercontent.com/34308601/79141759-09af7100-7d80-11ea-83e6-5125826b0e55.png)

Finalmente se muestra la pagina de gitHub:
![image](https://user-images.githubusercontent.com/34308601/79141771-0ddb8e80-7d80-11ea-95fa-833555bf6410.png)
