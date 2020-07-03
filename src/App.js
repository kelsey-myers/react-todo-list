import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import {faMinusCircle} from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemList: [],
    }
  }
  changeHandler = event => {
    this.setState({
      item: event.target.value
    })
  }
  submitHandler = event => {
    event.preventDefault()
    let newList = [...this.state.itemList, this.state.item]
    this.setState ({
      itemList: newList,
    })
  }

  removeHandler(i) {
    let newList = [...this.state.itemList]
    newList.splice(i, 1);
    this.setState({
      newList: newList,
    })
  } 

  render() { //Main
  return (
    <div className="App">
      <Container fluid>
        <h1> To-Do List </h1>
        <hr/><br/>
         <Form changeHandler={this.changeHandler}
               submitHandler={this.submitHandler}/>
         <List itemList={this.state.itemList}/>
      </Container>
    </div>
  );
};
};

//Form component
const Form = props => {
  return(
      <div>
          <form onSubmit={props.submitHandler}>
              <input required
              type="text" className="addItem" name="item" placeholder="Add an item!" 
              onChange={props.changeHandler} value={props.item}
              />
              <button className="button" type="submit"><FontAwesomeIcon icon={faPlusCircle} className="add" size="2x"/></button>
          </form>
      </div>
  )
}

//List component
const List = (props) => ( //functional component
    props.itemList.length > 0 ? props.itemList.map((item, i) => ( //if list isn't empty, display w checkbox
        <div key={i}>
            <input type="checkbox"/>
            <p className="item"> {item} 
              <button 
              className="removeButton"><FontAwesomeIcon className="remove" icon={faMinusCircle} size="xs"/></button></p>
              <hr className="itemSplit"/>
        </div>
    )) : //else
    <h3>List is currently empty! </h3> //display this instead
);

export default App;
