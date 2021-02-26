import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';

const useEmailPlaceholders = (): void => {
  const router = useRouter();

  useEffect(() => {
    (function setEmailAddress(elements, email) {
      elements &&
        elements.forEach((element, index) => {
          element.innerHTML = `<a href="mailto:${email}" class="email-link gtm-tracked-link" id="email-link-${index}">${email}</a>`;
        });
    })(document.querySelectorAll('.email-placeholder'), 'patrick.obermeier@outlook.com');

    const emailButton = document.querySelector('#email-button-placeholder');

    if (emailButton)
      emailButton.innerHTML = `<a class="button is-rounded is-secondary gtm-tracked-link" href="mailto:patrick.obermeier@outlook.com" id="mail-button">
                                <span class="icon is-small">
                                  <svg width="20" height="15" viewBox="0 0 32 25" fill="#4A4A4A" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M28.8 0H3.2C1.44 0 0.016 1.40625 0.016 3.125L0 21.875C0 23.5938 1.44 25 3.2 25H28.8C30.56 25 32 23.5938 32 21.875V3.125C32 1.40625 30.56 0 28.8 0ZM28.8 6.25L16 14.0625L3.2 6.25V3.125L16 10.9375L28.8 3.125V6.25Z"/>
                                  </svg>    
                                </span>
                                <span>Email</span>
                              </a>`;

    const emailIcon = document.createElement('a');
    emailIcon.classList.add('navbar-item', 'is-hidden-touch', 'gtm-tracked-link');
    emailIcon.id = 'mail-icon';
    emailIcon.href = 'mailto:patrick.obermeier@outlook.com';
    emailIcon.innerHTML = `<span class="icon is-small" title="Email">
                            <svg width="32" height="25" viewBox="0 0 32 25" fill="#4A4A4A" xmlns="http://www.w3.org/2000/svg">
                            <path d="M28.8 0H3.2C1.44 0 0.016 1.40625 0.016 3.125L0 21.875C0 23.5938 1.44 25 3.2 25H28.8C30.56 25 32 23.5938 32 21.875V3.125C32 1.40625 30.56 0 28.8 0ZM28.8 6.25L16 14.0625L3.2 6.25V3.125L16 10.9375L28.8 3.125V6.25Z"/>
                            </svg>
                            <span class="sr-only">Email</span>
                          </span>`;
    const emailIconPlaceholder = document.querySelector('#email-icon-placeholder');
    emailIconPlaceholder && emailIconPlaceholder.replaceWith(emailIcon);
    const emailIconFooterPlaceholder = document.querySelector('#email-icon-placeholder-footer');
    const emailIconFooter = emailIcon.cloneNode(true) as HTMLElement;
    emailIconFooter.id = 'mail-icon-footer';
    emailIconFooter.classList.remove('navbar-item', 'is-hidden-touch');
    emailIconFooter.innerHTML = `<span class="icon" title="Email">
                                  <svg width="32" height="25" viewBox="0 0 32 25" fill="#4A4A4A" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M28.8 0H3.2C1.44 0 0.016 1.40625 0.016 3.125L0 21.875C0 23.5938 1.44 25 3.2 25H28.8C30.56 25 32 23.5938 32 21.875V3.125C32 1.40625 30.56 0 28.8 0ZM28.8 6.25L16 14.0625L3.2 6.25V3.125L16 10.9375L28.8 3.125V6.25Z"/>
                                  </svg>
                                  <span class="sr-only">Email</span>
                                </span>`;
    emailIconFooterPlaceholder && emailIconFooterPlaceholder.replaceWith(emailIconFooter);
  }, [router.asPath]);
};

export default useEmailPlaceholders;
