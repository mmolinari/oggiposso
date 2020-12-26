import React from "react"
import Layout from "../components/layout";

export default function Privacy({ location }) {

    return (
        <Layout location={location}>

            <i>
                Sotto c’è la policy completa che fa fede, ma l’idea generale è che noi del sito non abbiamo dati tuoi, a meno che tu non ci scriva: in quel caso non faremo altro che risponderti (forse). Usiamo dei servizi che raccolgono dei dati su di te: noi non li vediamo uno a uno ma solo raggruppati, per le statistiche; quei servizi ne fanno probabilmente altri nefandi utilizzi, ma sono molto diffusi quindi comunque ti conoscono già.
            </i>

            <h3>
                Informativa ai sensi dell'articolo 13 del d.lgs. 196/2003
            </h3>

            <p>
                Riceviamo, raccogliamo e archiviamo tutte le informazioni che inserisci nella form contatti sul nostro sito web o ci fornisci in qualsiasi altro modo. Non raccogliamo l'indirizzo IP (Internet Protocol) utilizzato per connettere il tuo computer a Internet, ma usiamo servizi di github.com e cloudflare.com che lo fanno, senza che però comunichino a noi questi dati, se non in maniera aggregata. Potremmo utilizzare strumenti software per misurare e raccogliere informazioni sulla sessione, inclusi tempi di risposta alle pagine, durata delle visite a determinate pagine, informazioni sull'interazione della pagina e metodi utilizzati per navigare lontano dalla pagina.
            </p>

            <p>
                Raccogliamo tali informazioni personali e non-personali per i seguenti scopi:
                <ul>
                    <li>
                        fornire e gestire i Servizi;
                    </li>
                    <li>
                        fornire assistenza continua e supporto tecnico ai nostri utenti;
                    </li>
                    <li>
                        per essere in grado di contattare i nostri visitatori e utenti con avvisi di servizi generali o personalizzati;
                    </li>
                    <li>
                        per creare dati statistici aggregati e altre informazioni non personali aggregate e / o dedotte;
                    </li>
                    <li>
                        per rispettare le leggi e i regolamenti applicabili
                    </li>
                </ul>
            </p>

            <p>
                Il sito è ospitata sulle piattaforme github.com e cloudflare.com, che ci forniscono la piattaforma online che ci consente di pubblicare il sito. I tuoi dati possono essere archiviati tramite la memoria dati, i database e le applicazioni generali di github.com e cloudflare.com. I tuoi dati sono da loro conservati su server sicuri, protetti da firewall.
            </p>

            <p>
                L'unico modo in cui potremo contattarti è tramite email, in risposta a una tua richiesta di contatto. In questo caso il tuo indirizzo email non sarà usato per nessuna altra finalità.
            </p>

            <p>
                Questo sito non utilizza cookie, ma utilizza il servizio di Cloudflare che fa utilizzo di un cookie, chiamato __cfduid, che viene usato principalmente contro i bot, che non contiene informazioni personali che possono essere decodificate, e verrà cancellato nel 2021 come si può leggere qui: https://blog.cloudflare.com/deprecating-cfduid-cookie/.
            </p>

            <p>
                Questo sito utilizza una tecnologia chiamata Local Storage per salvare alcune impostazioni personali, come ad esempio l'ultima regione selezionata; le informazioni salvate in questo modo non sono accessibili a noi.
            </p>

            <p>
                Questo sito utilizza una tecnologia di geolocalizzazione chiedendo preventivamente il permesso all'utente: questo dato è usato solo per impostare la regione dell'utente, e non è trasmesso a noi.
            </p>

            <p>
                Ci riserviamo il diritto di modificare questa informativa sulla privacy in qualsiasi momento, quindi ti preghiamo di controllarla frequentemente. Cambiamenti e chiarimenti entreranno in vigore immediatamente dopo la loro pubblicazione sul sito web. Se apportiamo modifiche sostanziali a questa informativa, ti notificheremo che è stata aggiornata, in modo che tu sappia quali informazioni raccogliamo, come le usiamo e in quali circostanze le usiamo e/o divulghiamo.
            </p>

            <p>
                Se desideri accedere, correggere, modificare o eliminare qualsiasi informazione personale che abbiamo su di te, sei invitato a contattarci tramite la form di contatto del sito.
            </p>

        </Layout>
    )
}
