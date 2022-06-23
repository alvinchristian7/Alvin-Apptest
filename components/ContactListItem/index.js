import * as React from 'react';
import { List, Avatar, IconButton, useTheme } from 'react-native-paper';
import { SectionList, View, StyleSheet } from "react-native";
import axios from "../../customAxios"

const MyComponent = (props) => {
  const { colors } = useTheme();
  
  return (
    <SectionList
      sections={props.sections}
      keyExtractor={(item, index) => item.id}
      renderItem={({ item }) => <List.Item
        title={item.personName}
        description={'Age : ' + item.age}
        left={() => <Avatar.Image size={36} style={{ alignSelf: 'center', backgroundColor: colors.tertiary }} source={item.photo} />}
        right={() => (<View style={styles.row}>
          <IconButton icon="square-edit-outline" color={colors.primary} size={24} style={styles.center} onPress={() => props.onEditClicked(item)} />
          <IconButton icon="delete" color="red" size={24} style={styles.center} onPress={() => axios({
            method: 'DELETE',
            url: '/' + item.id,
          }).then(res => {
            props.getAllData()
            return res
          })} />
        </View>)}
      />}
      renderSectionHeader={({ section: { title } }) => (
        <List.Subheader>{title}</List.Subheader>
      )}
    />
  );
}

const styles = StyleSheet.create({
  center: {
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row'
  },
  greyBg: {
    backgroundColor: 'grey',
    alignSelf: 'center',
  }
});

export default MyComponent;