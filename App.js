import React , {useState} from 'react';
import { View , Text , FlatList,  StyleSheet , Alert } from 'react-native';
import { uuid } from 'uuid4';
import Header from './components/header';
import ItemList from './components/itemList';
import AddItem from './components/addItem';

const App = () => {

    const [items,setItems] = useState([
        { id : uuid(), name : 'Milk'},
        { id : uuid(), name : 'Eggs'},
        { id : uuid(), name : 'Cake'}
    ])

    const deleteItem = ( id ) => {
        setItems(prevItems => {
            return prevItems.filter(item => item.id != id);
        });
    }

    const addItem = (text) => {
        if(!text) {
            Alert.alert('Error', 'Please enter an item',{ text : 'Ok'});
        }
        setItems(prevItems => {
            return [{id : uuid(),text},...prevItems]
        })
    }
    return (
        <View styles={styles.container}>
            <Header title="Shopping List"/>
            <FlatList 
                data={items}
                renderItem={({item}) => <ItemList item={item}/>}
                deleteItem={deleteItem}
                />
            <AddItem addItem={addItem}/>
         </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        paddingTop : 60
    },
    text : {
        color : 'black'
    }

})

export default App;
