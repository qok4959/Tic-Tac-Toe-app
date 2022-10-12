/* eslint-disable react/prop-types */
import React from 'react';
import {View, Text} from 'react-native';

const Block = props => {
  return (
    <View
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
        backgroundColor: '#fffdd0',
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
    </View>
  );
};

export default Block;
