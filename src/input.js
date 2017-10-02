import React, { Component } from 'react';
import styled from 'styled-components';
export default function Input (props) {
    return (
      <Input>
        <Entry>
        <Result>{props.expression}</Result>
        </Entry>
      </Input>
    )
}
const Input = styled.div`
  width: 85%;
  height: 65px;
  margin-left: auto;
  margin-right: auto;
  border: 2px solid #b4b39d;
  border-radius: 6px;
  background-color: #c3c2ab;
  margin-top:3%;
  overflow:hidden;
`
const Entry = styled.div`
  margin-right:10px;
  font-size:35px;
`
const Result = styled.p`
  float:right;
  margin-top:0;
`