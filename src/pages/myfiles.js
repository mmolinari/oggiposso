import React from "react"
import { graphql } from "gatsby"
import { Zones } from "../models/zones";
import { Regions } from "../models/regions";

export default function MyFiles({ data }) {
    console.log(data);
    console.log(Zones);
    console.log(Regions);
    return (
        <div>Hello world</div>
    )
}

export const query = graphql`
    {
      allRegionsZonesCsv {
        edges {
          node {
            Data
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
      allDataJson {
        nodes {
          id
          arancione
          giallo
          giallo_natale
          rosso
          rosso_natale
        }
      }
    }
`
