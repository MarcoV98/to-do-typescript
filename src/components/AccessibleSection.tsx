import React from "react";
import image1 from '../assets/image1.jpg'

const AccessibleSection: React.FC = () => {
 return (
    <>
    <article>
        <h2>Accessible text</h2>
    <figure>
       <img src={image1} alt="a green hill with rising sun"></img>
        <figcaption>A green hill</figcaption>
    </figure>

    <address>
        <p>marco.vitales1998@gmail.com,</p>
        <p>Via Roma 30, Milano, Italia,</p>
        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">Google - Si apre in una nuova finestra</a>
    </address>

    <h2>I miei studi:</h2>
    <ul>
        <li> Laurea Magistrale in Visual Cultures e Pratiche Curatoriali, presso Accademia di Belle Arti di Brera, con votazione 110 e lode.
            <ul>
                <li>
                     luglio a dicembre 2022:Tirocinio presso il Comune di Saronno, con organizzazione di una mostra di Ale Guzzetti.
                </li>
                <li>
                    Tesi di Laurea con il direttore del Museo del Novecento di Milano, Gianfranco Maraniello, col titolo Il ruolo degli spazi non espositivi nel museo
                </li>
            </ul>
        </li>

        <li> Laurea Triennale in Comunicazione e Media Contemporanei per le Industrie creative, presso Università di Parma, con votazione 108.
            <ul>
                <li>
                    Settembre 2018 a Marzo 2019 Referente Facebook per la campagna contro odio online Fake News Real People
                </li>
                <li>
                    Tesi di Laurea con la storica arte Cristina Caseero col titolo Orsi e Butti: origine arte sociale.
                </li>
            </ul>
        </li>
    </ul>

    </article>
    </>
 )
}

export default AccessibleSection;