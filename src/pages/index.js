import React, { useReducer } from "react"
import { graphql } from "gatsby"
import { Regions } from "../labels/regions";
import RegionSelector from "../components/region-selector";
import DateSelector from "../components/date-selector";
import Layout from "../components/layout";
import * as topojson from "topojson-client";
import topodata from "../data/limits_IT_regions.topo.json";
import * as d3 from "d3";


export default function Index({ data, location }) {
    const regionsDates = {};
    data.allRegionsZonesCsv.edges.forEach(function (item, index) {
        regionsDates[item.node.Date] = item.node;
    });

    const zones = {};
    data.allMarkdownRemark.nodes.forEach(function (item, index) {
        zones[item.frontmatter.id] = item.html;
    });

    const zoneLabels = {};
    data.allMarkdownRemark.nodes.forEach(function (item, index) {
        zoneLabels[item.frontmatter.id] = item.frontmatter.label;
    });

    const d = new Date();
    const today = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();

    const initialState = {region: 0, date: today};

    function reducer(state, action) {
        switch (action.type) {
            case 'region':
                return {region: action.region, date: state.date};
            case 'date':
                return {region: state.region, date: action.date};
            default:
                throw new Error();
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    React.useEffect(() => {
        if (state.region !== 0) {
            localStorage.setItem('region', state.region);
        }
    }, [state]);

    // Try to locate the user, only once.
    React.useEffect(() => {
        function success(position) {
            const latitude  = position.coords.latitude;
            const longitude = position.coords.longitude;

            // d3.geoContains works with geojson only.
            const geodata = topojson.feature(topodata, topodata.objects.regions);

            // Find the located region.
            for (const region of geodata.features) {
                if (d3.geoContains(region, [longitude, latitude])) {
                    dispatch({type: 'region', 'region': region.properties.reg_name});
                    break;
                }
            }
        }

        function error() {
            console.log('Unable to retrieve your location, will not bother you again');
            // Do not bug people if they did not allow geolocation.
            localStorage.setItem('avoid_geolocation', '1');
        }

        if(!navigator.geolocation) {
            console.log('Geolocation is not supported by your browser');
        } else {
            // No need to query if we already have a region.
            if (state.region === 0) {
                const storedRegion = localStorage.getItem('region') ?? 0;
                const avoidGeolocation = localStorage.getItem('avoid_geolocation') ?? '0';
                if (storedRegion === 0 && avoidGeolocation === "0") {
                    console.log('Locating...');
                    navigator.geolocation.getCurrentPosition(success, error);
                }
                else {
                    // Use the region from the localStorage
                    dispatch({type: 'region', 'region': storedRegion});
                }
            }
        }
    }, []);

    function getZoneCode(date, region) {
        if (region !== 0 && date !== 0) {
            return regionsDates[date][region];
        }
        else {
            return '';
        }
    }

    function getCurrentZoneCode() {
        let code = getZoneCode(state.date, state.region);
        // If all regions are in the same zone, the region is not mandatory.
        if (sameZones(state.date) && code === "") {
            code = getZoneCode(state.date, 'Lombardia');
        }
        return code;
    }

    function getZoneLabel() {
        const code = getCurrentZoneCode();
        if (code) {
            return zoneLabels[code];
        }
    }

    function getZoneText() {
        const code = getCurrentZoneCode();
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

    function getDate() {
        return state.date !== 0 ? state.date : '';
    }

    function getRegion() {
        return state.region !== 0 ? Regions[state.region] : '';
    }

    function getHeader() {
        let code = getCurrentZoneCode();
        if (code) {
            if (sameZones(state.date)) {
                return "Tutte le regioni, " + getDate() + ": " + getZoneLabel();
            }
            else {
                return getRegion() + ", " + getDate() + ": " + getZoneLabel();
            }
        }
    }

    // Returns whether all regions are in the same zone.
    function sameZones(date) {
        const dayZones = Object.values(regionsDates[date]);
        const uniqueZones = dayZones.filter((value, index, self) => {
            return self.indexOf(value) === index;
        });
        // Date is also a property.
        return uniqueZones.length === 2;
    }

    const siteTitle = "Oggi Posso";

    return (
        <Layout location={location}>
            <form>
                <RegionSelector regions={Regions} state={state} dispatch={dispatch} />
                <DateSelector dates={Object.keys(regionsDates)} state={state} dispatch={dispatch} />
                <h2 className={getCurrentZoneCode()}>
                    { getHeader() }
                </h2>
                <div dangerouslySetInnerHTML={{ __html: getZoneText() }} />
            </form>
        </Layout>
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
            Trentino_Alto_Adige
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
