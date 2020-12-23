import React, { useReducer } from "react"
import { graphql } from "gatsby"
import { Zones } from "../models/zones";
import { Regions } from "../models/regions";
import RegionSelector from "../components/regionSelector";
import DateSelector from "../components/dateSelector";


export default function MyFiles({ data }) {
    console.log(data);
    const dates = data.allRegionsZonesCsv.edges.map(x => x.node.Date);

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

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <form>
            <RegionSelector regions={Regions} state={state} dispatch={dispatch} />
            <DateSelector dates={dates} state={state} dispatch={dispatch} />
            {state.region} on {state.date}
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
