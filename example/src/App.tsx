import { BlurView } from 'react-native-blur-view';
import { View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <BlurView
        style={styles.blurView}
        backgroundColor="rgba(30, 30, 30, 0.5)"
        contentContainerStyle={styles.blurContainer}
      >
        <View style={styles.children} />
      </BlurView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  blurView: {
    flex: 1,
  },
  blurContainer: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  children: {
    height: 200,
    width: 200,
    borderRadius: 12,
    backgroundColor: 'blue',
  },
});
