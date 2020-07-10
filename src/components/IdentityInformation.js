import React, { Component } from 'react';
import PropTypes from 'prop-types';

class IdentityInformation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nameInputValue: props.name,
            emailInputValue: props.email,
            phoneInputValue: props.phone,
        };
        this.updateNameInputValue = this.updateNameInputValue.bind(this);
        this.updateEmailInputValue = this.updateEmailInputValue.bind(this);
        this.updatePhoneInputValue = this.updatePhoneInputValue.bind(this);
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

    componentDidUpdate(previousProps, previousState) {
        if (previousProps.isEditing && !this.props.isEditing) {
            this.props.updateIdentityInformation(
                previousState.nameInputValue,
                previousState.emailInputValue,
                previousState.phoneInputValue,
            );
        }
    }

    render() {

        const nameField = (this.props.isEditing)
            ? <input
                type= "text"
                id= "name"
                maxLength= "45"
                value= {this.state.nameInputValue}
                onChange= {this.updateNameInputValue}
            ></input>
            : <p>{this.props.name}</p>;

        const emailField = (this.props.isEditing)
            ? <input
                type= "email"
                id= "email"
                minLength= "6"
                maxLength= "20"
                value= {this.state.emailInputValue}
                onChange= {this.updateEmailInputValue}
            ></input>
            : <p>{this.props.email}</p>;

        const phoneField = (this.props.isEditing)
            ? <input
                type= "tel"
                id= "phone"
                minLength= "9"
                maxLength= "15"
                value= {this.state.phoneInputValue}
                onChange= {this.updatePhoneInputValue}
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

IdentityInformation.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    isEditing: PropTypes.bool,
    updateIdentityInformation: PropTypes.func,
};

export default IdentityInformation;