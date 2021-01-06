import React from "react"

export default function VaccinationCount ( { ...delegated } ) {

  const url = 'https://raw.githubusercontent.com/italia/covid19-opendata-vaccini/master/dati/vaccini-summary-latest.json';
  const [message, setMessage] = React.useState('');

  let getJSON = function ( url, callback ) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
  };

  React.useEffect(() => {
    getJSON(url,
      function ( err, data ) {
        if (err !== null) {
          console.log(err);
          setMessage('Errore nel caricamento dei dati delle vaccinazioni');
        } else {
          const reducer = (accumulator, currentValue) => accumulator + currentValue['dosi_somministrate'];
          let lastUpdate = new Date(data.data[0]['ultimo_aggiornamento']);
          // Data is updated at midnight, so this is the count up to yesterday.
          lastUpdate.setDate(lastUpdate.getDate() - 1);
          const formattedDate = lastUpdate.getDate() + "/" + (lastUpdate.getMonth() + 1) + "/" + lastUpdate.getFullYear();
          setMessage('Vaccini somministrati al ' + formattedDate + ': ' + data.data.reduce(reducer, 0));
        }
      });
  }, []);

  if (!message) {
    return null;
  }

  return (
    <div {...delegated}>
      {message}
    </div>
  )
}
