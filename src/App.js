import React, { Component } from 'react';
import './App.css';

import Display from './components/Display';
import ListForm from './components/ListForm';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: ['A', 'React', 'Redux', 'Class']
        }
    }

    addToList = value => (
        this.setState(prevState => ({
            list: [...prevState.list, value]
        }))
    );

    render() {
        const { list } = this.state;

        return (
            <div className='App'>
                <Display 
                    list={list}
                />
                <ListForm 
                    addToList={this.addToList}
                />
            </div>
        );
    }
}

export default App;
