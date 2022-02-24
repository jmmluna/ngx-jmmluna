# @ngx-jmmluna/map

Libreria de mapa basada en OpenLayers.

## Uso

Para instalar la libreria:

```js
npm install @ngx-jmmluna/map
```

Para usar el componente mapa es necesario importar el módulo de la libreria en la aplicación:

```typescript
import { MapModule } from "@ngx-jmmluna/map";
```

```
<lib-map height="100%" width="300" [zoom]="5" projection="EPSG:4326" position="absolute"></lib-map>
```

- Puedes especificar parámetros css al mapa sobreescribiendo la clase _.map-container_.
- La proyección por defecto es _EPSG:3857_.
- Con position puedes modificar la ubicación del mapa en el DOM, por defecto es _Fixed_.

## Desarrollo

Ejecutar:

```
npm install
```

Levantar aplicación de prueba para desarrollo:

```
ng serve
```

y ejecutar en el navegador:

```
http://127.0.0.1:4200/
```
