# Proyecto API frontend de ecommerce de venta de productos Leggins femeninos

Este proyecto es una aplicación  de ecommerce en que se realiza la venta ( sin llegar a pagar los productos), en que se abordan los siguientes procesos:
-Iniciar sesión
-Ver y modificar perfil(excepto email)
-Ver carro de compras ( con los productos escogidos), exclusivamente del usuario logueado
-Acceder al menu de productos ( leggins). A este menu se puede acceder ya sea estando logueado o no
-Cerrar sesión

## Tecnologías utilizadas

- Node.js & Express
- MongoDB & Mongoose
- JWT (JSON Web Tokens)
- Railway (deploy)
- MongoDB Atlas
- Tailwin CSS VITE

## Estructura

El proyecto está organizado en carpetas para componentes, configuración ( axios), contextos, rutas, entre otros).

## Funcionalidades principales

- Registro e inicio de sesión de usuarios con autenticación JWT.
- CRUD de productos tipo Leggins y Usuarios
- Seguridad y autorización en endpoints protegidos en usuarios (login, verificacion y actualizacion de usuario en el cual se requiere token y id de usuario ).

## Endpoints principales

### Endpoints de Violin

| Descripción                  | Método | Endpoint                                                                 | Caso de uso                                                                                   |
|----------------------------|--------|--------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| Crear un producto          | POST   | `https://proyecto6-production.up.railway.app/api/leggins/create`                                                                                                   | Agregar un nuevo violin al catálogo.                                                         |
| Leer todos los productos   | GET    | `https://proyecto6-production.up.railway.app/api/violins`                                                           | Ver todos los violines disponibles.                                                          |
| Leer un producto específico| GET    | `https://proyecto6-production.up.railway.app/api/violins/id`                                                       | Ver detalles de un violin por su ID.                                                         |
| Actualizar un producto     | PUT    | `https://proyecto6-production.up.railway.app/api/violins/id `                                                       | Actualizar nombre o precio de un violin.                                                     |
| Eliminar un producto       | DELETE | `https://proyecto6-production.up.railway.app/api/violins/id `                                                       | Eliminar un violin del catálogo.                                                             |

Nota: ID de ejemplo 68461bb39e8b6b5c2ed08cd1
### Endpoints de Usuario

| Descripción                | Método | Endpoint                                                                 | Caso de uso                                                                                   |
|----------------------------|--------|--------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| Registrar un usuario       | POST   | `https://proyecto6-production.up.railway.app/api/users/create`                                                      | Registrarse en la plataforma.                                                                |
| Iniciar sesión             | POST   | `https://proyecto6-production.up.railway.app/api/users/login`                                                       | Iniciar sesión y obtener token.                                                              |
| Verificar token            | GET    | `https://proyecto6-production.up.railway.app/api/users/verify-user`                                                 | Verificar sesión activa del usuario.                                                         |
| Actualizar usuario         | PUT    | `https://proyecto6-production.up.railway.app/api/users/update-user/id`                                             | Actualizar información de perfil.                                                            |


Nota ejemplo de id de usuario : xxxxxxxxxxxxx
## Despliegue

El proyecto está desplegado en Railway:  
[https://proyecto6-production.up.railway.app/](https://proyecto6-production.up.railway.app/)



---