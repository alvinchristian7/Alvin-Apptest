import React, { useState, useEffect, useMemo, useCallback } from 'react'
import { StyleSheet } from 'react-native';
import { Searchbar, ActivityIndicator, useTheme } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux'

import { Text, View } from '../components/Themed';
import ContactListItem from '../components/ContactListItem'
import CustomFAB from '../components/CustomFAB'
import { getAllContacts } from '../store/contactsSlice'
import groupByFirstChar from "../helpers/groupByFirstChar"

export default function TabOneScreen({ navigation, route }) {
  const refreshData = route.params?.refreshData
  const { colors } = useTheme();
  const loading = useSelector((state) => state.contactList.loading)
  const allContacts = useSelector((state) => state.contactList.list)
  const sectionedContacts = useSelector((state) => state.contactList.sectionedList)
  const dispatch = useDispatch()

  const getAllData = () => dispatch(getAllContacts())

  const [searchQuery, setSearchQuery] = useState('');
  const searchResults = useMemo(() => searchQuery && groupByFirstChar(allContacts.filter((obj: any) => {
    const regexSearch = new RegExp(searchQuery, 'gi')
    const foundMatch = regexSearch.test(obj.personName)
    return foundMatch
  })).sectionedList, [searchQuery])

  const onChangeSearch = useCallback(query => setSearchQuery(query), []);

  const addContact = () => navigation.navigate('FormContact', { formType: 'Create', });
  const onEditClicked = (item: any) => navigation.navigate('FormContact', { ...item, formType: 'Edit', });

  useEffect(() => {
    getAllData()
  }, [])

  // useEffect(() => {
  //   if (refreshData)
  //     getAllData()
  // }, [refreshData])

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      {loading === 'pending'
        ? (<View style={styles.allCenter}>
          <ActivityIndicator animating={true} color={colors.primary} />
        </View>)
        : <ContactListItem getAllData={getAllData} sections={searchResults || sectionedContacts} onEditClicked={onEditClicked} />}
      <CustomFAB onPress={addContact} />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    // width: '100%',
  },
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 70,
  },
  allCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
