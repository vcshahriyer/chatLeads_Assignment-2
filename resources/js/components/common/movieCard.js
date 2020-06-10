import React, { Component, Fragment } from "react";

class MovieCard extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { films } = this.props;
        return (
            <Fragment>
                {films
                    ? films.map((item, index) => {
                          return (
                              <div key={index} className="rs-card">
                                  <img src={item.photo} alt="Avatar" />
                                  <div className="container">
                                      <strong>Genre: {item.genre}</strong>{" "}
                                      <br />
                                      <strong>
                                          Ticket: {item.ticket}
                                      </strong>{" "}
                                      <br />
                                      <strong>Price: {item.price}</strong>{" "}
                                      <br />
                                      <strong>
                                          Country : {item.country}
                                      </strong>{" "}
                                      <br />
                                      <strong>Release: {item.release}</strong>
                                      <br />
                                      <strong> Rating: {item.rating}</strong>
                                      <h4>
                                          <strong>{item.name}</strong>
                                      </h4>
                                      <p>{item.description}</p>
                                  </div>
                              </div>
                          );
                      })
                    : null}
            </Fragment>
        );
    }
}

export default MovieCard;
