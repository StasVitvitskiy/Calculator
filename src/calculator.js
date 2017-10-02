import React, { Component } from 'react';
import styled from 'styled-components';
import Input from './input';
import Buttons from './buttons';

const initialExpression = '0';
const plus = '+';
const minus = '-';
const multiply = 'x';
const divide = '÷';
export default class Calculator extends Component {
  state = {
    expression:initialExpression,
    evaluated:false
  }
  isNumber = (str) => {
    return /\d/.test(str);
  }
  concatExpression = (btnContent) => {
    let expression = this.state.expression
    const evaluated = this.state.evaluated
    const lastSymbol = expression.slice(-1)
    if(evaluated) {
      expression = initialExpression
    }
    switch(btnContent) {
      case minus:
        if(expression == initialExpression) {
          return minus
        }
      case plus:
      case divide:
      case multiply:
      case minus:
        if(this.isNumber(lastSymbol) == false) {
          return expression
          .replace(new RegExp('\\'+lastSymbol+'$'), 
              btnContent
          );
        }
      default:
        return (expression + btnContent).replace(/^0(\d+)/, '$1');
    }
  }
  evaluateExpression = () => {
    const expression = this.state.expression
    if(this.couldEvaluate() == false) {
      return expression
    }
    return String(
      eval(
        this.state.expression
        .replace(divide,'/').replace(multiply,'*')
      )
    )
  }
  couldEvaluate = () => {
    const expression = this.state.expression
    const lastSymbol = expression.slice(-1)
    return this.isNumber(lastSymbol)
  }
  CE = () => {
    const expression = this.state.expression;
    const result = expression.slice(0,-1);
    if(result.length == 0) {
      return initialExpression
    } else {
      return result
    }
  }
  onClick = (e) => {
    if(e.target.tagName === 'BUTTON') {
      const content = e.target.innerHTML;
      switch(content) {
        case '=': 
          this.setState({
            expression: this.evaluateExpression(),
            evaluated:this.couldEvaluate()
            
          })
          break; 
        case 'AC':
          this.setState({
            expression: initialExpression,
            evaluated: false
          })
          break;
        case 'CE':
          this.setState({
            expression: this.CE(),
            evaluated: false
          })
          break;
        default:
          this.setState({
            expression: this.concatExpression(content),
            evaluated: false
          })
      }
    }
  }
  render() {
    return (
      <Frame>
        <Text>JAVASCRIPT CALCULATOR</Text>
        <Input expression={this.state.expression}/>
        <Buttons
        onClick={this.onClick}
        />
      </Frame>
    );
  }
}
const Text = styled.h5`
  text-align:center;
  font-weight:100;
  font-size:large;
  margin: 6%;
`
const Frame = styled.div`
  height: 410px;
  width: 280px;
  margin-top: 5%;
  margin-left: auto;
  margin-right: auto;
  background-color: #dfd8d0;
  border: 2px solid #908b85;
  border-radius: 20px;
  box-shadow: 7px 10px 34px 1px rgba(0, 0, 0, 0.68), inset -1px -6px 12px 0.1px #89847e;
`