import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>:D</Text>
      </View>
      <Text style={styles.myText}>Hello World</Text>
      <Button title="Clique aqui"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  myText: {
    margin: 16,
    borderWidth: 2,
    borderColor: 'red',
    padding: 10}
});
