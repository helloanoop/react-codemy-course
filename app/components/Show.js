import React from 'react';
import data from './data';

class Show extends React.Component {
  componentWillMount() {
    console.log(this.props.params);
    this.setState({
      contact: data.filter(c => c.id === Number(this.props.params.contactId))[0]
    });
  }
    
  render() {
    return (
      <div id='Show'>
        <h1>{this.state.contact.name}</h1>
      </div>
    );
  }
}

export default Show;
