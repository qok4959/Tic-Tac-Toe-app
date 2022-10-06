/* eslint-disable react/prop-types */
import React from 'react';
import {View, Text} from 'react-native';

const Block = props => {
  return (
    <View
      onStartShouldSetResponder={() => props.handlePress(props.index)}
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'yellow',
        width: 120,
        height: 120,
        borderWidth: 1,
        borderColor: 'grey',
        margin: 1,
      }}>
      <Text>{props.index}</Text>
    </View>
  );
};

export default Block;
