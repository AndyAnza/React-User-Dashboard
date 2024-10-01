# REACT USER DASHBOARD

Este proyecto consiste en la creación de un Panel de Control de Usuarios en modalidad Single Page Application (SPA) utilizando React. El objetivo es consumir datos de la API de https://randomuser.me/ y gestionar usuarios con opciones de filtrado, visualización de detalles, y exportación en formato CSV, aplicando la metodología Mobile First y Diseño Responsive.

## Características principales

- Consumo de la API [randomuser.me](https://randomuser.me/) usando Axios para obtener un listado de usuarios.
- Gestión eficiente de memoria caché para evitar llamadas innecesarias a la API.
- Organización del código siguiendo las mejores prácticas de desarrollo de React.
- Enrutamiento mediante `React Router` para la navegación entre el listado de usuarios y los detalles de un usuario específico.
- Implementación de un diseño Mobile First y Responsivo.
- Funcionalidades UX/UI como login, filtrado de usuarios, eliminación de usuario y exportación de datos en formato CSV.

## Requerimientos

- [Node.js](https://nodejs.org/) v14.0.0 o superior
- [npm](https://www.npmjs.com/) v6.0.0 o superior
- [Git](https://git-scm.com/)

## Instalación y ejecución

Sigue estos pasos para ejecutar el proyecto de manera local:

1. Clona el repositorio:

   ```bash
   git clone https://github.com/AndyAnza/React-User-Dashboard.git
   ```

2. Entra en el directorio del proyecto:

   ```bash
   cd React-User-Dashboard
   ```

3. Instala las dependencias del proyecto:

   ```bash
   npm install
   ```

4. Ejecuta el proyecto en modo desarrollo:

   ```bash
   npm run dev
   ```

5. Abre tu navegador en `http://localhost:5173` para ver la aplicación en funcionamiento.


## Descripción de las funcionalidades

### Login

El proyecto incluye un sistema de login básico donde el usuario debe ingresar 'admin1234' como usuario y 'password1234' como contraseña para acceder a la interfaz del Panel de Control de Usuarios.

### Listado de usuarios

La interfaz principal muestra un listado de 30 usuarios obtenidos de la API `randomuser.me`. El listado se presenta en formato de tabla con información básica de cada usuario, y es posible aplicar los siguientes filtros:

- Filtrar por género (hombres, mujeres)
- Filtrar por nacionalidad
- Filtrar por rango de edad

### Filtrado y búsqueda

Los filtros permiten realizar combinaciones como "male, 40'49, US". Los datos se actualizan en tiempo real sin la necesidad de recargar la página.

### Detalle de usuario

Cada usuario tiene un enlace que redirige a una página de detalles (`/users/:id`), donde se muestra información completa sobre el usuario seleccionado.

### Exportación a CSV

Es posible exportar los datos de los usuarios filtrados a un archivo CSV. Esta operación se realiza de forma asíncrona, y el usuario es notificado mediante una alerta cuando el proceso se ha completado.

## Optimización

La aplicación utiliza una estrategia eficiente de manejo de memoria caché para evitar llamadas repetitivas a la API. Los datos de los usuarios se almacenan en el contexto global, lo que permite acceder a ellos sin realizar múltiples peticiones innecesarias.

## Organización del código

El código está estructurado en componentes siguiendo las mejores prácticas de React. Se utilizan hooks como `useState` y `useEffect` para la gestión del estado y efectos secundarios. Se implementa un patrón de gestión de estado global con `useContext` para manejar el caché de usuarios y facilitar el acceso a los datos en toda la aplicación.


## Próximos pasos

- Mejorar la experiencia de usuario con paginación.
- Implementar autenticación real con JWT o algún proveedor de OAuth.

## Autor

[Andrea R Anza](https://www.linkedin.com/in/andrearamirezanza/)
