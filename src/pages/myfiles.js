import React, { useReducer } from "react"
import { graphql } from "gatsby"
import { Regions } from "../models/regions";
import RegionSelector from "../components/regionSelector";
import DateSelector from "../components/dateSelector";


export default function MyFiles({ data }) {
    const regionsDates = {};
    data.allRegionsZonesCsv.edges.forEach(function (item, index) {
        regionsDates[item.node.Date] = item.node;
    });

    const zones = {};
    data.allMarkdownRemark.nodes.forEach(function (item, index) {
        zones[item.frontmatter.id] = item.html;
    });

    const initialState = {region: 0, date: 0};

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

    function getZoneCode() {
        if (state.region !== 0 && state.date !== 0) {
            return regionsDates[state.date][state.region];
        }
        else {
            return '';
        }
    }

    function getZoneText() {
        const code = getZoneCode();
        if (code) {
            return zones[code];
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

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <form>
            <RegionSelector regions={Regions} state={state} dispatch={dispatch} />
            <DateSelector dates={Object.keys(regionsDates)} state={state} dispatch={dispatch} />
            {getRegion()} {getDate()}
            <div dangerouslySetInnerHTML={{ __html: getZoneText() }} />
        </form>
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
            language
          }
        }
      }
    }
`
