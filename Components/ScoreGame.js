import React from 'react';
import {SafeAreaView, Text, Pressable, StyleSheet, View} from 'react-native';
import {COLOR_BACKGROUND} from '../config/constants.js';
import * as actions from '../model/actions.js';
import {useEffect} from 'react';

const ScoreGame = () => {
  const [allData, setAllData] = React.useState();
  let data = [];

  useEffect(() => {
    console.log('useEffect');
    data = actions.retrieveData().then(x => {
      // console.log('typeof', typeof Object.values(x));
      // console.log(x);
      // console.log(x);
      setAllData(x);
    });
  }, []);

  // const arr = [];
  // console.log('ScoreGame', allData[0]['players']);
  // allData.map(x => {
  //   arr.push(x['players']);
  // });

  // console.log('ALLDATA', allData);
  // console.log('arr=', arr);

  // let DataToRender = <></>;
  useEffect(() => {
    // DataToRender = arr.map(x => (
    //   <View key={x}>
    //     <Text>{x}</Text>
    //   </View>
    // ));
    // console.log('TESTSTSTST', allData[0]);
  }, [allData]);

  // console.log(allData.length);

  // console.log('dataLog', data);
  return (
    <SafeAreaView style={styles.sectionContainer}>
      {/* <Pressable onPress={() => actions.retrieveData()}>
        <SafeAreaView style={{backgroundColor: 'red'}}>
          <Text>retrieve retrieve Data</Text>
        </SafeAreaView>
      </Pressable>
      <Pressable onPress={() => actions.addData()}>
        <SafeAreaView style={{backgroundColor: 'red'}}>
          <Text>test add Data</Text>
        </SafeAreaView>
      </Pressable> */}
      {/* {allData !== undefined && <DataToRender />} */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: COLOR_BACKGROUND,
    flex: 1,
  },
});

export default ScoreGame;
