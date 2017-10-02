import React, { Component } from 'react';
import styled from 'styled-components';

export default function Buttons(props) {
  return (
    <Buttons onClick={props.onClick}>
      <RedButton>AC</RedButton>
      <RedButton>CE</RedButton>
      <Button>&divide;</Button>
      <Button>x</Button>
      <Button>7</Button>
      <Button>8</Button>
      <Button>9</Button>
      <Button>-</Button>
      <Button>4</Button>
      <Button>5</Button>
      <Button>6</Button>
      <Button>+</Button>
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
      <ZeroButton>0</ZeroButton>
      <Button>.</Button>
      <EqualButton>=</EqualButton>
    </Buttons>
  )
}
const Buttons = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  position: absolute;
  display: inline-block;
  width: 280px;
  height: auto;
  margin-top: 15px;
  margin-left: 15px;
`
const Button = styled.button`
  color:white;
  cursor:pointer;
  border-radius: 8px;
  border: none;
  background-color: #3a3a3a;
  margin: 0 4px 10px 8px;
  height: 40px;
  width: 50px;
  box-shadow: 0px 3px 0px 0px #222121, inset -1px -3px 10px 1px #515151;
  text-decoration: none !important;
  outline: none !important;
  
  :hover,
  :active,
  :visited {
      text-decoration: none !important;
      outline: none !important;
  }
  :active {
    transform: translate(0px, 3px);
    box-shadow: none;
  }
`
const ZeroButton = Button.extend`
  width: 112px;
`
const EqualButton = Button.extend`
  position: absolute;
  margin-left: 7px;
  margin-top: -50px;
  height: 90px;
`
const RedButton = Button.extend`
  font-size: 14px;
  background-color: #a72d45;
  box-shadow: 0px 3px 0px 0px #671c2a;
`