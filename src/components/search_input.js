import React, { Component } from 'react';

class SearchInput extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            term: ''
        };
    }
    render( ) {
        return (
            <div class="input-group search-input">
                <input
                    onChange={event => this.onInputChangeTerm( event.target.value )}
                    type="text"
                    className="form-control"
                    placeholder="Search for..."
                    value={this.state.term}/>
                <span class="input-group-btn">
                    <button
                        onClick={event => this.state.term
                        ? this.onInputChangeTerm( event.target.value )
                        : alert( 'FILL INPUT..' )}
                        id="search-button"
                        className="btn btn-default"
                        type="button">
                        Go!
                    </button>
                </span>
            </div>

        );
    }

    onInputChangeTerm( term ) {
        this.setState({ term });
        this.props.onInputChange( term );
    }
}

export default SearchInput;
