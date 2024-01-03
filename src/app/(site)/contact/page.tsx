import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';

function Contact() {
  return (
    <>
         {/* Breadcrumb Start */}
         <Breadcrumb data={['Home','Contact']}/>
        {/* Breadcrumb End */}

        {/* Contact Start */}
        <div className="container-fluid">
          <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Contact Us</span></h2>
          <div className="row px-xl-5">
            <div className="col-lg-7 mb-5">
              <div className="contact-form bg-light p-30">
                <div id="success" />
                <form name="sentMessage" id="contactForm" noValidate={false}>
                  <div className="control-group">
                    <input type="text" className="form-control" id="name" placeholder="Your Name" required={true} data-validation-required-message="Please enter your name" />
                    <p className="help-block text-danger" />
                  </div>
                  <div className="control-group">
                    <input type="email" className="form-control" id="email" placeholder="Your Email" required={true} data-validation-required-message="Please enter your email" />
                    <p className="help-block text-danger" />
                  </div>
                  <div className="control-group">
                    <input type="text" className="form-control" id="subject" placeholder="Subject" required={true} data-validation-required-message="Please enter a subject" />
                    <p className="help-block text-danger" />
                  </div>
                  <div className="control-group">
                    <textarea className="form-control" rows={8} id="message" placeholder="Message" required={true} data-validation-required-message="Please enter your message" defaultValue={""} />
                    <p className="help-block text-danger" />
                  </div>
                  <div>
                    <button className="btn btn-primary py-2 px-4" type="submit" id="sendMessageButton">Send
                      Message</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-5 mb-5">
              <div className="bg-light p-30 mb-30">
                {/* <iframe style={{width: '100%', height: '250px'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd" frameBorder={0} allowFullScreen aria-hidden="false" tabIndex={0} /> */}
                <iframe  style={{width: '100%', height: '250px'}} frameBorder={0} scrolling={"no"} marginWidth={0} id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20Adapazar%C4%B1%2054100%20Sakarya,%20Sakarya%20Province,%20Turkey+(sakarya)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" allowFullScreen aria-hidden="false" tabIndex={0}></iframe> 
                <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=11df7cd6892748856cebf6dfb1e9aab1d0ed26c4'></script>
              </div>
              <div className="bg-light p-30 mb-3">
                <p className="mb-2"><i className="fa fa-map-marker-alt text-primary mr-3" />123 Street, New York, USA</p>
                <p className="mb-2"><i className="fa fa-envelope text-primary mr-3" />info@example.com</p>
                <p className="mb-2"><i className="fa fa-phone-alt text-primary mr-3" />+012 345 67890</p>
              </div>
            </div>
          </div>
        </div>
        {/* Contact End */}
    </>
  )
}

export default Contact