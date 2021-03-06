/**
 * 省级 zhdj 二级页面
 */
import {yunanMapData} from "./map/mapDataForEcahrt/manualYunnan";
import {Radio} from "./echartOptions/Radio";
import {Others} from "./echartOptions/Others";
import {Lines} from "./echartOptions/Lines";
import {SingleNumber} from "./echartOptions/SingleNumber";
import {Bar} from "./echartOptions/Bar";
import {Pie} from "./echartOptions/Pie";
import {MapFromGaode} from "./map/MapFromGaode";
import {MapFromGaodeCover} from "./map/MapFromGaodeCover"
import {MapFormEchart} from "./map/MapFormEchart";
import {Canvas2D} from "./ThreeD/Canvas2D";
import {Menu3D} from "./ThreeD/Menu3D";
import {PicWall3D} from "./ThreeD/PicWall3D";
import init from "./ThreeD/Img3D/3d-pic";

/**
 * Abstruse集成类
 * @constructor
 */
let Abstruse = {};
/** The most recent blended color.See {@link Radio} */
Abstruse.Radio = Radio;
/** The most recent blended color.See {@link Lines} */
Abstruse.Lines = Lines;
/** The most recent blended color.See {@link Bar} */
Abstruse.Bar = Bar;
/** The most recent blended color.See {@link Others} */
Abstruse.Others = Others;
/** The most recent blended color.See {@link Pie} */
Abstruse.Pie = Pie;
/** The most recent blended color.See {@link MapFromGaode} */

Abstruse.MapFromGaode = MapFromGaode;
/** The most recent blended color.See {@link MapFromGaodeCover} */

Abstruse.MapFromGaodeCover = MapFromGaodeCover;
/** The most recent blended color.See {@link MapFormEchart} */

Abstruse.MapFormEchart = MapFormEchart;
/** The most recent blended color.See {@link SingleNumber} */

Abstruse.SingleNumber = SingleNumber;
/** The most recent blended color.See {@link Canvas2D} */

Abstruse.Canvas2D = Canvas2D;
/** The most recent blended color.See {@link Menu3D} */

Abstruse.Menu3D = Menu3D;
/** The most recent blended color.See {@link PicWall3D} */

Abstruse.PicWall3D = PicWall3D;
/** The most recent blended color.See {@link init} */

Abstruse.init3dPic = init;


Abstruse.yunanMapData = yunanMapData;
export {Abstruse};

