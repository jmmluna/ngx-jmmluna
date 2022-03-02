# @ngx-jmmluna/map

Libreria de mapa basada en OpenLayers.
## Objetivo
Este proyecto tiene como principal objetivo integrar mapas en cualquier proyecto angular, evitando el alto acoplamiento de terceros así como aportar facilidad y agilidad en su uso. **@ngx-jmmluna/map** nace con la idea de aislar la implementación concreta de los requerimientos geográficos de cualquier aplicación que necesite el uso de mapas. 

## Instalación

Antes de poder usar la libería en cualquier proyecto angunlr será necesario instalarla previamente de la siguiente manera:

```js
npm install @ngx-jmmluna/map
```

## Uso

Para usar el componente mapa es necesario importar el módulo de la libreria en la aplicación:

```typescript
import { MapModule } from "@ngx-jmmluna/map";
```

```html
<jmmluna-map
  height="100%"
  width="300"
  [zoom]="5"
  projection="EPSG:4326"
  position="absolute"
></jmmluna-map>
```

- Puedes especificar parámetros css al mapa sobreescribiendo la clase _.map-container_.
- **width:** anchura del mapa. El valor por defecto es _400px_. Acepta %, vh o solo valor numérico.
- **height:** altura del mapa. El valor por defecto es _400px_. Acepta %, vh o solo valor numérico.
- **projection:** definir la proyección del mapa. El valor por defecto es _EPSG:3857_.
- **position:** establecer la ubicación del mapa en el DOM. El valor por defecto es _Fixed_.
- **zoom:** espcificar el zoom inicial del mapa. El valor `por defecto es 1.
- **lat:** latitud inicial del mapa.
- **lon:** longitud inicial del mapa.
