import React from "react"
import sourcesStyles from "./sources.module.css"

export default function Sources () {
  const sources = [
    'http://www.governo.it/it/articolo/domande-frequenti-sulle-misure-adottate-dal-governo/15638',
    'http://www.salute.gov.it/portale/nuovocoronavirus/dettaglioContenutiNuovoCoronavirus.jsp?area=nuovoCoronavirus&id=5351&lingua=italiano&menu=vuoto',
    'https://www.ilsole24ore.com/art/coronavirus-mappa-e-restrizioni-zona-previste-nuovo-dpcm-ADDS4B0?refresh_ce=1',
    'https://tg24.sky.it/cronaca/2020/12/19/calendario-divieti-natale-2020',
    'https://tg24.sky.it/cronaca/2020/12/19/natale-regole-spostamenti-pranzo-cenone',
  ];

  let links = [];
  for (const source of sources) {
    links.push(<li><a href={ source }>{ source }</a></li>);
  }

  return (
    <div className={ sourcesStyles.sources }>
      Fonti:
      <ul>
        { links }
      </ul>
    </div>
  )
}
