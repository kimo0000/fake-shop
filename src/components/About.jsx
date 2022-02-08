import React from 'react';
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="fw-bold text-center">About Us</h1>
            <hr />
            <p className="lead">
              Le Lorem Ipsum est simplement du faux texte employé dans la
              composition et la mise en page avant impression. Le Lorem Ipsum
              est le faux texte standard de l'imprimerie depuis les années 1500,
              quand un imprimeur anonyme assembla ensemble des morceaux de texte
              pour réaliser un livre spécimen de polices de texte. Il n'a pas
              fait que survivre cinq siècles, mais s'est aussi adapté à la
              bureautique informatique, sans que son contenu n'en soit modifié.
              Il a été popularisé dans les années 1960 grâce à la vente de
              feuilles Letraset contenant des passages du Lorem Ipsum, et, plus
              récemment, par son inclusion dans des applications de mise en page
              de texte, comme Aldus PageMaker.
            </p>
            <NavLink to='/contact' className="btn btn-outline-primary mt-2">Contact Us</NavLink>
          </div>
          <div className="col-md-6 d-flex justify-content-end mt-5">
            <img
              src="/images-shop/about.jpg"
              alt="about us"
              height="400px"
              width="400px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
