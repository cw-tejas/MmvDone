import { StyleSheet, Text, View } from 'react-native';
import MmvWidget from './components/MmvWidget';
import { CarsInfoContextProvider } from './context/CarsInfoContext';

export default function App() {
  return (
    <CarsInfoContextProvider>
        <View style={styles.container}>
          <MmvWidget />
      </View>
    </CarsInfoContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
