import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { format, parse } from 'date-fns';

class EducationalExperienceItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            schoolNameInputValue: props.schoolName,
            studyTitleInputValue: props.studyTitle,
            startDateInputValue: format(props.startDate, 'yyyy/MM/dd'),
            endDateInputValue: format(props.endDate, 'yyyy/MM/dd'),
            startDateInvalid: false,
            endDateInvalid: false,
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
        const parsedStartDate = parse(e.target.value, 'yyyy/MM/dd', new Date());
        if (Number.isNaN(parsedStartDate.getTime())) {
            this.setState({
                startDateInvalid: true,
            });
        } else {
            this.setState({
                startDateInvalid: false,
            });
        }
        this.setState({
            startDateInputValue: e.target.value,
        });
    }

    updateEndDateInputValue(e) {
        const parsedEndDate = parse(e.target.value, 'yyyy/MM/dd', new Date());
        if (Number.isNaN(parsedEndDate.getTime())) {
            this.setState({
                endDateInvalid: true,
            });
        } else {
            this.setState({
                endDateInvalid: false,
            });
        }
        this.setState({
            endDateInputValue: e.target.value,
        });
    }

    componentDidUpdate(previousProps, previousState) {
        if (previousState !== this.state) {
            this.props.updateItem({
                schoolName: this.state.schoolNameInputValue,
                studyTitle: this.state.studyTitleInputValue,
                startDate: !(this.state.startDateInvalid)
                    ? parse(this.state.startDateInputValue, 'yyyy/MM/dd', new Date())
                    : this.props.startDate,
                endDate: !(this.state.endDateInvalid)
                    ? parse(this.state.endDateInputValue, 'yyyy/MM/dd', new Date())
                    : this.props.endDate,
            }, this.props.index);
        }
    }

    render() {
        const schoolNameField = (this.props.isEditing)
            ? <input
                value= {this.state.schoolNameInputValue}
                id= {`school-name-${this.props.index}`}
                className= 'school-name'
                onChange= {this.updateSchoolNameInputValue}
            ></input>
        : <p id= {`school-name-${this.props.index}`}>{this.props.schoolName}</p>;

        const studyTitleField = (this.props.isEditing)
            ? <input
                value= {this.state.studyTitleInputValue}
                id= {`study-title-${this.props.index}`}
                className= 'study-title'
                onChange= {this.updateStudyTitleInputValue}
            ></input>
        : <p id= {`study-title-${this.props.index}`}>{this.props.studyTitle}</p>;

        const startDateClasses = (this.state.startDateInvalid)
            ? 'date invalid-date'
            : 'date';
        const endDateClasses = (this.state.endDateInvalid)
            ? 'date invalid-date'
            : 'date';

        const startDateField = (this.props.isEditing)
            ? <input
                value= {this.state.startDateInputValue}
                id= {`start-date-${this.props.index}`}
                className= {startDateClasses}
                onChange= {this.updateStartDateInputValue}
            ></input>
        : <p id= {`start-date-${this.props.index}`}>{format(this.props.startDate, 'yyyy/MM/dd')}</p>;

        const endDateField = (this.props.isEditing)
            ? <input
                value= {this.state.endDateInputValue}
                id= {`end-date-${this.props.index}`}
                className = {endDateClasses}
                onChange= {this.updateEndDateInputValue}
            ></input>
        : <p id= {`end-date-${this.props.index}`}>{format(this.props.endDate, 'yyyy/MM/dd')}</p>;

        const deleteButton = (this.props.isEditing)
            ? <button
                className= "delete-educational-experience-item"
                onClick= {() => this.props.deleteItem(this.props.index)}>Delete
            </button>
            : null;

        const startDateInvalidAlert = (this.state.startDateInvalid && this.props.isEditing)
            ? <span>Invalid date</span>
            : <span></span>;
        
        const endDateInvalidAlert = (this.state.endDateInvalid && this.props.isEditing)
            ? <span>Invalid date</span>
            : <span></span>;

        return (
            <div className= "educational-experience-item" key= {this.props.index}>
                <label htmlFor= {`school-name-${this.props.index}`}>School: </label>
                {schoolNameField}
                <label htmlFor= {`study-title-${this.props.index}`}>Title of study: </label>
                {studyTitleField}
                <div className= "start-date-container">
                    <label htmlFor= {`start-date-${this.props.index}`}>From: </label>
                    {startDateField}
                    {startDateInvalidAlert}
                </div>
                <div className = "end-date-container">
                    <label htmlFor= {`end-date-${this.props.index}`}>Until: </label>
                    {endDateField}
                    {endDateInvalidAlert}
                </div>
                {deleteButton}
            </div>
        );
    }
}

EducationalExperienceItem.propTypes = {
    key: PropTypes.number,
    index: PropTypes.number,
    schoolName: PropTypes.string,
    studyTitle: PropTypes.string,
    startDate: PropTypes.instanceOf(Date),
    endDate: PropTypes.instanceOf(Date),
    deleteItem: PropTypes.func,
    updateItem: PropTypes.func,
    isEditing: PropTypes.bool,
};

export default EducationalExperienceItem;