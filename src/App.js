import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters';
import Counter from './components/counter';

class App extends Component {

  state = {  
    counters: [
        {id: 1, value: 0},
        {id: 2, value: 0},
        {id: 3, value: 0},
        {id: 4, value: 0}
    ],
};
handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({ counters })
}

handleReset = () => {
    const counter = this.state.counters.map(
        c => {
            c.value = 0;
            return c;
        }
    );
    this.setState({counter})
}

handleDelete = counterID =>{
const counters = this.state.counters.filter(c => c.id !== counterID);
this.setState({counters});
}
  render() { 
    return ( 
      <React.Fragment>
      <NavBar 
        totalCounter = {this.state.counters.filter(c => c.value > 0).length}
      />
      <main className = "Container">
        <Counters 
          counters = {this.state.counters}
          onIncrement = {this.handleIncrement}
          onDelete = {this.handleDelete}
          onReset = {this.handleReset}
        />
          
      </main>
      </React.Fragment>
     );
  }
}
 
export default App;
