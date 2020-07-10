import React, { Component } from 'react';
import EducationalExperienceItem from './EducationalExperienceItem';
import { format } from 'date-fns';

export default class EducationalExperience extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: props.educationalExperienceItems,
        };
    }

    addNewItem() {
        this.setState({
            items: this.state.items.concat({
                schoolName: '',
                studyTitle: '',
                startDate: format(new Date(), 'yyyy/MM/dd'),
                endDate: format(new Date(), 'yyyy/MM/dd'),
            }),
        });
    }

    deleteItem(index) {
        this.setState({
            items: this.state.items.filter((v, i) => i !== index),
        });
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
                        deleteItem= {this.deleteItem.bind(this, index)}
                        isEditing= {this.props.isEditing}/>
                    );
                }
            );
        const addItemButton = (this.props.isEditing) ? <button id= "add-educational-item-button" onClick= {this.addNewItem.bind(this)}>New</button> : null;
        
        return (
            <div className= "education">
                <h2>Education</h2>
                {educationalExperienceItems}
                {addItemButton}
            </div>
        );
    }
}