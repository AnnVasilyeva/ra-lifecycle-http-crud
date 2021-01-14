import React, {Component} from 'react';
import './NoteAddForm.css';

export default class NoteAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '',
        }
        this.addNote = props.addNote;
    }

    onContentChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    onSubmitForm = (e) => {
        e.preventDefault();
        if(this.state.content !== '') {
            this.addNote(this.state);
            this.setState({content: ''});
        }

    }

    render () {
        return(
            <form onSubmit={this.onSubmitForm} className='noteAddForm'>
                <label htmlFor='note-content'>New Note</label>
                <textarea name='text' onChange={this.onContentChange} value={this.state.content}/>
                <button type='submit'></button>
            </form>
        )
    }

}