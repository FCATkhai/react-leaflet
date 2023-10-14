import map1 from "./ANNOTATION.json"
import map2 from "./BTB_RG_2023.5.18.json"
import map3 from "./BVNL_2023.5.18.json"
import map4 from "./Cam KT_2023.5.18.json"
import map5 from "./cam_point_25072022_point.json"
import map6 from "./cam_region_25072022_region.json"
import map7 from "./Ran_2023.5.18.json"
import map8 from "./ten_.json"
import map9 from "./ve_point_25072022.json"
import map10 from "./ve_region_05062023_region.json"
import map11 from "./VN_HCtinh.json"

const rawData = [map1, map2, map3, map4, map5, map6, map7, map8, map9, map10, map11];
const mapData = rawData.map((map, index) => {
    return ({
        id: index,
        data: map
    })
})
export default mapData;