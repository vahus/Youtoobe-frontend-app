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
            <div className="search-input">
                <input onChange={event => this.setState({ term: event.target.value })}/>
            </div>
        );
    }
}

export default SearchInput;
