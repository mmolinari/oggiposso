import React from "react";
import {ComposableMap, Geographies, Geography,} from "react-simple-maps";

import geoUrl from "../data/limits_IT_regions.topo.json";

const MapChart = ( { state, dispatch, ...delegated } ) => {
  return (
    <ComposableMap
      projection={ "geoMercator" }
      projectionConfig={ {
        scale: 900,
        center: [13, 42]
      } }
      {...delegated}
    >
      <Geographies geography={ geoUrl }>
        { ( { geographies } ) =>
          geographies.map(geo => <Geography
            key={ geo.rsmKey }
            geography={ geo }
            onMouseEnter={ () => {
              console.log(geo.properties.reg_name);
              dispatch({ type: 'region', 'region': geo.properties.reg_name });
            } }
            onClick={ () => {
              //dispatch({type: 'region', 'region': geo.properties.reg_name});
              console.log(geo.properties.reg_name);
            } }
            style={ {
              default: {
                fill: geo.properties.reg_name === state.region ? "#D6D6DA" : "#AAAAAA",
                //stroke: geo.properties.reg_name === state.region ? "#FF0" : "#AAAAAA",
                outline: "none"
              },
              hover: {
                fill: "#D6D6DA",
                outline: "none"
              },
              pressed: {
                fill: "#E42",
                outline: "none"
              }
            } }
          />)
        }
      </Geographies>
    </ComposableMap>
  );
};

export default MapChart;

