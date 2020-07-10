import React, { Component } from 'react';
import PracticalExperienceItem from './PracticalExperienceItem';
import { format } from 'date-fns';

export default class PracticalExperience extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: props.practicalExperienceItems,
        };
        this.updateItem = this.updateItem.bind(this);
        this.addNewItem = this.addNewItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
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
                companyName: '',
                positionTitle: '',
                mainTasks: '',
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

    componentDidUpdate(previousProps, previousState) {
        if (previousProps.isEditing && !this.props.isEditing) {
            this.props.updateWorkInformation(
                previousState.practicalExperienceItems,
            );
        }
    }

    render() {
        const practicalExperienceItems = this.state.items
            .map(
                (item, index) => {
                    return (<PracticalExperienceItem
                        key= {index}
                        index= {index}
                        companyName = {item.companyName}
                        positionTitle= {item.positionTitle}
                        mainTasks= {item.mainTasks}
                        startDate= {item.startDate}
                        endDate= {item.endDate}
                        deleteItem= {this.deleteItem}
                        updateItem= {this.updateItem}
                        isEditing= {this.props.isEditing}/>
                    );
                }
            );
            const addItemButton = (this.props.isEditing) ? <button id= "add-practical-item-button" onClick= {this.addNewItem}>New</button> : null;
        
        return (
            <div className= "work">
                <h2>Work Experience</h2>
                {practicalExperienceItems}
                {addItemButton}
            </div>
        );
    }
}