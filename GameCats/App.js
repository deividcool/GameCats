import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, AppRegistry} from 'react-native';
import MauseGame from './src/screens/MauseGame';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <MauseGame />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
