import React from "react";
import axios from "axios";

class UpdateMovie extends React.Component {
    state = {
        movie: {
            id:"",
            title: "",
            director: "",
            metascore: "",
            stars: "",
        }
    }

    handleChanges = e => {
        let name = e.target.name
        let value = e.target.value;
        this.setState({
          movie: {
            ...this.state.movie,
            [name]: value
          }
        });
      };

      handleSubmit = (e, id, updatedMovie) => {
          e.preventDefault()
        axios
        .put(`http://localhost:5000/api/movies/${id}`, updatedMovie)
        .then(res => {
            console.log(res.data)
            this.props.history.push('/movies')
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        value={this.state.movie.title}
                        onChange={this.handleChanges}
                    />
                    <input
                        type="text"
                        name="director"
                        placeholder="Director"
                        value={this.state.movie.director}
                        onChange={this.handleChanges}
                    />
                    <input
                        type="text"
                        name="metascore"
                        placeholder="Metascore"
                        value={this.state.movie.metascore}
                        onChange={this.handleChanges}
                    />
                    <input
                        type="text"
                        name="stars"
                        placeholder="Stars"
                        value={this.state.movie.stars}
                        onChange={this.handleChanges}
                    />
                    <button>Save Changes!</button>
                </form>
            </div>
        )
    }
}

export default UpdateMovie;