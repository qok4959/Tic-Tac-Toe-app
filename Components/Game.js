/* eslint-disable react/prop-types */
import React, {useEffect} from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';
import {addData} from '../model/actions';
import Block from './Block';

const Game = ({route}) => {
  const [blocks, setBlocks] = React.useState(
    new Array(9).fill().map((e, i) => {
      return {index: i, field: 'empty'};
    }),
  );

  console.log(route.params);

  const [turnO, setTurnO] = React.useState(true);
  const [gameFinished, setGameFinished] = React.useState(false);
  const [winner, setWinner] = React.useState('none');
  const players = [route.params.namePlayer1, route.params.namePlayer2];

  const handlePress = i => {
    setBlocks(
      blocks.map(x => {
        if (x.index === i && x.field === 'empty') {
          x.field = turnO ? 'O' : 'X';
          console.log('if', x);
        }
        return x;
      }),
    );
  };

  const checkAvailableMoves = () => {
    let anyMove = false;
    blocks.map(x => {
      if (x.field === 'empty') anyMove = true;
    });
    return anyMove;
  };

  async function checkWinner() {
    let t = 'O';
    let finished = false;
    // 012
    for (let i = 0; i < 2; i++) {
      if (i == 1) t = 'X';
      if (blocks[0].field == t && blocks[1].field == t && blocks[2].field == t)
        finished = true;
      // 345
      else if (
        blocks[3].field == t &&
        blocks[4].field == t &&
        blocks[5].field == t
      )
        finished = true;
      // 678
      else if (
        blocks[6].field == t &&
        blocks[7].field == t &&
        blocks[8].field == t
      )
        finished = true;
      // 036
      else if (
        blocks[0].field == t &&
        blocks[3].field == t &&
        blocks[6].field == t
      )
        finished = true;
      // 147
      else if (
        blocks[1].field == t &&
        blocks[4].field == t &&
        blocks[7].field == t
      )
        finished = true;
      // 258
      else if (
        blocks[2].field == t &&
        blocks[5].field == t &&
        blocks[8].field == t
      )
        finished = true;
      // 048
      else if (
        blocks[0].field == t &&
        blocks[4].field == t &&
        blocks[8].field == t
      )
        finished = true;
      // 246
      else if (
        blocks[2].field == t &&
        blocks[4].field == t &&
        blocks[6].field == t
      )
        finished = true;
    }

    if (!checkAvailableMoves()) {
      setGameFinished(true);
      if (winner != 'X' && winner != 'O') setWinner('nobody');
    }

    if (finished) {
      setWinner(turnO ? 'X' : 'O');
      setGameFinished(true);
    }
  }

  const resetTheGame = () => {
    setBlocks(
      blocks.map(x => {
        x.field = 'empty';
        return x;
      }),
    );
    setGameFinished(false);
    setTurnO(true);
    setWinner('none');
  };

  useEffect(() => {
    checkWinner();
    if (!gameFinished) {
      setTurnO(!turnO);
    }
  }, [blocks]);

  useEffect(() => {
    if (gameFinished) {
      addData(
        winner === 'O' || winner === 'X'
          ? winner === 'O'
            ? 'X'
            : 'O'
          : 'draw',
        players,
      );
    }
  }, [winner]);

  const generatedBlocks = blocks.map(i => (
    <Block
      gameFinished={gameFinished}
      handlePress={handlePress}
      key={i.index}
      index={i.index}
      field={i.field}
    />
  ));

  const ButtonReset = props => {
    return (
      <Pressable onPress={() => props.reseting()}>
        <View
          style={{
            marginTop: 50,
            backgroundColor: 'red',
            width: 200,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{fontWeight: 'bold', color: '#ffffff', fontSize: 20}}>
            reset the game
          </Text>
        </View>
      </Pressable>
    );
  };

  {
    console.log('winner', winner);
  }
  return (
    <>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          maxWidth: '100%',
          minWidth: '100%',
          backgroundColor: 'yellow',
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'grey',
          }}>{`X - ${players[0]} | O - ${players[1]}`}</Text>
      </View>

      <View style={styles.container}>
        {winner !== 'none' ? (
          <Text style={{color: 'white', fontSize: 30, marginBottom: 50}}>
            {winner === 'nobody'
              ? 'end of moves!'
              : winner === 'O'
              ? 'Player ' + 'X has just won!'
              : 'Player ' + 'O has just won!'}
          </Text>
        ) : (
          <Text style={{color: 'white', fontSize: 30, marginBottom: 50}}>
            Next turn: {turnO ? 'O' : 'X'}
          </Text>
        )}

        <View style={styles.wrapContainer}>{generatedBlocks}</View>
        {gameFinished ? (
          <ButtonReset reseting={resetTheGame} />
        ) : (
          <View style={{width: 200, height: 40, marginTop: 50}}></View>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
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
