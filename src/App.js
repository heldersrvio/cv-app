import React, { Component } from 'react';
import IdentityInformation from './components/IdentityInformation';
import EducationalExperience from './components/EducationalExperience';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      phone: '',
      educationalExperienceItems: [],
      isEditing: true,
    };

  }

  render () {
    return (
      <div className="App">
        <IdentityInformation name= {this.state.name} email= {this.state.email} phone= {this.state.phone} isEditing= {this.state.isEditing}/>
        <EducationalExperience educationalExperienceItems= {this.state.educationalExperienceItems} isEditing = {this.state.isEditing}/>
      </div>
    );
  }
}

export default App;
