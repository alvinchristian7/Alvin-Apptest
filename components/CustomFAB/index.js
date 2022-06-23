import * as React from 'react';
import { StyleSheet } from 'react-native';
import { FAB, useTheme } from 'react-native-paper';

const MyComponent = (props) => {
  const { colors } = useTheme();

  return (
    <FAB
      icon="plus"
      color='white'
      style={styles.fab}
      onPress={() => console.log('Pressed')}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: 'green'
  },
})

export default MyComponent;