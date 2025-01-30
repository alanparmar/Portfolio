import React, { Component } from 'react';

export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="ten columns">
            <p className="lead">
              Feel free to check out my resume or contact me for any work or suggestions below.
            </p>
          </div>
        </div>
        <div className="row">
          <aside className="eight columns footer-widgets">
            <div className="widget button-group">
              {/* Button to View Resume */}
              <a href={resumeData.resumeUrl} target="_blank" rel="noopener noreferrer">
                <button className="button">View Resume</button>
              </a>
              {/* Button to Contact via Email */}
              <a href={`mailto:${resumeData.email}`}>
                <button className="button">Contact Me</button>
              </a>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}
