import React, {Component} from 'react';
import {View as V, Text as T} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';

export class SignUp extends Component {
  render() {
    return (
      <V
        style={{
          height: '100%',
          width: '100%',
          backgroundColor: '#faf',
          // alignItems: 'center',
        }}>
        <V
          style={{
            height: '30%',
            // width: '100%',
            backgroundColor: '#aaf',
            alignItems: 'center',
            // alignItems: 'flex-end',
            // justifyContent: 'center',
            // justifyContent: 'flex-end',
            // margin: 20,
            // padding: 20,
            // paddingLeft: 20,
            // paddingTop: 20,
            justifyContent: 'space-between',
            // justifyContent: 'space-evenly',
            // justifyContent: 'space-around',
            // flexDirection: 'row-reverse',
            flexDirection: 'row',
          }}>
          <V
            style={{
              height: '10%',
              width: '10%',
              backgroundColor: '#fa2',
              // marginLeft: 20,
              // marginLeft: -20,
              // marginRight: 20,
              // marginLeft: 20,
              // marginLeft: 20,
            }}></V>
          <V
            style={{
              height: '10%',
              width: '10%',
              backgroundColor: '#a3a',
            }}></V>
        </V>

        <V
          style={{
            height: '20%',
            // backgroundColor: 'rgba(0,0,0,0.03)',
            backgroundColor: '#a3a4',
          }}>
          <T
            style={{
              // fontSize: 14,
              fontSize: h('3'),
              fontWeight: 'bold',
              fontStyle: 'italic',
              // textDecorationLine: 'line-through',
              // textDecorationLine: 'underline',
              // textDecorationLine: 'underline line-through',
              color: '#afa',
            }}>
            Sign Up
          </T>
        </V>
      </V>
    );
  }
}
