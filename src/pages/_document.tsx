import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';
import config from 'config';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render(): JSX.Element {
    return (
      <Html lang="en" className="no-js">
        <Head>
          {/* <!-- General Meta-Tags & SEO--> */}
          <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <link rel="manifest" href="manifest.json"></link>

          {/* <!-- DNS Prefetch / Preconnect to GA & Google Fonts --> */}
          <link rel="preconnect" href="https://www.google-analytics.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="dns-prefetch" href="https://www.google-analytics.com" />
          <link rel="dns-prefetch" href="https://fonts.googleapis.com" />

          {/* <!-- Icons --> */}
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />
          <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />

          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap"
            rel="stylesheet"
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `
                document.querySelector("html").classList.remove("no-js");
              `,
            }}
          />
          <style
            dangerouslySetInnerHTML={{
              __html: `
                #loader {
                  position: relative;
                  width: 100vw;
                  height: 100vh;
                  display: block;
                }
            
                #content-body {
                  display: none;
                }
            
                .custom-loader {
                  position: absolute;
                  top: calc(50vh - 64px);
                  left: calc(50vw - 64px);
                  transform: scale(1);
                  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
                  border-radius: 25px;
                  animation: pulse 1.2s infinite;
                }
            
                @keyframes pulse {
                  0% {
                    transform: scale(0.85);
                    box-shadow: 0 0 0 0px rgba(123, 201, 111, 0.6);
                  }
            
                  70% {
                    transform: scale(1.25);
                    box-shadow: 0 0 0 30px rgba(35, 154, 59, 0);
                  }
            
                  100% {
                    transform: scale(0.85);
                    box-shadow: 0 0 0 0 rgba(123, 201, 111, 0);
                  }
                }

                .no-js #loader {
                  display: none !important;
                }
            
                .no-js #content-body {
                  display: block !important;
                }
            
                .non-lazy .hero .hero-body,
                .no-js .hero .hero-body {
                  /* background-image: linear-gradient(rgba(109, 48, 57, 0.6),
                      rgba(109, 48, 57, 0.25)),
                    url("./img/hero.jpg") !important; */
                  background-image: linear-gradient(rgba(109, 48, 57, 0.6),
                      rgba(109, 48, 57, 0.25)),
                    url("./img/hero.webp") !important;
                }
              `,
            }}
          />
          {/* Google Tag Manager */}
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${config.gtm.id}');`,
            }}
          />
          {/* End Google Tag Manager */}
        </Head>
        <body>
          {/* Google Tag Manager (noscript) */}
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${config.gtm.id}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          />
          {/* End Google Tag Manager (noscript) */}
          <div id="loader" style={{ display: 'block' }}>
            <span className="is-sr-only">Loading Site...</span>
            <svg
              width={128}
              height={128}
              viewBox="0 0 256 256"
              className="custom-loader"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width={256} height={256} rx={50} fill="#EBEDF0" />
              <path
                d="M76.8 102.4H128V103.6C128 131.214 105.614 153.6 78 153.6H76.8V102.4Z"
                fill="#7BC96F"
              />
              <path
                d="M179.2 153.6H230.4V154.8C230.4 182.414 208.014 204.8 180.4 204.8H179.2V153.6Z"
                fill="#C6E48B"
              />
              <path
                d="M179.2 153.6L179.2 204.8L178 204.8C150.386 204.8 128 182.414 128 154.8L128 153.6L179.2 153.6Z"
                fill="#C6E48B"
              />
              <path
                d="M76.8 102.4L76.8 51.2L78 51.2C105.614 51.2 128 73.5858 128 101.2L128 102.4L76.8 102.4Z"
                fill="#239A3B"
              />
              <path
                d="M179.2 102.4L179.2 51.2L180.4 51.2C208.014 51.2 230.4 73.5858 230.4 101.2L230.4 102.4L179.2 102.4Z"
                fill="#239A3B"
              />
              <path
                d="M179.2 102.4L128 102.4L128 101.2C128 73.5858 150.386 51.2 178 51.2L179.2 51.2L179.2 102.4Z"
                fill="#239A3B"
              />
              <rect x="179.2" y="102.4" width="51.2" height="51.2" fill="#7BC96F" />
              <rect x={128} y="102.4" width="51.2" height="51.2" fill="#7BC96F" />
              <rect x="25.6" y="153.6" width="51.2" height="51.2" fill="#C6E48B" />
              <rect x="25.6" y="102.4" width="51.2" height="51.2" fill="#7BC96F" />
              <rect x="25.6" y="51.2" width="51.2" height="51.2" fill="#239A3B" />
            </svg>
          </div>

          <div id="content-body" style={{ display: 'none' }}>
            <Main />
          </div>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                document.addEventListener("DOMContentLoaded", () => {
                  setTimeout(showPage, 1000)
                })
          
                function showPage() {
                  document.querySelector("#loader").style.display = "none"
                  document.querySelector("#content-body").style.display = "block"
                }
              `,
            }}
          />

          <NextScript />

          <script
            dangerouslySetInnerHTML={{
              __html: `
                function convertWindowHeightToViewPortHeight() {
                  let vh = window.innerHeight * 0.01;
                  document.documentElement.style.setProperty("--vh", vh+"px");
                }

                window.addEventListener("load", () => {
                  convertWindowHeightToViewPortHeight();
                });
              
                window.addEventListener("resize", () =>
                  convertWindowHeightToViewPortHeight()
                );
              `,
            }}
          />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
