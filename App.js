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

  useEffect(() => {
    Animated.timing(ballY, {
      toValue: 500,
      duration: 1000,
    }).start();
  }, [ballY]);

  return (
    <>
      <View style={styles.container}>
        <Animated.View style={[styles.ball, {top: ballY}]} />
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
