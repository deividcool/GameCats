// Mouse.js
import React, { useEffect } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import Animated, { Easing, useSharedValue, useAnimatedStyle, withTiming, runOnJS } from 'react-native-reanimated';
import * as Haptics from 'expo-haptics';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const Mouse = ({ id, speed }) => {
  const mouseX = useSharedValue(-50);
  const mouseY = useSharedValue(Math.random() * height);

  const moveMouse = () => {
    const isHorizontal = Math.random() > 0.5;
    const newX = isHorizontal ? (mouseX.value < 0 ? width : -50) : Math.random() * width;
    const newY = isHorizontal ? Math.random() * height : (mouseY.value < 0 ? height : -50);
    const duration = 3000 / speed; // Duración ajustada por la velocidad

    mouseX.value = withTiming(newX, { duration, easing: Easing.linear }, () => {
      if (newX < 0 || newX > width) {
        mouseX.value = newX < 0 ? width : -50;
      }
      runOnJS(moveMouse)();
    });

    mouseY.value = withTiming(newY, { duration, easing: Easing.linear }, () => {
      if (newY < 0 || newY > height) {
        mouseY.value = newY < 0 ? height : -50;
      }
    });
  };

  useEffect(() => {
    moveMouse();
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: mouseX.value }, { translateY: mouseY.value }],
    };
  });

  const handlePress = () => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
  };

  return (
    <Animated.View style={[styles.mouse, animatedStyle]}>
      <TouchableOpacity onPress={handlePress}>
        <Image source={require('../../assets/mouse.png')} style={styles.mouseImage} />
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = {
  mouse: {
    position: 'absolute',
    padding: 20,
    borderRadius: 50,
  },
  mouseImage: {
    width: 80,
    height: 80,
  },
};

export default Mouse;