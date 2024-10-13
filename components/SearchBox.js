import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';

const SearchBox = ({searchText, setSearchText}) => {
    const handleSearchTextChange = (inputText) => {
        setSearchText(inputText)
    }
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <AntDesign name="search1" size={24} color="gray" />  
      </View>
      <TextInput style={styles.input} value={searchText} placeholder="Search" onChangeText={handleSearchTextChange} />
    </View>
  )
}

export default SearchBox

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        marginHorizontal: 'auto',
        borderWidth: 1,
        borderColor: '#f0f0f0',
        borderRadius: 2,
        padding: 10,
        width: '93%',
    },
    icon: {
        width: 30,
    },
    input: {
        flex: 1,
        marginLeft: 10
    }
})