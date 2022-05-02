# API Carreras

> Creacion de API de estudiantes con carrera.

```
|
|--src
|----controllers
|----routers
|----services
|----index.js
|----.gitignore
```

1. Controllers: Controlar el tráfico de información
2. routers: Declarar las rutas del API
3. services: Servicios que se van a utilizar
4. index.js Inicio del API
5. .gitignore: Ignorar la carga de archivos y/o carpetas al repositorio.

# NOTAS
## Comandos 
- `npm init`: Inicializar el proyecto con el package.json
- `npm install NOMBRE`: Instalar las librerías o frameworks en especifico
- `npm install`: Instalar TODAS las librerías o frameworks registradas en el package.json
- `npm run dev` Ejecutar el script que se encuentra en el package.json

## Librerías y frameworks
1. Express: `npm install express --save`  Framework para crear la API
2. nodemon: `npm i nodemon` Herramienta de desarrollo para recargar auto el proyecto
3. mongoose: `npm install mongoose` Herramienta de modelado de objetos

# MODULOS

- Carrera (CRUD) {id, codigo, nombre, descropcion, activo}
- Estudiante  (CRUD) {id, nro_identificacion, nombre_1, nombre_2, apellido_1, apellido_2, fecha_de_nacimiento, activo, carrera}

## Reglas de negocio:

- Al crear un estudiante o una carrera el campo activo tiene un valor por defecto de verdadero. 
- Al eliminar un estudiante o una carrera, no eliminar de la base de datos si no cambiar el valor del campo activo por falso.
- Al crear o actualizar el código de la carrera de un estudiante, verificar si la carrera existe y esta activa. De lo contrario no puede crear o actualizar.
- Al consultar los estudiantes, debe de mostrar los siguientes (id, nro_identificacion, nombre completo, fecha de nacimiento, edad, código de carrera y nombre de carrera).
- Un estudiante activo solo puede pertenecer a una carrera, si intenta actualizar o crear otro registro con otro código de carrera no debe de poder realizarlo.
