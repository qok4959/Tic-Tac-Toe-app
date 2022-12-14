import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './Components/Home';
import ScoreGame from './Components/ScoreGame';
import PlayGame from './Components/PlayGame';
import Game from './Components/Game';
import {LogBox} from 'react-native';

const Stack = createNativeStackNavigator();

const App = () => {
  LogBox.ignoreLogs([
    'Failed prop type: Invalid prop `textStyle` of type `array` supplied to `Cell`, expected `object`',
  ]);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{title: 'Home'}} />
        <Stack.Screen
          name="scores-screen"
          component={ScoreGame}
          options={{title: 'view score'}}
        />
        <Stack.Screen
          name="play-game-screen"
          component={PlayGame}
          options={{title: 'play game'}}
        />
        <Stack.Screen
          name="game-screen"
          component={Game}
          options={{title: 'game'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
