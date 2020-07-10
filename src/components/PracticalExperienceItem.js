import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { format, parse } from 'date-fns';

class PracticalExperienceItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            companyNameInputValue: props.companyName,
            positionTitleInputValue: props.positionTitle,
            mainTasksInputValue: props.mainTasks,
            startDateInputValue: format(props.startDate, 'yyyy/MM/dd'),
            endDateInputValue: format(props.endDate, 'yyyy/MM/dd'),
            startDateInvalid: false,
            endDateInvalid: false,
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
                companyName: this.state.companyNameInputValue,
                positionTitle: this.state.positionTitleInputValue,
                mainTasks: this.state.mainTasksInputValue,
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
        const companyNameField = (this.props.isEditing)
            ? <input
                value= {this.state.companyNameInputValue}
                id= {`company-name-${this.props.index}`}
                className= 'company-name'
                onChange= {this.updateCompanyNameInputValue}
            ></input>
        : <p id= {`company-name-${this.props.index}`}>{this.props.companyName}</p>;

        const positionTitleField = (this.props.isEditing)
            ? <input
                value= {this.state.positionTitleInputValue}
                id= {`position-title-${this.props.index}`}
                className= 'position-title'
                onChange= {this.updatePositionTitleInputValue}
            ></input>
        : <p id= {`position-title-${this.props.index}`}>{this.props.positionTitle}</p>;

        const mainTasksField = (this.props.isEditing)
            ? <input
                value= {this.state.mainTasksInputValue}
                id= {`main-tasks-${this.props.index}`}
                className = 'main-tasks'
                onChange= {this.updateMainTasksInputValue}
            ></input>
        : <p id= {`main-tasks-${this.props.index}`}>{this.props.mainTasks}</p>;

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
                className={startDateClasses}
                onChange= {this.updateStartDateInputValue}
            ></input>
        : <p id= {`start-date-${this.props.index}`}>{format(this.props.startDate, 'yyyy/MM/dd')}</p>;

        const endDateField = (this.props.isEditing)
            ? <input
                value= {this.state.endDateInputValue}
                id= {`end-date-${this.props.index}`}
                className= {endDateClasses}
                onChange= {this.updateEndDateInputValue}
            ></input>
        : <p id= {`end-date-${this.props.index}`}>{format(this.props.endDate, 'yyyy/MM/dd')}</p>;

        const deleteButton = (this.props.isEditing)
            ? <button
                className= "delete-practical-experience-item"
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
            <div className= "practical-experience-item" key= {this.props.index}>
                <label htmlFor= {`company-name-${this.props.index}`}>Company: </label>
                {companyNameField}
                <label htmlFor= {`position-title-${this.props.index}`}>Position: </label>
                {positionTitleField}
                <label htmlFor= {`main-tasks-${this.props.index}`}>Main tasks: </label>
                {mainTasksField}
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

PracticalExperienceItem.propTypes = {
    key: PropTypes.number,
    index: PropTypes.number,
    companyName: PropTypes.string,
    positionTitle: PropTypes.string,
    mainTaks: PropTypes.string,
    startDate: PropTypes.instanceOf(Date),
    endDate: PropTypes.instanceOf(Date),
    deleteItem: PropTypes.func,
    updateItem: PropTypes.func,
    isEditing: PropTypes.bool, 
};

export default PracticalExperienceItem;