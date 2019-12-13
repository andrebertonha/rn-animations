/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, View, Animated} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

export default function App() {
  const [ballY, setBallY] = useState(new Animated.Value(0));
  const [ballX, setBallX] = useState(new Animated.Value(0));

  useEffect(() => {
    // timing, spring, decay

    Animated.loop(
      Animated.sequence([
        Animated.timing(ballY, {
          toValue: 200,
          duration: 500,
        }),

        Animated.delay(200),

        Animated.timing(ballX, {
          toValue: 200,
          duration: 500,
        }),

        Animated.delay(200),

        Animated.timing(ballY, {
          toValue: 0,
          duration: 500,
        }),

        Animated.delay(200),

        Animated.timing(ballX, {
          toValue: 0,
          duration: 500,
        }),

        Animated.delay(200)
      ]), {
        iterations: 3
      }
    ).start();
  }, [ballY, ballX]);

  return (
    <>
      <View style={styles.container}>
        <Animated.View style={[
          styles.ball,
          {
            top: ballY, left: ballX,
            opacity: ballY.interpolate({
              inputRange: [0, 300],
              outputRange: [0, 0.3],
              extrapolate: 'clamp',
            })
          }
        ]} 

        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  body: {
    backgroundColor: Colors.white,
  },
  ball: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#F00',
  },
});
