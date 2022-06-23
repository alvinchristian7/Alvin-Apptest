import React, { useState, useEffect, useMemo, useCallback } from 'react'
import { StyleSheet } from 'react-native';
import { TextInput, IconButton, useTheme } from 'react-native-paper';

import { Text, View } from '../components/Themed';
import useDidUpdateEffect from '../helpers/useDidUpdateEffect';
import axios from "../customAxios"

export default function TabOneScreen({ route, navigation }: any) {
  // const { colors } = useTheme();
  const { formType, /* axiosObj, */ personName, id, ...item } = route.params;

  // const [formData, setformData] = useState(item || {})
  // const [dataChanged, setdataChanged] = useState(false)
  // const [allDoneFilled, setallDoneFilled] = useState(false)

  const onAnyChange = keyObj => value => {
    // console.log(keyObj, value)
    navigation.setParams({ ...item, [keyObj]: value })
  }
  // const onAnyChange = keyObj => value => {
  //   // console.log(keyObj, value)
  //   setformData(prevVal => ({ ...prevVal, [keyObj]: value }))
  // }

// useDidUpdateEffect(() => {
//   // console.log(formData)
//   if (!dataChanged) {
//     setdataChanged(true)
//     navigation.setOptions({
//       headerRight: () => (
//         <IconButton icon="check" color={colors.primary} size={24} onPress={() => {
//           if (!allDoneFilled)
//             setallDoneFilled(true)
//         }} />
//       )
//     })
//   }
// }, [formData])

// useEffect(() => {
//   if (allDoneFilled) {
//     console.log(axiosObj)
//     console.log(formData)
//     axios({ ...axiosObj, data: formData })
//       .then(response => {
//         console.log(response.data);
//         console.log(response.status);
//         console.log(response.statusText);
//         console.log(response.headers);
//         console.log(response.config);
//         navigation.goBack()
//         return response
//       })
//   }
// }, [allDoneFilled])

return (
  <View style={styles.container}>
    {/* <Text style={styles.title}>{`${formType} Contact`}</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
    <TextInput
      label="First Name"
      value={item.firstName}
      onChangeText={onAnyChange('firstName')}
      left={<TextInput.Icon name="alphabetical" />}
    />
    <TextInput
      label="Last Name"
      value={item.lastName}
      onChangeText={onAnyChange('lastName')}
      left={<TextInput.Icon name="alphabetical" />}
    />
    <TextInput
      label="Age"
      value={item.age}
      onChangeText={onAnyChange('age')}
      keyboardType="phone-pad"
      left={<TextInput.Icon name="numeric" />}
      maxLength={3}
    />
    <TextInput
      label="Photo (URL)"
      value={item.photo}
      onChangeText={onAnyChange('photo')}
      left={<TextInput.Icon name="web" />}
      textContentType="URL"
    />
  </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    paddingVertical: 30,
    gap: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
