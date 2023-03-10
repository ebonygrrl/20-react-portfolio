import React from 'react';
import '../../styles/Resume.css';
import PDFresume from '../../pdf/abooker-resume-2023.pdf';

export default function Resume() {
  return (
    <>
      <header className="resume">
        <h2>Resume</h2>
        <span><a href={PDFresume} target="_blank">View downloadable version</a></span>
      </header>

      <article className="section-content resume">
        
        <h3>Professional Summary</h3>

        <section>
          <p>Experienced email and web designer with an emphasis on optimizing email performance, responsive mobile design, and digital user experience</p>
        </section>

        <h3>Career Summary</h3>

        <section>
          <div className="company">
            <span><strong>Ebony Media Group</strong> &bull; <em>Content Marketing Manager</em></span>
            <span className="date">November 2021 - Present</span>
          </div>
          <ul>
            <li>Oversee email marketing process - including research, content creation, and layout planning.</li>
            <li>Conceptualize email campaigns to increase engagement and meet sponsorship agreements.</li>
            <li>Monitor and report on consumer behavior through establishing benchmarks to amplify the customer experience, setting engagement goals to grow subscribers, and supporting funnel flow between email and social efforts.</li>
            <li>Collaborate cross-functionally with designers, social media managers, and website specialists to develop strategy and seek continual improvement in all digital marketing efforts.</li>
          </ul>
        </section>

        <section>
          <div className="company">
            <span><strong>TCS Education System</strong> &bull; <em>Creative Technologist</em></span>
            <span className="date">October 2017 - November 2021</span>
          </div>
          <ul>
            <li>Served as subject matter expert for digital experiences for internal teams and external stakeholders to educate and provide thought leadership on interactive technologies.</li>
            <li>Managed the infrastructure, analytics, targeting, testing, and tooling requirements for websites and digital platforms.</li>
            <li>Developed and executed solutions to enhance the digital customer journey and user experience for several higher education entities.</li>
            <li>Performed website updates that align with brand enhancement objectives and compliance standards.</li>
          </ul>
        </section>

        <section>
          <div className="company">
            <span><strong>Sears Holdings</strong> &bull; <em>Email Developer</em></span>
            <span className="date">August 2013 - June 2017</span>
          </div>
          <ul>
            <li>Responsible for quick and efficient, error-free coding mobile-responsive promotional, triggered, and transactional email campaigns for Sears, Kmart, Craftsman, and Shop Your Way.</li>
            <li>Utilized HTML nested table structure for emails, responsive CSS for mobile. </li>
            <li>Prepared email assets from Adobe Photoshop templates.</li>
          </ul>
        </section>

        <section>
          <div className="company">
            <span><strong>OpticsPlanet, Inc.</strong> &bull; <em>Web Designer</em></span>
            <span className="date">October 2009 - August 2013</span>
          </div>
          <ul>
            <li>Created websites using HTML, CSS, and customized WordPress plugins.</li>
            <li>Performed company blog migration from Blogger to Wordpress.</li>
            <li>Installed, configured and managed WordPress installations.</li>
            <li>Specialized in email deliverability, email standards, and creating multipart HTML emails that render consistently for Outlook, Yahoo, Gmail, Hotmail, AOL and devices such as iOS and Android.</li>
            <li>Developed Facebook Page Tab Apps.</li>
          </ul>
        </section>

        <section>
          <h3>Proficiencies</h3>

          <p>Email Development &bull; Responsive Web Design &bull; Wordpress &bull; Copyediting &bull; HTML5 &bull;
            CSS3 &bull; Content Management &bull; Site Maintenance &bull; Quality Control (QA)</p>
        </section>

        <section>
          <h3>Programming</h3>

          <p>Node JS &bull; React &bull; ExpressJS &bull; MongoDB &bull; MySQL &bull; HTML5 &bull; CSS3 &bull; JQuery &bull; Javascript &bull; PHP(Wordpress)</p>
        </section>

        <section>
          <h3>Software & Tools</h3>
          <p>Visual Studio &bull; Adobe Photoshop CS6 &bull; Adobe Dreamweaver CS6 &bull; Microsoft Outlook &bull; Microsoft Excel</p>
        </section>
      </article>
    </>
  );
}