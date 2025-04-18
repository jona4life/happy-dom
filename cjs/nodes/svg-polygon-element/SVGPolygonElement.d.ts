import SVGGeometryElement from '../svg-geometry-element/SVGGeometryElement.cjs';
import * as PropertySymbol from '../../PropertySymbol.cjs';
import SVGPointList from '../../svg/SVGPointList.cjs';
/**
 * SVG Polygon Element.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/SVGPolygonElement
 */
export default class SVGPolygonElement extends SVGGeometryElement {
    [PropertySymbol.animatedPoints]: SVGPointList | null;
    [PropertySymbol.points]: SVGPointList | null;
    /**
     * Returns animated points.
     *
     * @returns Animated points.
     */
    get animatedPoints(): SVGPointList;
    /**
     * Returns points.
     *
     * @returns Points.
     */
    get points(): SVGPointList;
}
//# sourceMappingURL=SVGPolygonElement.d.ts.map