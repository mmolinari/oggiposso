import React from "react";
import {ComposableMap, Geographies, Geography,} from "react-simple-maps";

import geoUrl from "../data/limits_IT_regions.topo.json";

const MapChart = ( { state, dispatch, regionsDates, ...delegated } ) => {

  function getRegionColor( region, date ) {
    // @todo: clean up and merge with the colors in index.js.
    const colors = {
      'yellow': '#fbbf24',
      'yellow_no_regions_school': '#fbbf24',
      'yellow_no_regions_no_school': '#fbbf24',
      'orange': '#ed8936',
      'red': '#991b1b',
      'red_christmas': '#991b1b',
    }
    if (regionsDates[date] !== undefined) {
      return colors[regionsDates[date][region]];
    }
    else {
      // Unknown.
      return '#666';
    }
  }

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
            onClick={ () => {
              dispatch({type: 'region', 'region': geo.properties.reg_name});
            } }
            style={ {
              default: {
                fill: getRegionColor(geo.properties.reg_name, state.date),
                outline: "none",
                stroke: geo.properties.reg_name === state.region ? "#FFF" : "",
                strokeWidth: 1,
                strokeDasharray: "1,1",
              },
              hover: {
                fill: getRegionColor(geo.properties.reg_name, state.date),
                outline: "none",
                stroke: "#FFF",
                strokeWidth: 1,
                strokeDasharray: "1,1"
              },
              pressed: {
                fill: getRegionColor(geo.properties.reg_name, state.date),
                outline: "none",
                strokeWidth: 1,
                strokeDasharray: "1,1"
              }
            } }
          />)
        }
      </Geographies>
    </ComposableMap>
  );
};

export default MapChart;

