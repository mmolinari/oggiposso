import React from "react"
import {graphql, StaticQuery} from "gatsby"

export default function LastUpdate({ data, location }) {
  return (
      <StaticQuery
          query={graphql`
                query {
                    allFile(filter: {name: {eq: "regions-zones"}}) {
                        nodes {
                            mtime(formatString: "D/M/YYYY h:mm")
                        }
                    }
                }
          `}
          render={data => (
              <div>Ultimo aggiornamento: {data.allFile.nodes[0].mtime}</div>
          )}
      />
  )
}
