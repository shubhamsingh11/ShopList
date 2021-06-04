import React from 'react';
import { View , Text , StyleSheet } from 'react-native';

//const Header = (props) => {
const Header = ({ title }) => {
    return (
        <View styles={styles.header}>
            <Text styles={styles.text}>{title}</Text>
        </View>
    )
}

Header.defaultProps = {
    title: 'Shopping List'
}

const styles = StyleSheet.create({
    header : {
        height : 60,
        padding : 15,
        backgroundColor: 'darkslateblue'
    },
    text : {
        color : '#fff',
        fontSize : 23,
        textAlign : 'center'
    }

})

export default Header;
