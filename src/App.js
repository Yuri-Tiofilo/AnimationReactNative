import React from 'react';
import { SafeAreaView } from 'react-native';
import animation from './animation.json';
import Lottie from 'lottie-react-native';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Lottie resizeMode="contain" autoSize source={animation} autoPlay loop/>
    </SafeAreaView>
  );
}
