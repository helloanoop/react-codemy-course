import React from 'react';
import {observer} from 'mobx-react';
import {Link} from 'react-router';
import './Contact.scss';

@observer(['contacts'])
class Contact extends React.Component {
  removeContact = (e) => {
    e.preventDefault();

    this.props.contacts.remove(this.props.id);
  }

  render() {
    return (
      <div className='pure-u-1-3 contact'>
        <h2>
          <Link to={`/contacts/${this.props.id}`}>
            {this.props.name}
          </Link>
        </h2>
        <p>{this.props.email}</p>
        <button className='pure-button button-error' onClick={this.removeContact}>Remove</button>
      </div>
    );
  }
}

export default Contact;