import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { increment, decrement, incrementx } from './actions/index';
import { connect } from 'react-redux';

class App extends Component {
  input;
  render() {
    return (
      <React.Fragment>
        <div>
          <button onClick={this.props.inc}>increase</button>
          <button onClick={this.props.dec}>decrement</button>
          <span>{this.props.numprop}</span>
        </div>
        <div>
          <input type="number" ref={node => this.input = node}/>
          <button onClick={() => {this.props.incx(this.input.value)}}>custom inc</button>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  numprop: state.num
})

const mapDispatchToProps = dispatch => ({
  inc: () => dispatch(increment()),
  incx: x => dispatch(incrementx(x)),
  dec: () => dispatch(decrement())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);