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
    'https://github.com/italia/covid19-opendata-vaccini',
    'https://www.ilpost.it/2021/01/08/lombardia-emilia-romagna-veneto-sicilia-calabria-zona-arancione/',
    'http://www.salute.gov.it/portale/nuovocoronavirus/dettaglioComunicatiNuovoCoronavirus.jsp?lingua=italiano&id=5731',
    'http://www.salute.gov.it/portale/news/p3_2_1_1_1.jsp?lingua=italiano&menu=notizie&p=dalministero&id=5272',
    'http://www.governo.it/it/articolo/coronavirus-il-presidente-conte-firma-il-dpcm-del-14-gennaio-2021/16065',
    'https://www.ilpost.it/2021/01/16/colori-regioni-ordinanza-17-gennaio/'
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
