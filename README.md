# Proyecto API frontend de ecommerce de venta de productos Leggins femeninos

Este proyecto es una aplicación  de ecommerce en que se realiza la venta ( sin llegar a pagar los productos), en que se abordan los siguientes procesos:
-Iniciar sesión
-Ver y modificar perfil(excepto el email)
-Ver carro de compras ( con los productos escogidos), exclusivamente del usuario logueado
- Agregar productos(leggins) y actulizacion de los productos del carro
-Acceder al menu de productos ( leggins). A este menu se puede acceder ya sea estando logueado o no en el sistema
-Cerrar sesión


El proyecto está desplegado en Railway:  

https://proyectofinalfront-proyecto-7.up.railway.app/


## Tecnologías utilizadas

- Node.js & Express
- MongoDB & Mongoose
- JWT (JSON Web Tokens)
- Railway (deploy)
- MongoDB Atlas
- Tailwin CSS VITE

## Estructura

El proyecto está organizado en carpetas para componentes, configuración ( axios), contextos, rutas, entre otros.

## Funcionalidades principales


- Fronted del sistema , con posibilidad de loguearse en sistema escoger n productos(con actualizacion automatica en caso de escoger mas o menos productos , y tambien eliminar productos del carro)
- Registro e inicio de sesión de usuarios con autenticación JWT.
- CRUD de productos tipo Leggins y Usuarios(Ver el proyecto de github llamado https://github.com/BizmateCL/Proyecto_final_back_ecommerce)
- Seguridad y autorización en endpoints protegidos en usuarios (login, verificacion y actualizacion de usuario en el cual se requiere token y id de usuario ).


## Despliegue

El proyecto está desplegado en Railway(back y front): 

## Link front railway

https://proyectofinalfront-proyecto-7.up.railway.app/


