import React from 'react';
import Helmet from 'react-helmet';

import Grid from '../components/Grid';
import Icon from '../components/Icon';

import developmentIcon from '../assets/images/development.svg';
import graphicDesignIcon from '../assets/images/graphic-design.svg';
import optimizationIcon from '../assets/images/optimization.svg';

const Page = () => (
  <div>
    <Helmet
      title="About"
      meta={[
        {
          name: 'description',
          content:
            'My name is Marco and I am living in Germany. I love designing and developing rich web applications with user experience in mind.',
        },
      ]}
    />
    <section className="site__section">
      <Grid>
        <h1>Hello,</h1>
        <p>
          my name is{' '}
          <span itemProp="name">
            <span itemProp="givenName">Marco</span>
          </span>{' '}
          and I am living in <span itemProp="nationality">Germany</span>. I love
          designing and developing rich web applications with user experience in
          mind. I like solving problems, designing clean interfaces and
          constantly being in move to learn new things.
        </p>

        <div className="grid__row">
          <div className="grid__col grid__col--4">
            <figure>
              <Icon size="6x">
                {graphicDesignIcon}
              </Icon>
            </figure>

            <h3>Graphic Design</h3>
            <p>
              From the inital sketch and visualisation to the finished outcome,
              I craft creative solutions for all aspects of design. Starting
              with a prototype give you a quick look how the result might look
              and feel.
            </p>
          </div>

          <div className="grid__col grid__col--4">
            <figure>
              <Icon size="6x">
                {developmentIcon}
              </Icon>
            </figure>

            <h3>Web Development</h3>
            <p>
              I am using the latest web-technologies along with clean and well
              structured code to produce a seamless user experience. All my
              websites are coded with my bare hands from scratch.
            </p>
          </div>

          <div className="grid__col grid__col--4">
            <figure>
              <Icon size="6x">
                {optimizationIcon}
              </Icon>
            </figure>

            <h3>Optimization</h3>
            <p>
              I think it is important to optimize and further improve a site.
              Adding <abbr title="Search engine optimization">SEO</abbr>{' '}
              strategies and going for web performance are key features to
              provide a richt user experience and to make your visitors happy.
            </p>
          </div>
        </div>

        <h2>About</h2>
        <h3>Basics</h3>

        <table>
          <tbody>
            <tr>
              <th>Citizenship</th>
              <td>german</td>
            </tr>
            <tr>
              <th>Languages</th>
              <td>
                German (mother tongue), English (fluent), French (base
                knowledge)
              </td>
            </tr>
          </tbody>
        </table>

        <h3>Education</h3>

        <table>
          <tbody>
            <tr>
              <th>2016</th>
              <td>
                Education in media design (Mediengestalter Digital & Print)
              </td>
            </tr>
            <tr>
              <th>10.2015 - 12.2015</th>
              <td>MongoDB online course “MongoDB for Node.js Developers”</td>
            </tr>
            <tr>
              <th>2013 - 2016</th>
              <td>
                Education in media design (Mediengestalter Digital & Print) at{' '}
                <span itemProp="worksFor">FIXTREME GmbH</span>
              </td>
            </tr>
            <tr>
              <th>04.2013 - 08.2013</th>
              <td>
                Internship in media designer at{' '}
                <span itemProp="worksFor">FIXTREME GmbH</span>
              </td>
            </tr>
            <tr>
              <th>06.2012 - 03.2013</th>
              <td>Internship in video editing at Los Banditos GmbH</td>
            </tr>
            <tr>
              <th>2012</th>
              <td>A level (Allgemeine Hochschulreife)</td>
            </tr>
            <tr>
              <th>2004 - 2012</th>
              <td>Friedrich-Schiller-Gymnasium</td>
            </tr>
            <tr>
              <th>2004</th>
              <td>Graduated primary school</td>
            </tr>
            <tr>
              <th>2000 - 2004</th>
              <td>Schlösslesfeld Grundschule</td>
            </tr>
          </tbody>
        </table>

        <div className="grid__row">
          <div className="grid__col grid__col--7">
            <h3>Personal</h3>
            <p>
              creative, flexible, vegetarian, team player, relaxed, eager for
              knowledge, organized, ambitious
            </p>
          </div>

          <div className="grid__col grid__col--5">
            <h3>Interests</h3>
            <p>
              Blogs and books, Music, Friends, Photography, Movies, Open Source
              Projects, Maths, Video games
            </p>
          </div>
        </div>

        <h2>Skills</h2>

        <div className="grid__row">
          <div className="grid__col grid__col grid__col--4">
            <h3>
              <abbr title="HyperText Markup Language">HTML</abbr>
            </h3>
            <p>
              Semantic <abbr title="HyperText Markup Language 5">HTML5</abbr>{' '}
              Markup, Schema.org tags,{' '}
              <abbr title="Web Accessibility Initiative – Accessible Rich Internet Applications">
                WAI-ARIA
              </abbr>{' '}
              Tags, <abbr title="HyperText Markup Language">HTML</abbr> Emails,
              Templating: Assemble, <abbr title="Embedded JavaScript">EJS</abbr>,
              Jade
            </p>
          </div>

          <div className="grid__col grid__col grid__col--4">
            <h3>
              <abbr title="Cascading Style Sheets">CSS</abbr>
            </h3>
            <p>
              Responsive Layout, Animations, Modular, Scalable,{' '}
              <abbr title="Block, Element, Modifier">BEM</abbr> Architecture,
              Preprocessors:{' '}
              <abbr title="Syntactically Awesome Stylesheets">Sass</abbr>, Less,
              CSSNext, Frameworks: Twitter Bootstrap, ZURB Foundation
            </p>
          </div>

          <div className="grid__col grid__col grid__col--4">
            <h3>JavaScript</h3>
            <p>
              Syntax: <abbr title="ECMAScript 5">ES5</abbr>,{' '}
              <abbr title="ECMAScript 6">ES6</abbr> (<abbr title="ECMAScript 2015">ES2015</abbr>), Node.js:{' '}
              <abbr title="Representational state transfer">REST</abbr>ful{' '}
              <abbr title="Application programming interface">API</abbr>s,
              Express, Frameworks: jQuery,{' '}
              <abbr title="Data-Driven Documents">D3.js</abbr>, AngularJS,
              Testing: Mocha, Jasmine, Module Loader: CommonJS,{' '}
              <abbr title="Asynchronous module definition">AMD</abbr>
            </p>
          </div>
        </div>

        <div className="grid__row">
          <div className="grid__col grid__col grid__col--4">
            <h3>Content Management Systems</h3>
            <p>
              Contao <abbr title="Content Management System">CMS</abbr>,
              WordPress, DotNetNuke, Jekyll, Tumblr
            </p>
          </div>

          <div className="grid__col grid__col grid__col--4">
            <h3>PHP</h3>
            <p>Solid knowledge, Templating, Modul- / Theme-Adjustments</p>
          </div>

          <div className="grid__col grid__col grid__col--4">
            <h3>Databases</h3>
            <p>MongoDB, MySQL, Firebase</p>
          </div>
        </div>

        <div className="grid__row">
          <div className="grid__col grid__col grid__col--4">
            <h3>Web techniques</h3>
            <p>
              Webperformance, Accessibility, User Interfaces / User Experience,
              Search Engine Optimization
            </p>
          </div>

          <div className="grid__col grid__col grid__col--4">
            <h3>Tools</h3>
            <p>
              Version Control: Git, Unix Command Line, Task Runner: Grunt, Gulp,{' '}
              <abbr title="Node Package Manager">npm</abbr>, Package Manager:{' '}
              <abbr title="Node Package Manager ">npm</abbr>, Bower
            </p>
          </div>

          <div className="grid__col grid__col grid__col--4">
            <h3>Applications</h3>
            <p>
              Adobe Photoshop, Adobe Illustrator, Sketch, Adobe Indesign, Adobe
              After Effects, Adobe Premiere Pro
            </p>
          </div>
        </div>
      </Grid>
    </section>
  </div>
);

export default Page;
