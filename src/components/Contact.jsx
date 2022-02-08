import React from 'react';

const Contact = () => {
  return (
    <div className="container">
      <div className="colmd-12 text-center text-primary mt-5">
        <h1>Contact Us</h1>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-felx justify-content-between">
            <img src="/images-shop/enveloppe.jpg" alt="enveloppe"  height="400px" width="400px" />
          </div>
          <div className="col-md-6">
              <form className="mt-5">
                  <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                  </div>
                  <button className="btn btn-outline-primary"> Send Message</button>
              </form>
          </div>
        </div>
      </div>
    </div>
  ); 
};

export default Contact;
