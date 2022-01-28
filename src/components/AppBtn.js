import React, {Component} from 'react';
import {TouchableOpacity as B} from 'react-native';

import {Txt as T} from '.';
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

export class AppBtn extends Component {
  render() {
    return (
      <B
        style={[
          {
            backgroundColor: primaryColor,
            height: h5,
            width: '80%',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: h1,
          },
          this.props.st,
        ]}
        {...this.props}>
        <T
          txt={this.props.txt}
          st={{
            color: white,
            fontSize: h2,
            fontWeight: 'bold',
          }}
        />
      </B>
    );
  }
}
