import React, { Component } from "react";
import axios from "axios";
import MovieCard from "./common/movieCard";
import Pagination from "react-js-pagination";

class Film extends Component {
    constructor(props) {
        super(props);
        this.state = {
            films: [],
            activePage: 1
        };
    }
    getFilms = url => {
        axios
            .get(url)
            .then(response => {
                // handle success
                this.setState({
                    films: response.data.films
                });
            })
            .catch(function(error) {
                // handle error
                console.log(error);
            });
    };
    componentDidMount() {
        this.getFilms("/get-films");
    }
    handlePageChange = pageNumber => {
        this.setState({ activePage: pageNumber });
        this.getFilms(`/get-films?page=${pageNumber}`);
    };
    render() {
        const { films } = this.state;
        return (
            <div className="container">
                <div className="movie-card-wraper">
                    <MovieCard films={films.data}></MovieCard>
                    <div className="pagination-wraper">
                        {films && films.total ? (
                            <Pagination
                                activePage={this.state.activePage}
                                itemsCountPerPage={3}
                                totalItemsCount={films.total}
                                pageRangeDisplayed={3}
                                onChange={this.handlePageChange}
                            />
                        ) : null}
                    </div>
                </div>
            </div>
        );
    }
}

export default Film;
