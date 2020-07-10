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

    render() {
        const schoolNameField = (this.props.isEditing)
            ? <input
                value= {this.state.schoolNameInputValue}
                id= {`school-name-${this.props.index}`}
                onChange= {this.updateSchoolNameInputValue.bind(this)}
            ></input>
        : <p id= {`school-name-${this.props.index}`}>{this.props.schoolName}</p>;

        const studyTitleField = (this.props.isEditing)
            ? <input
                value= {this.state.studyTitleInputValue}
                id= {`study-title-${this.props.index}`}
                onChange= {this.updateStudyTitleInputValue.bind(this)}
            ></input>
        : <p id= {`study-title-${this.props.index}`}>{this.props.studyTitle}</p>;

        const startDateField = (this.props.isEditing)
            ? <input
                value= {this.state.startDateInputValue}
                id= {`start-date-${this.props.index}`}
                onChange= {this.updateStartDateInputValue.bind(this)}
            ></input>
        : <p id= {`start-date-${this.props.index}`}>{this.props.startDate}</p>;

        const endDateField = (this.props.isEditing)
            ? <input
                value= {this.state.endDateInputValue}
                id= {`end-date-${this.props.index}`}
                onChange= {this.updateEndDateInputValue.bind(this)}
            ></input>
        : <p id= {`end-date-${this.props.index}`}>{this.props.endDate}</p>;

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
                <button className= "delete-educational-experience-item" onClick= {this.props.deleteItem}>Delete</button>
            </div>
        );
    }
}