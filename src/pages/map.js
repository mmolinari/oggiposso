import React, { useReducer } from "react"
import { graphql } from "gatsby"
import { Regions } from "../labels/regions";
import RegionSelector from "../components/region-selector";
import DateSelector from "../components/date-selector";
import Layout from "../components/layout";
import MapChart from "../components/map-chart";


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

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <Layout location={location}>
            <form>
                <RegionSelector regions={Regions} state={state} dispatch={dispatch} />
                <DateSelector dates={Object.keys(regionsDates)} state={state} dispatch={dispatch} />
                <MapChart state={state} dispatch={dispatch} />
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
