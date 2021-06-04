import React from 'react';
import { View , Text , StyleSheet , TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome'; 
const itemList = ({ item , deleteItem}) => {
    return(
        <TouchableOpacity style={styles.itemList}>
            <View styles={styles.itemListView}>
                <Text style={styles.itemListText}> { item.text }</Text>
                <Icon name="remove" size={20} color="firebrick" onPress={() => deleteItem(item.id)}/>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
itemList : {
    padding : 15,
    backgroundColor : '#f8f8f8',
    borderBottomWidth : 1,
    bodrderColor : '#eee'
},
itemListView : {
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems : 'center'
},
itemListText : {
    fontSize : 18
}
})

export default itemList;