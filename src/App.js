import React, { Component } from 'react';
import IdentityInformation from './components/IdentityInformation';
import EducationalExperience from './components/EducationalExperience';
import PracticalExperience from './components/PracticalExperience';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      phone: '',
      educationalExperienceItems: [],
      practicalExperienceItems: [],
      isEditing: true,
    };

    this.updateCVInformation = this.updateCVInformation.bind(this);
    this.updateIdentityInformation = this.updateIdentityInformation.bind(this);
    this.updateEducationInformation = this.updateEducationInformation.bind(this);
    this.updateWorkInformation = this.updateWorkInformation.bind(this);
    this.editCV = this.editCV.bind(this);
  }

  updateCVInformation() {
    this.setState({
      isEditing: false,
    });
  }

  updateIdentityInformation(name, email, phone) {
    this.setState({
      name: name,
      email: email,
      phone: phone,
    });
  }

  updateEducationInformation(educationalExperienceItems) {
    this.setState({
      educationalExperienceItems: educationalExperienceItems,
    });
  }

  updateWorkInformation(practicalExperienceItems) {
    this.setState({
      practicalExperienceItems: practicalExperienceItems,
    });
  }

  editCV() {
    this.setState({
      isEditing: true,
    });
  }

  render () {
    const button = (this.state.isEditing)
      ? <button id= "submit-CV-button" type= "submit" onClick= {this.updateCVInformation}>Submit</button>
      : <button id= "edit-CV-button" onClick = {this.editCV}>Edit</button>;

    return (
      <div className="App">
        <form onSubmit= {(e) => e.preventDefault()}>
          <IdentityInformation name= {this.state.name} email= {this.state.email} phone= {this.state.phone} isEditing= {this.state.isEditing} updateIdentityInformation= {this.updateIdentityInformation}/>
          <EducationalExperience educationalExperienceItems= {this.state.educationalExperienceItems} isEditing = {this.state.isEditing} updateEducationInformation = {this.updateEducationInformation}/>
          <PracticalExperience practicalExperienceItems= {this.state.practicalExperienceItems} isEditing = {this.state.isEditing} updateWorkInformation = {this.updateWorkInformation}/>
          {button}
        </form>
      </div>
    );
  }
}

export default App;
