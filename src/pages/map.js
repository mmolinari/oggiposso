import React from "react"
import Layout from "../components/layout";
import MapChart from "../components/map-chart";

export default function Map({ location }) {

    return (
        <Layout location={location}>

            <MapChart />

        </Layout>
    )
}
