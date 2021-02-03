import React, { Component } from 'react';
import JeopardyService from "../../jeopardyService";

class Jeopardy extends Component {
    constructor(props){
        super(props);
        this.client = new JeopardyService();
        this.state = {
            data: {},
            score: 0,
            formData: {
                answer: "",
            }
        }
    }
    getNewQuestion(){
            return this.client.getQuestion().then(result => {
                this.setState({
                    data: result.data[0]
                })
            })
            
        }

    handleChange = (event) => {
        const formData = {...this.state.formData}
        formData[event.target.name] = event.target.value
        this.setState({
            formData
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        if(this.state.data.answer === this.state.formData.answer){
            console.log('Match')
            this.setState((state,props)=>({
                score: state.score + state.data.value,
                formData: {
                    answer: ""
                }
            }))
        } else {
            console.log('No Match')

            this.setState((state,props)=>({
                score: state.score - state.data.value,
                formData: {
                    answer: ""
                }
            }))
        }
        this.getNewQuestion();
        formData
    }
    // I'd rather be playing Call of Duty right now.
    componentDidMount() {
        this.getNewQuestion();
    }

    render() {
        if(!this.state.data.category) {
            return (
            <div>Loading</div>
            );
        }
        return (
            <div>
                <div>Category: <strong>{this.state.data.category.title}</strong></div>
                <p><label>Question: {this.state.data.question}.</label></p>
                
            
            <div><label hidden={false}>Answer: {this.state.data.answer}</label></div>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="answer">Answer</label>
                    <input 
                    placeholder="What is ..." 
                    type="text" 
                    name="answer"
                    onChange={this.handleChange}
                    value={this.state.value} 
                    /> <br></br>
                    <span>Score: {this.state.score}</span>
                </div>

                <button>Submit Answer</button>
            </form>
            </div>
        );
    }
}


export default Jeopardy;