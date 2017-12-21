import React, { Component } from 'react';

export default class Form extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row topmargin_35 contact-form-container to_animate" data-animation="fadeInUp">
                <div className="col-sm-12 text-center">
                    <h2 className="text-uppercase topmargin_5 bottommargin_25">Contact Form</h2>

                    <form className="contact-form row columns_margin_0" method="post" action="/">
                        <div className="col-sm-6">
                            <div className="contact-form-name form-group">
                                <label for="name" className="sr-only">Full Name
                                    <span className="required">*</span>
                                </label>
                                <input type="text" aria-required="true" size="30" value="" name="name" id="name" className="form-control" placeholder="Enter your Name"/>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="contact-form-subject form-group">
                                <label for="email" className="sr-only">Email
                                    <span className="required">*</span>
                                </label>
                                <input type="text" aria-required="true" size="30" value="" name="subject" id="email" className="form-control" placeholder="Enter your Email"/>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="contact-form-phone form-group">
                                <label for="subject" className="sr-only">Subject
                                    <span className="required">*</span>
                                </label>
                                <input type="text" aria-required="true" size="30" value="" name="subject" id="subject" className="form-control" placeholder="Enter your Subject"/>
                            </div>
                        </div>
                        <div className="col-sm-12">

                            <div className="contact-form-message form-group">
                                <label for="message" className="sr-only">Message</label>
                                <textarea aria-required="true" rows="5" cols="45" name="message" id="message" className="form-control" placeholder="Enter your Message..."></textarea>
                            </div>
                        </div>

                        <div className="col-sm-12">
                            <div className="contact-form-submit topmargin_10 bottommargin_25">
                                <button type="submit" id="contact_form_submit" name="contact_submit" className="theme_button color1 margin_0">Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}