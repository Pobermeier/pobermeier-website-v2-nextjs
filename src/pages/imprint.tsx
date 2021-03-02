import SEO from '@/components/SEO/SEO';
import config from 'config';

const Imprint: React.FC = () => {
  return (
    <>
      <SEO title="Imprint" />

      <section className="section about" id="about" style={{ marginTop: '3.8rem' }}>
        <div className="container">
          <h1 className="title">Imprint</h1>
          <div>
            <h2 className="subtitle">
              Disclosure requirement according to § 25 p 5 MedienG / Offenlegungspflicht gem § 25
              Abs 5 MedienG
            </h2>

            <p>
              {config.meta.siteOwnerName}
              <br />
              Front-End Developer &amp; Online-Marketing Expert
              <br />
              1060 Vienna, Austria
              <br />
              <span className="email-placeholder" />
            </p>
            <br />

            <p>
              <strong>Technologies and tools used to build this site:</strong>
              <br />
              HTML5, CSS, Vanilla JavaScript (ES6+),{' '}
              <a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer">
                Sass
              </a>
              ,{' '}
              <a href="https://bulma.io/" target="_blank" rel="noopener noreferrer">
                Bulma
              </a>
              ,{' '}
              <a href="https://parceljs.org/" target="_blank" rel="noopener noreferrer">
                Parcel
              </a>
              ,{' '}
              <a href="https://babeljs.io/" target="_blank" rel="noopener noreferrer">
                Babel;
              </a>{' '}
            </p>
            <p>
              Designed and created by {config.meta.siteOwnerName}. The code for this website is
              available{' '}
              <a
                href="https://github.com/Pobermeier/pobermeier-website-v1"
                target="_blank"
                rel="noopener noreferrer"
              >
                here.
              </a>
            </p>
            <p>
              Deployed and hosted via{' '}
              <a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer">
                Netlify.
              </a>
            </p>
            <br />

            <p>
              <strong>Terms of Use</strong>
              <br />
              The contents of this website can be used freely and are for information only. By using
              the selection options on the website, no legal transactions between{' '}
              {config.meta.siteOwnerName}
              (henceforth called &quot;the operator&quot;) and the users or between the users come
              about. The further procedure between providers and users and the possible subsequent
              conclusion of orders between providers and users are at the sole discretion of the
              users.
            </p>
            <br />
            <p>
              <strong>Copyright / Disclaimer</strong>
              <br />
              With regard to the technical properties of the Internet, no guarantee can be given for
              the authenticity, correctness and completeness of the information made available on
              the Internet. There is also no guarantee for the availability or operation of the
              website and its content. Any liability for direct, indirect or other damage,
              regardless of its cause, which arises from the use or unavailability of the data and
              information on this website, is excluded to the extent permitted by law. The content
              of this website is protected by copyright. The information is for personal use only.
              Any further use, in particular storage in databases, duplication and any form of
              commercial use as well as transfer to third parties - also in parts or in a revised
              form - without the consent of the operator is prohibited. As far as the content on
              this page was not created by the operator, the copyrights of third parties are
              respected. In particular contents of third parties are marked as such. Should you
              nevertheless become aware of a copyright infringement, the operator asks you to notify
              us accordingly. Upon notification of violations, such content will be removed
              immediately. Hyperlinks on www.patrickobermeier.dev are welcome and welcome. However,
              any integration of individual pages into third-party frames is prohibited, and the RSS
              feed is not made available on third-party websites.
            </p>
            <br />
            <p>
              <strong>Liability for links</strong>
              <br />
              This website contains links to external websites of third parties, the content of
              which the operator has no influence on. Therefore, the operator cannot accept any
              liability for this third-party content. The respective provider or operator of the
              pages is always responsible for the content of the linked pages. The linked pages were
              checked for possible legal violations at the time the link was created. No illegal
              content was discernible at the time the link was created. A permanent control of the
              content of the linked websites is not reasonable without concrete evidence of an
              infringement. Upon notification of rights violations, such links will be removed
              promptly.
            </p>
            <br />
            <p>
              <strong>Nutzungsbedingungen</strong>
              <br />
              Die Inhalte dieser Website sind frei nutzbar und dienen ausschließlich der
              Information. Es kommen durch die Nutzung der Auswahlmöglichkeiten der Website
              keinerlei Rechtsgeschäfte zwischen {config.meta.siteOwnerName} (fortan &quot;der
              Betreiber&quot; genannt) und den Nutzern oder zwischen den Nutzern zu Stande. Die
              weitere Vorgangsweise zwischen Anbietern und Nutzern und der mögliche spätere
              Abschluss von Aufträgen zwischen Anbietern und Nutzern liegen im ausschließlichen
              Ermessen der Nutzer.
            </p>
            <br />
            <p>
              <strong>Copyright / Haftungsausschluss</strong>
              <br />
              Im Hinblick auf die technischen Eigenschaften des Internet kann keine Gewähr für die
              Authentizität, Richtigkeit und Vollständigkeit der im Internet zur Verfügung
              gestellten Informationen übernommen werden. Es wird auch keine Gewähr für die
              Verfügbarkeit oder den Betrieb der gegenständlichen Website und ihrer Inhalte
              übernommen. Jede Haftung für unmittelbare, mittelbare oder sonstige Schäden,
              unabhängig von deren Ursachen, die aus der Benutzung oder Nichtverfügbarkeit der Daten
              und Informationen dieser Website erwachsen, wird, soweit rechtlich zulässig,
              ausgeschlossen. Der Inhalt dieser Website ist urheberrechtlich geschützt. Die
              Informationen sind nur für die persönliche Verwendung bestimmt. Jede weitergehende
              Nutzung insbesondere die Speicherung in Datenbanken, Vervielfältigung und jede Form
              von gewerblicher Nutzung sowie die Weitergabe an Dritte – auch in Teilen oder in
              überarbeiteter Form – ohne Zustimmung des Betreibers ist untersagt. Soweit die Inhalte
              auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter
              beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
              trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bittet der Betreiber um
              einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden
              derartige Inhalte umgehend entfernen. Hyperlinks auf www.patrickobermeier.dev sind
              gewünscht und willkommen. Jedoch ist jede Einbindung einzelner Seiten in fremde Frames
              zu unterlassen sowie die Zurverfügungstellung des RSS-Feeds auf fremden Websites.
            </p>
            <br />
            <p>
              <strong>Haftung für Links</strong>
              <br />
              Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte der
              Betreiber keinen Einfluss hat. Deshalb kann der Betreiber für diese fremden Inhalte
              auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der
              jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
              wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
              Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine
              permanente inhaltliche Kontrolle der verlinkten Websites ist jedoch ohne konkrete
              Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei bekannt werden von
              Rechtsverletzungen werden derartige Links umgehend entfernt.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Imprint;
