import React, {Component} from 'react';

export default class EducationalExperienceItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            schoolNameInputValue: props.schoolName,
            studyTitleInputValue: props.studyTitle,
            startDateInputValue: props.startDate,
            endDateInputValue: props.endDate,
        }
        this.updateSchoolNameInputValue = this.updateSchoolNameInputValue.bind(this);
        this.updateStudyTitleInputValue = this.updateStudyTitleInputValue.bind(this);
        this.updateStartDateInputValue = this.updateStartDateInputValue.bind(this);
        this.updateEndDateInputValue = this.updateEndDateInputValue.bind(this);
    }

    updateSchoolNameInputValue(e) {
        this.setState({
            schoolNameInputValue: e.target.value,
        });
    }

    updateStudyTitleInputValue(e) {
        this.setState({
            studyTitleInputValue: e.target.value,
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
                schoolName: this.state.schoolNameInputValue,
                studyTitle: this.state.studyTitleInputValue,
                startDate: this.state.startDateInputValue,
                endDate: this.state.endDateInputValue,
            }, this.props.index);
        }
    }

    render() {
        const schoolNameField = (this.props.isEditing)
            ? <input
                value= {this.state.schoolNameInputValue}
                id= {`school-name-${this.props.index}`}
                onChange= {this.updateSchoolNameInputValue}
            ></input>
        : <p id= {`school-name-${this.props.index}`}>{this.props.schoolName}</p>;

        const studyTitleField = (this.props.isEditing)
            ? <input
                value= {this.state.studyTitleInputValue}
                id= {`study-title-${this.props.index}`}
                onChange= {this.updateStudyTitleInputValue}
            ></input>
        : <p id= {`study-title-${this.props.index}`}>{this.props.studyTitle}</p>;

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
                className= "delete-educational-experience-item"
                onClick= {() => this.props.deleteItem(this.props.index)}>Delete
            </button>
            : null;

        return (
            <div className= "educational-experience-item" key= {this.props.index}>
                <label htmlFor= {`school-name-${this.props.index}`}>School: </label>
                {schoolNameField}
                <label htmlFor= {`study-title-${this.props.index}`}>Title of study: </label>
                {studyTitleField}
                <label htmlFor= {`start-date-${this.props.index}`}>From: </label>
                {startDateField}
                <label htmlFor= {`end-date-${this.props.index}`}>Until: </label>
                {endDateField}
                {deleteButton}
            </div>
        );
    }
}