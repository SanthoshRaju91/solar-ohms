import React from 'react';
import config from './config';
import Item from './Item';
import Form from './Form';

const Contact = props => {
    return (
        <section className="ls section_padding_top_110 section_padding_bottom_75">
            <div className="container">
                <div className="row">
                    <div className="col-md-offset-2 col-md-8 text-center">
                        <div className="cornered-heading center-heading bottommargin_40">
                            <span className="text-uppercase">Connect with us</span>
                            <h2 className="text-uppercase">Our Contacts</h2>
                        </div>
                        <p>
                            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce tempus odio vitae nibh semper, ac venenatis massa mollis. Proin tempus, mauris eu facilisis feugiat, nisi augue faucibus.
                        </p>
                    </div>
                </div>
                <div className="row with_shadow topmargin_40 to_animate" data-animation="fadeInDown">
                    {
                        config.map((current, index) => (<Item key={index} {...current}></Item>))
                    }                                
                </div>
                <Form></Form>
            </div>
        </section>
    );
}

export default Contact;