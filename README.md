# @ngx-jmmluna

Workspace para el desarrollo de librerias de _angular_.

- Libreria de mapa [@ngx-jmmluna/map](https://github.com/jmmluna/ngx-jmmluna/tree/main/projects/ngx-jmmluna/map)

## Wokspace
El desarrollo de librerías para angular necesita de un espacio de trabajo o aplicación que permita testear su desarrollo así como su compilación y empaquetado. Para crear el espacio de trabajo se ha ejecutado la siguiente línea:

```
ng new ngx-jmmluna --create-application=false
```
### Librería
La creación para la librería de mapas se ha llevado a cabo ejecutando la siguiente sentencia:

```
ng generate library @ngx-jmmluna/map
```

### Aplicación
El desarrollo de la librería hace necesario disponer de una aplicación de prueba, de tal manera que permita verificar en todo momento que el comportamiento integrado es el esperado. Para crear la aplicación en el espacio de trabajo se ha ejecutado lo siguiente:

```
ng generate application application-test
```

## Desarrollo

Instalar las dependencias del workspace ejecutando:

```
npm install
```

Iniciamos la aplicación de prueba levantando el servidor de desarrollo:

```
ng serve
```

y ejecutar en el navegador:

```
http://127.0.0.1:4200/
```
