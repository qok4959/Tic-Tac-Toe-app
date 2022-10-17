import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import {
  COLOR_BACKGROUND,
  COLOR_PRIMARY,
  COLOR_SECONDARY,
} from '../config/constants.js';
import * as actions from '../model/actions.js';
import {useEffect} from 'react';
import {Table, Row, Rows} from 'react-native-table-component';
import Header from './Header.js';

const ScoreGame = () => {
  const [allData, setAllData] = React.useState();

  useEffect(() => {
    actions.retrieveData().then(x => {
      setAllData(x);
    });
  }, []);

  const data =
    allData !== undefined && allData.map(x => [x['players'], x['winner']]);
  const header = ['Players', 'Winner'];

  return (
    <SafeAreaView style={styles.sectionContainer}>
      <Header />

      <ScrollView style={{maxHeight: '90%'}}>
        {allData !== undefined && (
          <Table
            style={{
              minWidth: '90%',
              maxWidth: '90%',
              marginTop: 30,
              borderCollapse: 'collapse',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
            borderStyle={{
              borderWidth: 3,
              color: COLOR_SECONDARY,
            }}>
            <Row textStyle={styles.txtStyleHeader} data={header} />
            <Rows textStyle={styles.txtStyleRow} data={data} />
          </Table>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: COLOR_BACKGROUND,
    flex: 1,
  },
  sectionScrollView: {
    marginTop: 90,
    marginLeft: 20,
    maxHeight: '80%',
    maxWidth: '80%',
  },
  txtStyleRow: {
    color: COLOR_PRIMARY,
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  txtStyleHeader: {
    color: COLOR_SECONDARY,
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },
});

export default ScoreGame;
