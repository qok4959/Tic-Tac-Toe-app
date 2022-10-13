/* eslint-disable react/prop-types */
import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {COLOR_SECONDARY} from '../config/constants';

const Block = props => {
  return (
    <SafeAreaView
      onStartShouldSetResponder={
        !props.gameFinished
          ? props.field === 'empty'
            ? () => props.handlePress(props.index)
            : () => console.log('already clicked')
          : () => console.log('finished game')
      }
      style={{
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLOR_SECONDARY,
        width: 120,
        height: 120,
        borderWidth: 1,
        borderColor: 'grey',
        margin: 1,
      }}>
      {props.field === 'empty' ? (
        ''
      ) : (
        <Text
          style={{fontSize: 50, color: props.field === 'O' ? 'black' : 'red'}}>
          {props.field}
        </Text>
      )}
    </SafeAreaView>
  );
};

export default Block;
