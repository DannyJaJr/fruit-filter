import React, { Component } from 'react';
import List from './List';
import Input from './Input';




class FruitContainer extends Component {
    state = {
        // initialize the fruit list to the full list passed in props
        fruitsToDisplay: this.props.fruits,
        // intialize the filter value to an empty string
        fruitValue: ''
    }

    handleFilterChange = (e) => {
        e.preventDefault()
        let value = e.target.value;
        // remove fruits that don't contain the filter value
        const filteredFruitList = this.props.fruits.filter(fruit => {
            //return fruit.toLowerCase().includes(filterValue.toLowerCase())
            // check to see if the filterValue is included within the fruit
            if (fruit.includes(value.toLowerCase())) {// app is included in apple (true)
                return true;

            }
            
        })
        this.setState({
            fruitsToDisplay: filteredFruitList,
            fruitValue: value
        })
    }




    render() {
        return (
            <div>
                <Input value={this.state.fruitValue} onChange={this.handleFilterChange} />
                <List fruits={this.state.fruitsToDisplay} />
            </div>
        )
    }
}

export default FruitContainer;