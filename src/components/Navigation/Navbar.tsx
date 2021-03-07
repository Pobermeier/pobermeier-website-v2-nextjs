/* eslint-disable */
import config from 'config';
import useNavMenu from 'hooks/useNavMenu';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { Dispatch, KeyboardEvent, SetStateAction } from 'react';
import MainLogoImg from '../Icons/MainLogo';

const rootPath = '/';
const resumePath = "/resume"

const Navbar: React.FC<Props> = ({ isNavbarOpen, setIsNavMenuOpen }) => {
  const router = useRouter();

  const isRootPath = router.route === rootPath;
  const isResumePath  = router.route === resumePath;

  const [toggleNavMenu, closeNavMenu] = useNavMenu(setIsNavMenuOpen, isNavbarOpen);

  const onEnterKeyDown = (event: KeyboardEvent<HTMLAnchorElement>): void => {
    event.key == 'Enter' && toggleNavMenu();
  };

  if (isResumePath) return null; 

  return (
    <nav className="navbar" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <Link href="/">
            <a
              className="navbar-item gtm-tracked-link"
              id="home-button"
              onClick={closeNavMenu}
              onKeyDown={() => {
                void 0;
              }}
              role="button"
              tabIndex={0}
            >
              <MainLogoImg />
              <h1 className="logo-title is-hidden-mobile">
                Patrick
                <br />
                <span>Obermeier</span>
              </h1>
            </a>
          </Link>
          {isRootPath && (
            <>
              <span
                className="navbar-item is-hidden-desktop navbar-mobile-cta"
                onClick={closeNavMenu}
              >
                <a
                  className="button is-rounded is-primary gtm-tracked-link primary-cta"
                  href="#portfolio"
                  id="cta-mobile-nav"
                >
                  <span className="icon is-small">
                    <svg
                      width={48}
                      height={32}
                      viewBox="0 0 48 32"
                      fill="#fff"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.3928 15.5021C17.3928 16.9146 18.0342 18.2693 19.1759 19.2681C20.3176 20.2669 21.8661 20.828 23.4808 20.828C25.0954 20.828 26.6439 20.2669 27.7856 19.2681C28.9273 18.2693 29.5687 16.9146 29.5687 15.5021C29.5687 14.0896 28.9273 12.735 27.7856 11.7362C26.6439 10.7374 25.0954 10.1762 23.4808 10.1762C21.8661 10.1762 20.3176 10.7374 19.1759 11.7362C18.0342 12.735 17.3928 14.0896 17.3928 15.5021V15.5021ZM47.0825 14.2753C41.9295 4.77903 34.1402 0 23.6982 0C13.2508 0 5.46692 4.77903 0.313885 14.28C0.107195 14.6629 0 15.0811 0 15.5045C0 15.9279 0.107195 16.3461 0.313885 16.729C5.46692 26.2252 13.2563 31.0043 23.6982 31.0043C34.1456 31.0043 41.9295 26.2252 47.0825 16.7242C47.5011 15.9539 47.5011 15.0599 47.0825 14.2753V14.2753ZM23.4808 23.8714C18.1973 23.8714 13.914 20.1242 13.914 15.5021C13.914 10.88 18.1973 7.13288 23.4808 7.13288C28.7643 7.13288 33.0476 10.88 33.0476 15.5021C33.0476 20.1242 28.7643 23.8714 23.4808 23.8714Z" />
                    </svg>
                  </span>
                  <span>Portfolio</span>
                </a>
              </span>
              <a
                role="button"
                className={`navbar-burger gtm-tracked-link ${isNavbarOpen && 'is-active'}`}
                id="navbar-burger"
                onClick={toggleNavMenu}
                onKeyDown={onEnterKeyDown}
                tabIndex={0}
                data-target="navMenu"
                aria-label="menu"
                aria-expanded="false"
              >
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span className="sr-only">Navbar Burger</span>
              </a>
            </>
          )}
        </div>
        {isRootPath && (
          <div id="navMenu" className={`navbar-menu ${isNavbarOpen && 'is-active'}`}>
            <div className="navbar-end">
              <span id="email-icon-placeholder" />
              <a
                className="navbar-item is-hidden-touch gtm-tracked-link"
                onClick={closeNavMenu}
                href={config.urls.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                id="linkedin-icon-desktop"
              >
                <span className="icon is-small" title="LinkedIn">
                  <svg
                    className="svg-icon"
                    width={25}
                    height={25}
                    viewBox="0 0 25 25"
                    fill="#4a4a4a"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M24 0H1C0.446875 0 0 0.446875 0 1V24C0 24.5531 0.446875 25 1 25H24C24.5531 25 25 24.5531 25 24V1C25 0.446875 24.5531 0 24 0ZM7.41562 21.3031H3.70625V9.37187H7.41562V21.3031ZM5.5625 7.74063C5.13727 7.74063 4.72159 7.61453 4.36802 7.37828C4.01446 7.14204 3.73889 6.80625 3.57616 6.41339C3.41343 6.02053 3.37085 5.58824 3.45381 5.17118C3.53677 4.75412 3.74154 4.37103 4.04222 4.07035C4.3429 3.76966 4.726 3.56489 5.14306 3.48194C5.56012 3.39898 5.99241 3.44156 6.38527 3.60428C6.77813 3.76701 7.11391 4.04258 7.35016 4.39615C7.5864 4.74971 7.7125 5.1654 7.7125 5.59062C7.70937 6.77812 6.74688 7.74063 5.5625 7.74063ZM21.3031 21.3031H17.5969V15.5C17.5969 14.1156 17.5719 12.3375 15.6688 12.3375C13.7406 12.3375 13.4438 13.8438 13.4438 15.4V21.3031H9.74063V9.37187H13.2969V11.0031H13.3469C13.8406 10.0656 15.05 9.075 16.8563 9.075C20.6125 9.075 21.3031 11.5469 21.3031 14.7594V21.3031Z" />
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </span>
              </a>
              <a
                className="navbar-item is-hidden-touch gtm-tracked-link"
                onClick={closeNavMenu}
                href={config.urls.twitter}
                target="_blank"
                rel="noopener noreferrer"
                id="twitter-icon-desktop"
              >
                <span className="icon is-small" title="Twitter">
                  <svg
                    className="svg-icon"
                    width={25}
                    height={25}
                    viewBox="0 0 25 25"
                    fill="#4A4A4A"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.5 0C5.5971 0 0 5.5971 0 12.5C0 19.4029 5.5971 25 12.5 25C19.4029 25 25 19.4029 25 12.5C25 5.5971 19.4029 0 12.5 0ZM18.5073 9.42243C18.5156 9.55357 18.5156 9.69029 18.5156 9.82422C18.5156 13.9202 15.3962 18.6384 9.69587 18.6384C7.93806 18.6384 6.30859 18.1278 4.93583 17.2489C5.18694 17.2768 5.4269 17.2879 5.68359 17.2879C7.13449 17.2879 8.46819 16.7969 9.53125 15.9654C8.16964 15.9375 7.02567 15.0446 6.63504 13.817C7.11216 13.8867 7.54185 13.8867 8.03292 13.7612C7.33183 13.6187 6.70166 13.238 6.24949 12.6835C5.79731 12.1291 5.55102 11.4353 5.55246 10.7199V10.6808C5.96261 10.9124 6.44531 11.0547 6.95033 11.0742C6.52579 10.7913 6.17762 10.408 5.93669 9.95823C5.69577 9.50851 5.56954 9.00628 5.5692 8.49609C5.5692 7.91853 5.71987 7.39118 5.99051 6.93359C6.7687 7.89156 7.73976 8.67506 8.84058 9.23316C9.9414 9.79126 11.1473 10.1115 12.38 10.173C11.942 8.06641 13.5156 6.36161 15.4074 6.36161C16.3002 6.36161 17.1038 6.73549 17.6702 7.33817C18.3705 7.20703 19.0402 6.94475 19.6373 6.59319C19.4057 7.31027 18.9202 7.91574 18.2757 8.29799C18.9007 8.23103 19.5033 8.05804 20.0614 7.81529C19.6401 8.43471 19.1127 8.98438 18.5073 9.42243V9.42243Z" />
                  </svg>
                  <span className="sr-only">Twitter</span>
                </span>
              </a>
              <a
                className="navbar-item is-hidden-touch gtm-tracked-link"
                onClick={closeNavMenu}
                href={config.urls.github}
                target="_blank"
                rel="noopener noreferrer"
                id="github-icon-desktop"
              >
                <span className="icon is-small" title="GitHub">
                  <svg
                    width={25}
                    height={25}
                    viewBox="0 0 25 25"
                    fill="#4a4a4a"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.5014 1.07431e-06C5.59435 -0.00286787 0 5.74076 0 12.8299C0 18.4359 3.49961 23.2012 8.37337 24.9512C9.02972 25.1205 8.92917 24.6414 8.92917 24.3143V22.0909C5.13909 22.5471 4.98548 19.9707 4.73131 19.5404C4.21741 18.6395 3.00246 18.41 3.36555 17.9797C4.22858 17.5235 5.10837 18.0944 6.12781 19.6408C6.86515 20.7626 8.30354 20.5732 9.03251 20.3867C9.19171 19.7125 9.53245 19.1101 10.0017 18.6424C6.07474 17.9194 4.43805 15.4579 4.43805 12.5316C4.43805 11.1114 4.89331 9.80606 5.78706 8.75316C5.21729 7.01744 5.84013 5.53133 5.92392 5.31042C7.54664 5.16124 9.2336 6.5039 9.36487 6.61005C10.2866 6.35472 11.3395 6.21988 12.5182 6.21988C13.7024 6.21988 14.7581 6.36046 15.6882 6.61866C16.0038 6.37193 17.5679 5.21861 19.0761 5.35919C19.1571 5.5801 19.7659 7.03179 19.2297 8.74455C20.1346 9.80032 20.5955 11.1172 20.5955 12.5402C20.5955 15.4722 18.9476 17.9367 15.0095 18.6482C15.3468 18.9889 15.6146 19.3953 15.7973 19.8435C15.98 20.2918 16.074 20.7729 16.0736 21.2589V24.4865C16.096 24.7447 16.0736 25 16.4926 25C21.4389 23.2872 25 18.4875 25 12.8328C25 5.74076 19.4029 1.07431e-06 12.5014 1.07431e-06Z" />
                  </svg>
                  <span className="sr-only">GitHub</span>
                </span>
              </a>
              <a
                className="navbar-item gtm-tracked-link"
                href="#about"
                id="about-link"
                onClick={closeNavMenu}
              >
                About
              </a>
              <a
                className="navbar-item gtm-tracked-link secondary-cta"
                onClick={closeNavMenu}
                href="#contact"
                id="contact-link"
              >
                Contact
              </a>
              <span className="navbar-item is-hidden-touch" onClick={closeNavMenu}>
                <a
                  className="button is-rounded is-primary gtm-tracked-link primary-cta"
                  href="#portfolio"
                  id="cta-desktop-nav"
                >
                  <span className="icon is-small">
                    <svg
                      width={48}
                      height={32}
                      viewBox="0 0 48 32"
                      fill="#fff"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.3928 15.5021C17.3928 16.9146 18.0342 18.2693 19.1759 19.2681C20.3176 20.2669 21.8661 20.828 23.4808 20.828C25.0954 20.828 26.6439 20.2669 27.7856 19.2681C28.9273 18.2693 29.5687 16.9146 29.5687 15.5021C29.5687 14.0896 28.9273 12.735 27.7856 11.7362C26.6439 10.7374 25.0954 10.1762 23.4808 10.1762C21.8661 10.1762 20.3176 10.7374 19.1759 11.7362C18.0342 12.735 17.3928 14.0896 17.3928 15.5021V15.5021ZM47.0825 14.2753C41.9295 4.77903 34.1402 0 23.6982 0C13.2508 0 5.46692 4.77903 0.313885 14.28C0.107195 14.6629 0 15.0811 0 15.5045C0 15.9279 0.107195 16.3461 0.313885 16.729C5.46692 26.2252 13.2563 31.0043 23.6982 31.0043C34.1456 31.0043 41.9295 26.2252 47.0825 16.7242C47.5011 15.9539 47.5011 15.0599 47.0825 14.2753V14.2753ZM23.4808 23.8714C18.1973 23.8714 13.914 20.1242 13.914 15.5021C13.914 10.88 18.1973 7.13288 23.4808 7.13288C28.7643 7.13288 33.0476 10.88 33.0476 15.5021C33.0476 20.1242 28.7643 23.8714 23.4808 23.8714Z" />
                    </svg>
                  </span>
                  <span>Portfolio</span>
                </a>
              </span>

              <span
                className="navbar-item is-hidden-desktop"
                id="email-button-placeholder"
                onClick={closeNavMenu}
              ></span>

              <span className="navbar-item is-hidden-desktop" onClick={closeNavMenu}>
                <a
                  className="button is-rounded is-secondary gtm-tracked-link"
                  href={config.urls.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="linkedin-icon-mobile"
                >
                  <span className="icon is-small">
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 25 25"
                      fill="#4a4a4a"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M24 0H1C0.446875 0 0 0.446875 0 1V24C0 24.5531 0.446875 25 1 25H24C24.5531 25 25 24.5531 25 24V1C25 0.446875 24.5531 0 24 0ZM7.41562 21.3031H3.70625V9.37187H7.41562V21.3031ZM5.5625 7.74063C5.13727 7.74063 4.72159 7.61453 4.36802 7.37828C4.01446 7.14204 3.73889 6.80625 3.57616 6.41339C3.41343 6.02053 3.37085 5.58824 3.45381 5.17118C3.53677 4.75412 3.74154 4.37103 4.04222 4.07035C4.3429 3.76966 4.726 3.56489 5.14306 3.48194C5.56012 3.39898 5.99241 3.44156 6.38527 3.60428C6.77813 3.76701 7.11391 4.04258 7.35016 4.39615C7.5864 4.74971 7.7125 5.1654 7.7125 5.59062C7.70937 6.77812 6.74688 7.74063 5.5625 7.74063ZM21.3031 21.3031H17.5969V15.5C17.5969 14.1156 17.5719 12.3375 15.6688 12.3375C13.7406 12.3375 13.4438 13.8438 13.4438 15.4V21.3031H9.74063V9.37187H13.2969V11.0031H13.3469C13.8406 10.0656 15.05 9.075 16.8563 9.075C20.6125 9.075 21.3031 11.5469 21.3031 14.7594V21.3031Z" />
                    </svg>
                  </span>
                  <span>LinkedIn</span>
                </a>
              </span>

              <span className="navbar-item is-hidden-desktop" onClick={closeNavMenu}>
                <a
                  className="button is-rounded is-secondary gtm-tracked-link"
                  href={config.urls.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="twitter-icon-mobile"
                >
                  <span className="icon is-small">
                    <svg
                      className="svg-icon"
                      width={25}
                      height={25}
                      viewBox="0 0 25 25"
                      fill="#4A4A4A"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12.5 0C5.5971 0 0 5.5971 0 12.5C0 19.4029 5.5971 25 12.5 25C19.4029 25 25 19.4029 25 12.5C25 5.5971 19.4029 0 12.5 0ZM18.5073 9.42243C18.5156 9.55357 18.5156 9.69029 18.5156 9.82422C18.5156 13.9202 15.3962 18.6384 9.69587 18.6384C7.93806 18.6384 6.30859 18.1278 4.93583 17.2489C5.18694 17.2768 5.4269 17.2879 5.68359 17.2879C7.13449 17.2879 8.46819 16.7969 9.53125 15.9654C8.16964 15.9375 7.02567 15.0446 6.63504 13.817C7.11216 13.8867 7.54185 13.8867 8.03292 13.7612C7.33183 13.6187 6.70166 13.238 6.24949 12.6835C5.79731 12.1291 5.55102 11.4353 5.55246 10.7199V10.6808C5.96261 10.9124 6.44531 11.0547 6.95033 11.0742C6.52579 10.7913 6.17762 10.408 5.93669 9.95823C5.69577 9.50851 5.56954 9.00628 5.5692 8.49609C5.5692 7.91853 5.71987 7.39118 5.99051 6.93359C6.7687 7.89156 7.73976 8.67506 8.84058 9.23316C9.9414 9.79126 11.1473 10.1115 12.38 10.173C11.942 8.06641 13.5156 6.36161 15.4074 6.36161C16.3002 6.36161 17.1038 6.73549 17.6702 7.33817C18.3705 7.20703 19.0402 6.94475 19.6373 6.59319C19.4057 7.31027 18.9202 7.91574 18.2757 8.29799C18.9007 8.23103 19.5033 8.05804 20.0614 7.81529C19.6401 8.43471 19.1127 8.98438 18.5073 9.42243V9.42243Z" />
                    </svg>
                  </span>
                  <span>Twitter</span>
                </a>
              </span>

              <span className="navbar-item is-hidden-desktop" onClick={closeNavMenu}>
                <a
                  className="button is-rounded is-secondary gtm-tracked-link"
                  href={config.urls.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="github-icon-mobile"
                >
                  <span className="icon is-small">
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 25 25"
                      fill="#4a4a4a"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12.5014 1.07431e-06C5.59435 -0.00286787 0 5.74076 0 12.8299C0 18.4359 3.49961 23.2012 8.37337 24.9512C9.02972 25.1205 8.92917 24.6414 8.92917 24.3143V22.0909C5.13909 22.5471 4.98548 19.9707 4.73131 19.5404C4.21741 18.6395 3.00246 18.41 3.36555 17.9797C4.22858 17.5235 5.10837 18.0944 6.12781 19.6408C6.86515 20.7626 8.30354 20.5732 9.03251 20.3867C9.19171 19.7125 9.53245 19.1101 10.0017 18.6424C6.07474 17.9194 4.43805 15.4579 4.43805 12.5316C4.43805 11.1114 4.89331 9.80606 5.78706 8.75316C5.21729 7.01744 5.84013 5.53133 5.92392 5.31042C7.54664 5.16124 9.2336 6.5039 9.36487 6.61005C10.2866 6.35472 11.3395 6.21988 12.5182 6.21988C13.7024 6.21988 14.7581 6.36046 15.6882 6.61866C16.0038 6.37193 17.5679 5.21861 19.0761 5.35919C19.1571 5.5801 19.7659 7.03179 19.2297 8.74455C20.1346 9.80032 20.5955 11.1172 20.5955 12.5402C20.5955 15.4722 18.9476 17.9367 15.0095 18.6482C15.3468 18.9889 15.6146 19.3953 15.7973 19.8435C15.98 20.2918 16.074 20.7729 16.0736 21.2589V24.4865C16.096 24.7447 16.0736 25 16.4926 25C21.4389 23.2872 25 18.4875 25 12.8328C25 5.74076 19.4029 1.07431e-06 12.5014 1.07431e-06Z" />
                    </svg>
                  </span>
                  <span>GitHub</span>
                </a>
              </span>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

interface Props {
  isNavbarOpen: boolean;
  setIsNavMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export default Navbar;
