import React, {useReducer, useState} from "react"
import {graphql} from "gatsby"
import {Regions} from "../labels/regions";
import RegionSelector from "../components/region-selector";
import DateSelector from "../components/date-selector";
import Layout from "../components/layout";
import * as topojson from "topojson-client";
import topodata from "../data/limits_IT_regions2.topo.json";
import * as d3 from "d3";
import MapChart from "../components/map-chart";
import Calendar from "react-calendar";
import ClientOnly from "../components/client-only";
import VaccinationCount from "../components/vaccination-count";


export default function Index ( { data, location } ) {
  const regionsDates = {};
  data.allRegionsZonesCsv.edges.forEach(function ( item, index ) {
    regionsDates[item.node.Date] = item.node;
  });

  const zones = {};
  data.allMarkdownRemark.nodes.forEach(function ( item, index ) {
    zones[item.frontmatter.id] = item.html;
  });

  const zoneLabels = {};
  data.allMarkdownRemark.nodes.forEach(function ( item, index ) {
    zoneLabels[item.frontmatter.id] = item.frontmatter.label;
  });

  const d = new Date();
  const today = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();

  const initialState = { region: '0', date: today };

  function reducer ( state, action ) {
    switch (action.type) {
      case 'region':
        return { region: action.region, date: state.date };
      case 'date':
        return { region: state.region, date: action.date };
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  React.useEffect(() => {
    if (state.region !== '0') {
      localStorage.setItem('region', state.region);
    }
  }, [state]);

  // Try to locate the user, only once.
  React.useEffect(() => {
    function success ( position ) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      // d3.geoContains works with geojson only.
      const geodata = topojson.feature(topodata, topodata.objects.regions);

      // Find the located region.
      for (const region of geodata.features) {
        if (d3.geoContains(region, [longitude, latitude])) {
          dispatch({ type: 'region', 'region': region.properties.reg_name });
          break;
        }
      }
    }

    function error () {
      console.log('Unable to retrieve your location, will not bother you again');
      // Do not bug people if they did not allow geolocation.
      localStorage.setItem('avoid_geolocation', '1');
    }

    if (!navigator.geolocation) {
      console.log('Geolocation is not supported by your browser');
    }
    else {
      // No need to query if we already have a region.
      if (state.region === '0') {
        const storedRegion = localStorage.getItem('region') ?? '0';
        const avoidGeolocation = localStorage.getItem('avoid_geolocation') ?? '0';
        if (storedRegion === '0' && avoidGeolocation === '0') {
          console.log('Locating...');
          navigator.geolocation.getCurrentPosition(success, error);
        }
        else {
          // Use the region from the localStorage
          dispatch({ type: 'region', 'region': storedRegion });
        }
      }
    }
  }, []);

  function getZoneCode ( state ) {
    let code = '';

    if (state.date !== '0') {
      if (state.region !== '0') {
        if (regionsDates[state.date] !== undefined) {
          code = regionsDates[state.date][state.region];
        }
        else {
          code = 'unknown';
        }
      }

      // If all regions are in the same zone, the region is not mandatory.
      if (code === '' && sameZones(state.date)) {
        if (regionsDates[state.date] !== undefined) {
          code = regionsDates[state.date]['Lombardia'];
        }
        else {
          code = 'unknown';
        }
      }
    }

    return code;
  }

  function getZoneLabel ( state ) {
    const code = getZoneCode(state);
    if (code) {
      return zoneLabels[code];
    }
  }

  function getZoneText ( state ) {
    if (state.date !== '0') {
      const code = getZoneCode(state);
      if (code) {
        return zones[code];
      }
      else if (sameZones(state.date)) {
        return zones[getZoneCode(state.date, 'Lombardia')];
      }
      else {
        return "Per favore scegli una regione e una data.";
      }
    }
    else {
      return "Per favore scegli una regione e una data.";
    }
  }

  function getDate ( state ) {
    return state.date !== '0' ? state.date : '';
  }

  function getRegion ( state ) {
    return state.region !== '0' ? Regions[state.region] : '';
  }

  function getHeader ( state ) {
    let code = getZoneCode(state);
    if (code) {
      if (sameZones(state.date)) {
        return "Tutte le regioni, " + getDate(state) + ": " + getZoneLabel(state);
      }
      else {
        return getRegion(state) + ", " + getDate(state) + ": " + getZoneLabel(state);
      }
    }
  }

  function getColor ( code ) {
    const colors = {
      'yellow': 'text-yellow-400',
      'yellow_jan': 'text-yellow-400',
      'yellow_no_regions_school': 'text-yellow-400',
      'yellow_no_regions_no_school': 'text-yellow-400',
      'orange': 'text-orange-500',
      'orange_jan': 'text-orange-500',
      'red': 'text-red-800',
      'red_jan': 'text-red-800',
      'red_christmas': 'text-red-800',
      'unknown': 'text-black',
      'jan16': 'text-black',
    }

    return colors[code];
  }

  function getBgColor ( code ) {
    const colors = {
      'yellow': 'text-yellow-400',
      'yellow_jan': 'text-yellow-400',
      'yellow_no_regions_school': 'text-yellow-400',
      'yellow_no_regions_no_school': 'text-yellow-400',
      'orange': 'text-orange-500',
      'orange_jan': 'text-orange-500',
      'red': 'text-red-800',
      'red_jan': 'text-red-800',
      'red_christmas': 'text-red-800',
      'unknown': 'text-black',
      'jan16': 'text-black',
    }

    return colors[code];
  }

  // Returns whether all regions are in the same zone.
  function sameZones ( date ) {
    if (regionsDates[date] == undefined) {
      return true;
    }
    const dayZones = Object.values(regionsDates[date]);
    const uniqueZones = dayZones.filter(( value, index, self ) => {
      return self.indexOf(value) === index;
    });
    // Date is also a property.
    return uniqueZones.length === 2;
  }

  function dateToString( date ) {
    return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
  }

  function stringToDate( string ) {
    let [day, month, year] = string.split('/');
    month--;
    let date = new Date();
    date.setFullYear(year);
    date.setMonth(month);
    date.setDate(day);

    return date;
  }

  function calendarTile( date, view, state ) {
    const day = dateToString(date);
    let zone;

    if (state.region !== '0' && regionsDates[day] !== undefined && regionsDates[day][state.region] !== undefined) {
      zone = regionsDates[day][state.region];
    }

    // If all regions are in the same zone, the region is not mandatory.
    if (zone === null && sameZones(day) && regionsDates[day] !== undefined) {
      zone = regionsDates[day]['Lombardia'] ?? null;
    }

    // m-1 py-1
    let base = 'rounded-sm py-2';

    // @todo: what type is state.date?
    if (state.date == day) {
      base = base + ' border border-solid';
    }
    else {
      base = base + ' border-none';
    }

    if (zone) {
      base = base + ' ' + getColor(zone);
    }

    return base;
  }

  function calendarTileDisabled ( date, state ) {
    if (regionsDates[dateToString(date)] !== undefined && regionsDates[dateToString(date)][state.region] !== undefined) {
      return false;
    }
    return true;
  }

  return (
    <article className="my-10 mx-auto prose lg:prose-xl">
      <h2>Questo progetto è terminato.</h2>
      <p>
        Ci sono altri siti che rispondono alla stessa necessità, ma sono sviluppati e seguiti meglio, quindi non ho motivo per proseguire. Grazie di aver fatto condiviso questo sito e per i messaggi di supporto!
      </p>
      <p>
        Io adesso consulto <a href="https://www.covidzone.info">covidzone.info</a>
      </p>
    </article>
  )
}

export const query = graphql`
  {
    allRegionsZonesCsv {
      edges {
        node {
          Date
          Abruzzo
          Basilicata
          Calabria
          Campania
          Emilia_Romagna
          Friuli_Venezia_Giulia
          Lazio
          Liguria
          Lombardia
          Marche
          Molise
          Piemonte
          Puglia
          Sardegna
          Sicilia
          Toscana
          Trento
          Bolzano
          Umbria
          Valle_d_Aosta
          Veneto
        }
      }
    }
    allMarkdownRemark {
      nodes {
        html
        frontmatter {
          id
          label
          language
        }
      }
    }
  }
`
