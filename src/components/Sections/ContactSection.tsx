import { useRouter } from 'next/dist/client/router';
import { SyntheticEvent, useRef } from 'react';

interface ContactFormData {
  [key: string]: string | number;
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const router = useRouter();

  const contactForm = useRef<HTMLFormElement>(null);
  const firstNameInput = useRef<HTMLInputElement>(null);
  const lastNameInput = useRef<HTMLInputElement>(null);
  const emailInput = useRef<HTMLInputElement>(null);
  const subjectInput = useRef<HTMLInputElement>(null);
  const messageInput = useRef<HTMLTextAreaElement>(null);

  const submitForm = (e: SyntheticEvent): void => {
    e.preventDefault();

    const formData: ContactFormData = {
      firstName: firstNameInput?.current?.value || '',
      lastName: lastNameInput?.current?.value || '',
      email: emailInput.current?.value || '',
      subject: subjectInput?.current?.value || '',
      message: messageInput?.current?.value || '',
    };

    const getEncodedDataString = (data: ContactFormData): string =>
      Object.keys(data)
        .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
        .join('&');

    // FIX for issue with service-worker caching POST-request to Netlify forms
    // Create a time stamp and add send it with the POST request as a query-string, so the request will not be cached by the service worker
    const timeStamp = Math.floor(Date.now() / 1000);

    fetch(`/?t=${timeStamp}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      cache: 'no-cache',
      body: getEncodedDataString({
        'form-name': contactForm?.current?.getAttribute('name') || '',
        ...formData,
      }),
    })
      .then(() => {
        router.push('/success');
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <section className="section" id="contact">
      <div className="container has-text-centered">
        <h2 className="title">Get In Touch</h2>
        <p className="subtitle">
          Whether you are interested in hiring me, to work on a project together or to discuss any
          other proposal, feel free to contact me anytime. I am very much looking forward to your
          message!
        </p>
        <div className="form-container">
          <form
            action="/success"
            className="control"
            id="contact-form"
            ref={contactForm}
            name="contact-form"
            data-netlify="true"
            method="POST"
            onSubmit={submitForm}
          >
            <div className="field is-horizontal">
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      name="firstName"
                      id="firstName"
                      ref={firstNameInput}
                      placeholder=" "
                      required
                    />
                    <label className="label floating-label" htmlFor="firstName">
                      First Name
                    </label>
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      name="lastName"
                      id="lastName"
                      ref={lastNameInput}
                      placeholder=" "
                      required
                    />
                    <label className="label floating-label" htmlFor="lastName">
                      Last Name
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="field">
              <div className="control">
                <input
                  className="input"
                  type="email"
                  id="email"
                  name="email"
                  ref={emailInput}
                  placeholder=" "
                  required
                />
                <label className="label floating-label" htmlFor="email">
                  Email
                </label>
              </div>
            </div>
            <div className="field">
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="subject"
                  id="subject"
                  ref={subjectInput}
                  placeholder=" "
                  required
                />
                <label className="label floating-label" htmlFor="subject">
                  Subject
                </label>
              </div>
            </div>
            {/* <div class="field is-hidden">
        <label class="label" for="telnr">Telnr</label>
        <div class="control">
          <input class="input" type="text" name="telnr" id="telnr">
        </div>
      </div> */}
            <div className="field">
              <div className="control">
                <textarea
                  className="textarea"
                  name="message"
                  id="message"
                  ref={messageInput}
                  placeholder=" "
                  required
                  defaultValue={''}
                />
                <label className="label floating-label" htmlFor="message">
                  Message
                </label>
              </div>
            </div>
            {/* <div data-netlify-recaptcha="true"></div> */}
            <div className="field is-grouped is-hidden-touch">
              <div className="control">
                <input
                  type="submit"
                  className="button is-primary is-rounded is-medium"
                  defaultValue="Send Message"
                />
              </div>
              <div className="control">
                <input
                  type="reset"
                  className="button is-secondary is-rounded is-medium"
                  defaultValue="Reset Form"
                />
              </div>
            </div>
            <div className="field is-hidden-desktop">
              <div className="control">
                <input
                  type="submit"
                  className="button is-primary is-rounded is-fullwidth is-medium"
                  defaultValue="Send Message"
                />
              </div>
              <div className="control">
                <input
                  type="reset"
                  className="button is-secondary is-outlined is-rounded is-fullwidth is-medium"
                  defaultValue="Reset Form"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
