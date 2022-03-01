import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style';
const DEFAULT_POINT_STYLE = {
  fillColor: 'orange',
  radius: 5,
};

const DEFAULT_POLYGON_STYLE = {
  fillColor: 'rgba( 230, 246, 117,0.3 )', //'rgba(0, 0, 255, 0.1)',
  colorLine: 'blue',
  colorWidth: 3,
};

const DEFAULT_LAYER_STYLE = {
  point: DEFAULT_POINT_STYLE,
  polygon: DEFAULT_POLYGON_STYLE,
};

class LayerStyle {
  getStyle(styleDef: any, feature: any, resolution: any): any {
    if (styleDef.themming) {
      const attributeName = styleDef.themming.attributeName;
      const style = styleDef.themming.values[feature.get(attributeName)];
      if (style) return this.getValidedStyle(style);
    }

    return this.getValidedStyle(styleDef);
  }

  getValidedStyle(styleDef: any): any {
    const validatedStyle = this.getValidStyle(styleDef);
    const styles = [
      new Style({
        stroke: new Stroke({
          color: validatedStyle.polygon.colorLine,
          width: validatedStyle.polygon.widthLine,
        }),
        fill: new Fill({
          color: validatedStyle.polygon.fillColor,
        }),
      }),
      new Style({
        image: new CircleStyle({
          radius: validatedStyle.point.radius,
          fill: new Fill({
            color: validatedStyle.point.fillColor,
          }),
        }),
      }),
    ];
    return styles;
  }

  private getValidStyle(style: any): any {
    const validStyle: any = {};
    if (style) {
      validStyle.point = style.point ? style.point : DEFAULT_POINT_STYLE;
      validStyle.polygon = style.polygon
        ? style.polygon
        : DEFAULT_POLYGON_STYLE;
      return validStyle;
    } else return DEFAULT_LAYER_STYLE;
  }
}

export const layerStyle = new LayerStyle();
