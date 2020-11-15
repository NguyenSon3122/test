import './App.css';
import React, {Component} from "react";
import MoveDep from './components/moveDep'
import ChangePos from './components/changePos'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueA: ''
    };
  }
  moveDepSetValue = (item) => {
    console.log('move',item)
    this.setState({valueA: item});
  };
  changeSetValue = (item) => {
    console.log('pos',item)
  };

  render() {
    return (
        <div>
          <MoveDep setValue={this.moveDepSetValue}/>
          <ChangePos toValue={this.state.valueA} setValue={this.changeSetValue}/>

        </div>
    );
  }
}

export default App;
