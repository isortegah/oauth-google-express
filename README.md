OAUTH Simple Google y Express
===
## Índice
[**Default Servidor Express**](#default-servidor-express)  
[**Pagina Inicial Login**](#pagina-inicial-login)
## Default Servidor Express
* Configuración inicial de servidor `Express` [View code](https://github.com/isortegah/oauth-google-express/blob/2546efd914fd3340178258cef0ba3625f905beef/app.js)  
* Agregamos la funcionalidad de router para recibir peticiones de APIRest y preparamos el acceso a `http://<dominio>/` a la URI `GET /` [View code](https://github.com/isortegah/oauth-google-express/commit/be9e56bff562e84711bf0fa0a75ea3abfd1a0051)

## Pagina Inicial Login
* Se requiere renderizar la pagina del login, por lo que utilisaremos `npm install --save ejs`.
* Agregamos a la funcion router la instruccion `view engine` e indicamos la ruta donde se localizan las `views`.