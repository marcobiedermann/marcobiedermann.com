import React from 'react';
import Helmet from 'react-helmet';

import Grid from '../components/Grid';

const Page = () => (
  <div>
    <Helmet
      title="Imprint"
      meta={[
        {
          name: 'description',
          content: 'Impress und Haftungsausschluss',
        },
      ]}
    />
    <section className="site__section">
      <Grid>
        <h1>Imprint</h1>
        <h2>Angaben gemäß § 5 TMG:</h2>
        <h3>Kontakt:</h3>

        <address itemScope itemType="http://schema.org/Person">
          <p>
            <strong itemProp="name">
              <span itemProp="givenName">Marco</span>{' '}
              <span itemProp="familyName">Biedermann</span>
            </strong>
            <br />
            Alter Oßweiler Weg 62<br />
            71638 Ludwigsburg<br />
            Deutschland<br />
            <a href="mailto:hello@marcobiedermann.com">
              hello@marcobiedermann.com
            </a>
          </p>
        </address>

        <h2>Haftungsausschluss</h2>
        <h3>Haftung für Inhalte</h3>
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
          auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
          §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
          verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
          überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
          Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der
          Nutzung von Informationen nach den allgemeinen Gesetzen bleiben
          hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
          Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
          Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
          Inhalte umgehend entfernen.
        </p>
        <h3>Haftung für Links</h3>
        <p>
          Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
          Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
          fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
          verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
          Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
          Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
          Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine
          permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne
          konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
          Bekanntwerden von Rechtsverletzungen werden wir derartige Links
          umgehend entfernen.
        </p>
        <h3>Urheberrecht</h3>
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
          jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
          sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
          Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
          wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden
          Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf
          eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
          entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
          werden wir derartige Inhalte umgehend entfernen.
        </p>
        <h2>Resources</h2>

        <div className="grid__row">
          <div className="grid__col grid__col--4">
            <h3>Fonts</h3>
            <p>
              <a
                href="https://www.google.com/fonts/specimen/Montserrat"
                target="_blank"
                rel="noopener noreferrer"
                title="Montserrat Font by Julieta Ulanovsky on Google"
              >
                Montserrat
              </a>{' '}
              by Julieta Ulanovsky
            </p>
          </div>

          <div className="grid__col grid__col--4">
            <h3>Icons</h3>
            <p>
              Social Icons, Menu, Arrow by{' '}
              <a
                href="https://iconmonstr.com/"
                target="_blank"
                rel="noopener noreferrer"
                title="Icons by Iconmonstr"
              >
                Iconmonstr
              </a>
            </p>
          </div>

          <div className="grid__col grid__col--4">
            <h3>Mockups</h3>
            <p>
              <a
                href="https://www.pixeden.com/psd-mock-up-templates/cinema-display-psd-mockup"
                target="_blank"
                rel="noopener noreferrer"
                title="iMac Mockup on Pixeden"
              >
                iMac
              </a>,{' '}
              <a
                href="https://www.pixeden.com/psd-mock-up-templates/psd-ipad-air-perspective-mockup"
                target="_blank"
                rel="noopener noreferrer"
                title="iPad Mockup on Pixeden"
              >
                iPad
              </a>,{' '}
              <a
                href="https://www.pixeden.com/psd-mock-up-templates/3-4-iphone-6-psd-vector-mockup-part-2"
                target="_blank"
                rel="noopener noreferrer"
                title="iPhone Mockup on Pixeden"
              >
                iPhone
              </a>{' '}
              by Pixeden
            </p>
          </div>
        </div>

        <div className="grid__row">
          <div className="grid__col grid__col--4">
            <h3>Host</h3>
            <p>
              Hosted with{' '}
              <a
                href="https://pages.github.com/"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Pages"
              >
                GitHub Pages
              </a>
            </p>
          </div>

          <div className="grid__col grid__col--4">
            <h3>SSL</h3>
            <p>
              SSL via{' '}
              <a
                href="https://www.cloudflare.com/"
                target="_blank"
                rel="noopener noreferrer"
                title="CloudFlare"
              >
                CloudFlare
              </a>
            </p>
          </div>
        </div>
      </Grid>
    </section>
  </div>
);

export default Page;
