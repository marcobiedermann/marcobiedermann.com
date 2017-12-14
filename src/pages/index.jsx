import React from 'react';
import Link from 'gatsby-link';

const Page = () => (
  <div>
    <section className="site__section site__section--full site__section--dark">

      <div className="grid" itemScope itemType="http://schema.org/Person">

        <h1 className="animate animate--delay animate--slideInUp" itemProp="name" style={{ letterSpacing: '1rem' }}><span itemProp="givenName">Marco</span> <span itemProp="familyName">Bieder&shy;mann</span></h1>
        <h3 className="animate animate--delay animate--slideInUp" itemProp="jobTitle">Frontend Web Developer & Graphic Designer</h3>
        <Link className="scroll-down animate animate--infinite animate--upDown js-scroll-to" to="#about" title="Scroll down to about section">
          <svg className="icon icon">
            <use xlinkHref="assets/images/icons.svg#arrow" />
          </svg>
        </Link>

      </div>

    </section>

    <section className="site__section text--center" id="about">

      <div className="grid">

        <h2 className="headline--lined">About</h2>
        <p className="center-block">My name is <span itemProp="name"><span itemProp="givenName">Marco</span></span> and I am living in <span itemProp="nationality">Germany</span>. I love designing and developing rich web applications with user experience in mind. I like solving problems, designing clean interfaces and constantly being in move to learn new things.</p>

        <div className="grid__row">

          <div className="grid__col grid__col--4">

            <figure>
              <svg className="icon icon--6x"><use xlinkHref="assets/images/icons.svg#graphic-design" /></svg>
            </figure>

            <h3>Graphic Design</h3>
            <p>From the inital sketch and visualisation to the finished outcome, I craft creative solutions for all aspects of design. Starting with a prototype give you a quick look how the result might look and feel.</p>

          </div>

          <div className="grid__col grid__col--4">

            <figure>
              <svg className="icon icon--6x"><use xlinkHref="assets/images/icons.svg#development" /></svg>
            </figure>

            <h3>Web Development</h3>
            <p>I am using the latest web-technologies along with clean and well structured code to produce a seamless user experience. All my websites are coded with my bare hands from scratch.</p>

          </div>

          <div className="grid__col grid__col--4">

            <figure>
              <svg className="icon icon--6x"><use xlinkHref="assets/images/icons.svg#optimization" /></svg>
            </figure>

            <h3>Optimization</h3>
            <p>I think it is important to optimize and further improve a site. Adding <abbr title="Search engine optimization">SEO</abbr> strategies and going for web performance are key features to provide a richt user experience and to make your visitors happy.</p>
          </div>

        </div>

        <p><a className="button button--dark" href="about/" itemProp="url" title="More about me">More about me</a></p>

      </div>

    </section>

    <section className="site__section site__section--dark text--center" id="work">

      <div className="grid">

        <h2 className="headline--lined">Work</h2>
        <p className="center-block">Take a look at some of my projects I’ve been working on.</p>

        PROJECTS

        <p><a className="button button--light" href="projects/" title="More of my project">see more Work</a></p>
      </div>

    </section>

    <section className="site__section text--center" id="contact">

      <div className="grid">

        <h2 className="headline--lined">Contact</h2>
        <p>Interested in working together? Get in touch with me.</p>

        <ul className="text--center list--inline list--unstyled">
          <li style={{
            listStyle: 'none',
            display: 'inline-block',
          }}
          >
            <link href="https://www.marcobiedermann.com" itemProp="url" />
          </li>
          <li>
            <Link to="//twitter.com/m412c0b" itemProp="sameAs" target="_blank" rel="noopener" title="Marco Biedermann on twitter">
              <svg className="icon icon--2x">
                <use xlinkHref="assets/images/icons.svg#twitter" />
              </svg>
            </Link>
          </li>
          <li>
            <Link to="//dribbble.com/marcobiedermann" itemProp="sameAs" target="_blank" rel="noopener" title="Marco Biedermann on dribbble">
              <svg className="icon icon--2x">
                <use xlinkHref="assets/images/icons.svg#dribbble" />
              </svg>
            </Link>
          </li>
          <li>
            <Link to="//behance.net/marcobiedermann" itemProp="sameAs" target="_blank" rel="noopener" title="Marco Biedermann on behance">
              <svg className="icon icon--2x">
                <use xlinkHref="assets/images/icons.svg#behance" />
              </svg>
            </Link>
          </li>
          <li>
            <Link to="//github.com/marcobiedermann" itemProp="sameAs" target="_blank" rel="noopener" title="Marco Biedermann on github">
              <svg className="icon icon--2x">
                <use xlinkHref="assets/images/icons.svg#github" />
              </svg>
            </Link>
          </li>
        </ul>

      </div>

    </section>
  </div>
);

export default Page;
