import React from "react";
import {
    ComposableMap,
    Geographies,
    Geography,
} from "react-simple-maps";

import geoUrl from "../data/limits_IT_regions.topo.json";

const MapChart = () => {
    return (
        <ComposableMap
            projection={"geoMercator"}
            projectionConfig={{
                scale:1800,
                center:[10, 40]
            }}
        >
            <Geographies geography={geoUrl}>
                {({ geographies }) =>
                    geographies.map(geo => <Geography key={geo.rsmKey} geography={geo} />)
                }
            </Geographies>
        </ComposableMap>
    );
};

export default MapChart;

