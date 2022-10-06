import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Block from './Block';
// console.log(blocks);

const Game = () => {
  const [blocks, setBlocks] = React.useState(
    new Array(9).fill().map((e, i) => {
      return {index: i, field: 'empty'};
    }),
  );

  const handlePress = i => {
    console.log('clicked', i);
  };

  const generatedBlocks = blocks.map(i => (
    <Block
      handlePress={handlePress}
      key={i.index}
      index={i.index}
      field={i.field}
    />
  ));

  return (
    <View style={styles.container}>
      <View style={styles.wrapContainer}>{generatedBlocks}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Game;
