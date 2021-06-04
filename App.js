import React , {useState} from 'react';
import { View , Text , FlatList,  StyleSheet } from 'react-native';
import Header from './components/header';
import ItemList from './components/itemList';
import { uuid } from 'uuid4';

const App = () => {

    const [items,setItems] = useState([
        { id : uuid(), name : 'Milk'},
        { id : uuid(), name : 'Eggs'},
        { id : uuid(), name : 'Cake'}
    ])
    return (
        <View styles={styles.container}>
            <Header title="Shopping List"/>
            <FlatList 
                data={items}
                renderItem={({item}) => <ItemList item={item}/>}/>
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
