import React from "react"

export default function Sources () {
  const sources = [
    'http://www.governo.it/it/articolo/domande-frequenti-sulle-misure-adottate-dal-governo/15638',
    'http://www.salute.gov.it/portale/nuovocoronavirus/dettaglioContenutiNuovoCoronavirus.jsp?area=nuovoCoronavirus&id=5351&lingua=italiano&menu=vuoto',
    'https://www.ilsole24ore.com/art/coronavirus-mappa-e-restrizioni-zona-previste-nuovo-dpcm-ADDS4B0?refresh_ce=1',
    'https://tg24.sky.it/cronaca/2020/12/19/calendario-divieti-natale-2020',
    'https://tg24.sky.it/cronaca/2020/12/19/natale-regole-spostamenti-pranzo-cenone',
    'https://www.ilpost.it/2021/01/05/nuove-restrizioni-coronavirus-decreto-legge-7-15-gennaio/',
    'http://www.governo.it/sites/new.governo.it/files/Cdm_88.pdf',
    'https://www.ilpost.it/2021/01/04/veneto-friuli-venezia-giulia-ordinanze-scuole-superiori-chiuse/',
    'https://github.com/italia/covid19-opendata-vaccini'
  ];

  let links = [];
  for (const source of sources) {
    links.push(<li className="break-all"><a href={ source }>{ source }</a></li>);
  }

  return (
    <div className="text-xs">
      Fonti:
      <ul className="list-disc">
        { links }
      </ul>
    </div>
  )
}
