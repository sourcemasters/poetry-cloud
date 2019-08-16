import React, { Component } from 'react';
import './App.css';

class NewPoemForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'title': '',
            'author': '',
            // 'year': '', // YEAR functionality pushed to backlog for now
            'genre': '',
            'language': '',
            'poem_text': ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault(); // prevents the html form from reloading the page        
        const inputs = event.target.getElementsByTagName('input');      
        const textInputs = event.target.getElementsByTagName('textarea');      
        this.setState({
            title: inputs.title.value,
            author: inputs.author.value,
            genre: inputs.genre.value,
            language: inputs.language.value,
            poem_text: textInputs.poem_text
        });
        alert(JSON.stringify(this.state));
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>
                        Title:&nbsp;
                        <input type='text' name='title' value={this.state.value} onChange={this.handleChange}/>
                    </label>
                </div>
                <div>&nbsp;</div>
                <div>
                    <label>
                        Primary Author:&nbsp;
                        <input type='text' name='author' value={this.state.value} onChange={this.handleChange}/>
                    </label>
                </div>
                <div>&nbsp;</div>
                {/* <div>
                    <label>
                        Year:&nbsp;
                        <input type='text' name='year' value={this.state.value} onChange={this.handleChange}/>
                    </label>
                </div>
                <div>&nbsp;</div>
                <div>
                    <label>
                        AD/BC:&nbsp;
                        <input type='text' name='adbc' value={this.state.value} onChange={this.handleChange}/>
                    </label>
                </div>
                <div>&nbsp;</div> */}
                <div>
                    <label>
                        Genre:&nbsp;
                        <input type='text' name='genre' value={this.state.value} onChange={this.handleChange}/>
                    </label>
                </div>
                <div>&nbsp;</div>
                <div><div>
                    <label>
                        Original Language:&nbsp;
                        <input type='text' name='language' value={this.state.value} onChange={this.handleChange}/>
                    </label>
                </div>
                <div>&nbsp;</div>
                    <label>
                        Poem:&nbsp;
                        <textarea value={this.state.value} name='poem_text' onChange={this.handleChange} />
                    </label>
                </div>
                <input type='submit' value='Submit'/>
            </form>
        );
    }
}

export default NewPoemForm;