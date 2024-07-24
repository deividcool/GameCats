import React from 'react';
import { View, StyleSheet } from 'react-native';
import Mouse from '../componentes/Mouse';

const MouseGame = () => {
  const numberOfMice = 5; // Número de ratones
  const speeds = [1, 1.5, 2, 2.5, 3]; // Diferentes velocidades para cada ratón

  return (
    <View style={styles.container}>
      {Array.from({ length: numberOfMice }).map((_, index) => (
        <Mouse key={index} id={index + 1} speed={speeds[index]} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
});

export default MouseGame;