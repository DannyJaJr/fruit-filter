
import React, { Component } from 'react';

class List extends Component {
    render(){ 
        ///fruititems iterate through the list of fruit that are passed down as props and display
        const fruitItems = this.props.fruits.map((f, idx) => {
            return <li key={idx}>{f}</li>
        })
        return (
            <ul>
                {fruitItems}
            </ul>
        )
    }
}

export default List;