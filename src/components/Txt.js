import React, {Component} from 'react';
import {Text as T, Platform} from 'react-native';

import {
  primaryColor,
  secondaryColor,
  thirdColor,
  grey,
  black,
  blackTint,
  white,
  silver,
  red,
  h005,
  h01,
  h02,
  h03,
  h05,
  h1,
  h14,
  h15,
  h17,
  h19,
  h2,
  h23,
  h25,
  h3,
  h35,
  h4,
  h45,
  h5,
  h55,
  h6,
  h7,
  h8,
  h9,
  h10,
  h12,
  h13,
  h20,
  h100,
  w100,
  w18,
  w20,
  border,
  h18,
  lightWhite,
  h30,
  h07,
  h21,
} from '../screens/Dimen';

export class Txt extends Component {
  render() {
    return (
      <T
        style={[
          {
            fontSize: Platform.OS === 'ios' ? h19 : h17,
            color: black,
          },
          this.props.st,
        ]}>
        {this.props.txt}
      </T>
    );
  }
}
