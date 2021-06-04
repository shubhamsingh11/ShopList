import React from 'react';
import { View , Text , Stylesheet } from 'react-native';

const App = () => {
    return (
        <View styles={styles.container}>
            <Text styles={styles.text}>Hello World !</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
    },
    text : {
        color : 'black'
    }

})

export default App;
