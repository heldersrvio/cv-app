import React, { Component } from 'react';
import EducationalExperienceItem from './EducationalExperienceItem';
import PropTypes from 'prop-types';

class EducationalExperience extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: props.educationalExperienceItems,
        };
        this.addNewItem = this.addNewItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.updateItem = this.updateItem.bind(this);
    }

    updateItem(item, index) {
        this.setState({
            items: this.state.items.map((v, i) => {
                if (i === index) {
                    return item;
                }
                return v;
            }),
        });
    }

    addNewItem() {
        this.setState({
            items: this.state.items.concat({
                schoolName: '',
                studyTitle: '',
                startDate: new Date(),
                endDate: new Date(),
            }),
        });
    }

    deleteItem(index) {
        this.setState({
            items: this.state.items.filter((v, i) => i !== index),
        });
    }

    componentDidUpdate(previousProps, previousState) {
        if (previousProps.isEditing && !this.props.isEditing) {
            this.props.updateEducationInformation(
                previousState.educationalExperienceItems,
            );
        }
    }

    render() {
        const educationalExperienceItems = this.state.items
            .map(
                (item, index) => {
                    return (<EducationalExperienceItem
                        key= {index}
                        index= {index}
                        schoolName = {item.schoolName}
                        studyTitle= {item.studyTitle}
                        startDate= {item.startDate}
                        endDate= {item.endDate}
                        deleteItem= {this.deleteItem}
                        updateItem= {this.updateItem}
                        isEditing= {this.props.isEditing}/>
                    );
                }
            );
            const addItemButton = (this.props.isEditing) ? <button id= "add-educational-item-button" onClick= {this.addNewItem}>New</button> : null;
        
        return (
            <div className= "education">
                <h2>Education</h2>
                {educationalExperienceItems}
                {addItemButton}
            </div>
        );
    }
}

EducationalExperience.propTypes = {
    educationalExperienceItems: PropTypes.array,
    isEditing: PropTypes.bool,
    updateEducationInformation: PropTypes.func,
};

export default EducationalExperience;