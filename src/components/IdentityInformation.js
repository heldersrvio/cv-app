import React, { Component } from 'react';

export default class IdentityInformation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nameInputValue: props.name,
            emailInputValue: props.email,
            phoneInputValue: props.phone,
        };
    }

    updateNameInputValue(e) {
        this.setState({
            nameInputValue: e.target.value,
        });
    }

    updateEmailInputValue(e) {
        this.setState({
            emailInputValue: e.target.value,
        });
    }
    
    updatePhoneInputValue(e) {
        this.setState({
            phoneInputValue: e.target.value,
        });
    }

    render() {
        const nameField = (this.props.isEditing)
            ? <input
                type= "text"
                id= "name"
                maxLength= "45"
                value= {this.state.nameInputValue}
                onChange= {this.updateNameInputValue.bind(this)}
            ></input>
            : <p>{this.props.name}</p>;

        const emailField = (this.props.isEditing)
            ? <input
                type= "email"
                id= "email"
                minLength= "6"
                maxLength= "20"
                value= {this.state.emailInputValue}
                onChange= {this.updateEmailInputValue.bind(this)}
            ></input>
            : <p>{this.props.email}</p>;

        const phoneField = (this.props.isEditing)
            ? <input
                type= "tel"
                id= "phone"
                minLength= "9"
                maxLength= "15"
                value= {this.state.phoneInputValue}
                onChange= {this.updatePhoneInputValue.bind(this)}
            ></input>
            : <p>{this.props.phone}</p>;
        
        return (
            <div id= "identity-information">
                <label htmlFor= "name">Name: </label>
                {nameField}
                <label htmlFor= "email">Email: </label>
                {emailField}
                <label htmlFor= "phone">Phone: </label>
                {phoneField}
            </div>
        );
    }
}