import React, {Component} from 'react';
import './styles/ListForm.css';

class ListForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ''
        }
    }

    textWrite = event => (
        this.setState({
            text: event.target.value
        })
    );

    sendText = event => {
        console.log('Sending Value to List! ', this.state.text);
        this.setState({
            text: ''
        })
    };

    render() {
        const { text } = this.state;

        return(
            <div className='FormRoot'>
                <input 
                    value={text}
                    onChange={this.textWrite}
                />
                <button
                    onClick={this.sendText}
                >
                    ADD TO LIST
                </button>
            </div>
        );
    }
}

export default ListForm;