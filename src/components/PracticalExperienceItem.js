import React, {Component} from 'react';

export default class PracticalExperienceItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            companyNameInputValue: props.companyName,
            positionTitleInputValue: props.positionTitle,
            mainTasksInputValue: props.mainTasks,
            startDateInputValue: props.startDate,
            endDateInputValue: props.endDate,
        }
        this.updateCompanyNameInputValue = this.updateCompanyNameInputValue.bind(this);
        this.updatePositionTitleInputValue = this.updatePositionTitleInputValue.bind(this);
        this.updateMainTasksInputValue = this.updateMainTasksInputValue.bind(this);
        this.updateStartDateInputValue = this.updateStartDateInputValue.bind(this);
        this.updateEndDateInputValue = this.updateEndDateInputValue.bind(this);
    }

    updateCompanyNameInputValue(e) {
        this.setState({
            companyNameInputValue: e.target.value,
        });
    }

    updatePositionTitleInputValue(e) {
        this.setState({
            positionTitleInputValue: e.target.value,
        });
    }

    updateMainTasksInputValue(e) {
        this.setState({
            mainTasksInputValue: e.target.value,
        });
    }

    updateStartDateInputValue(e) {
        this.setState({
            startDateInputValue: e.target.value,
        });
    }

    updateEndDateInputValue(e) {
        this.setState({
            endDateInputValue: e.target.value,
        });
    }

    componentDidUpdate(previousProps, previousState) {
        if (previousState !== this.state) {
            this.props.updateItem({
                companyName: this.state.companyNameInputValue,
                positionTitle: this.state.positionTitleInputValue,
                mainTasks: this.state.mainTasksInputValue,
                startDate: this.state.startDateInputValue,
                endDate: this.state.endDateInputValue,
            }, this.props.index);
        }
    }

    render() {
        const companyNameField = (this.props.isEditing)
            ? <input
                value= {this.state.companyNameInputValue}
                id= {`company-name-${this.props.index}`}
                onChange= {this.updateCompanyNameInputValue}
            ></input>
        : <p id= {`company-name-${this.props.index}`}>{this.props.companyName}</p>;

        const positionTitleField = (this.props.isEditing)
            ? <input
                value= {this.state.positionTitleInputValue}
                id= {`position-title-${this.props.index}`}
                onChange= {this.updatePositionTitleInputValue}
            ></input>
        : <p id= {`position-title-${this.props.index}`}>{this.props.positionTitle}</p>;

        const mainTasksField = (this.props.isEditing)
            ? <input
                value= {this.state.mainTasksInputValue}
                id= {`main-tasks-${this.props.index}`}
                onChange= {this.updateMainTasksInputValue}
            ></input>
        : <p id= {`main-tasks-${this.props.index}`}>{this.props.mainTasks}</p>;

        const startDateField = (this.props.isEditing)
            ? <input
                value= {this.state.startDateInputValue}
                id= {`start-date-${this.props.index}`}
                onChange= {this.updateStartDateInputValue}
            ></input>
        : <p id= {`start-date-${this.props.index}`}>{this.props.startDate}</p>;

        const endDateField = (this.props.isEditing)
            ? <input
                value= {this.state.endDateInputValue}
                id= {`end-date-${this.props.index}`}
                onChange= {this.updateEndDateInputValue}
            ></input>
        : <p id= {`end-date-${this.props.index}`}>{this.props.endDate}</p>;

        const deleteButton = (this.props.isEditing)
            ? <button
                className= "delete-practical-experience-item"
                onClick= {() => this.props.deleteItem(this.props.index)}>Delete
            </button>
            : null;

        return (
            <div className= "practical-experience-item" key= {this.props.index}>
                <label htmlFor= {`company-name-${this.props.index}`}>Company: </label>
                {companyNameField}
                <label htmlFor= {`position-title-${this.props.index}`}>Position: </label>
                {positionTitleField}
                <label htmlFor= {`main-tasks-${this.props.index}`}>Main tasks: </label>
                {mainTasksField}
                <label htmlFor= {`start-date-${this.props.index}`}>From: </label>
                {startDateField}
                <label htmlFor= {`end-date-${this.props.index}`}>Until: </label>
                {endDateField}
                {deleteButton}
            </div>
        );
    }
}