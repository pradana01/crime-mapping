import React from 'react'
import {Text, Image, StyleSheet, View, Button} from 'react-native'
import {CardItem, Right} from 'native-base'

export default function Report({props}) {

    const {title, photo, id, description, location, createdAt} = props.item

    return (
        <CardItem style={styles.carditem}>
          <View >
            <Image 
                style={ styles.image }
                source={{uri:photo}} />
          </View>
          <Right style={ styles.right }>
            <Text style={styles.time}>{createdAt}</Text>
            <Text>{title}</Text>
            <Text style={{ fontWeight: "bold" }}>{description}</Text>
            <Text
              style={styles.location}
            >
              Kecamatan : {location}
            </Text>
            <Button title="Edit Report"/>
            <Button title="Delete Report"/>
          </Right>
        </CardItem>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: "black",
        margin: 5
    },
    image: {
        width: 80, 
        height: 100, 
        backgroundColor: "#707070", 
        marginLeft: -10
    },
    carditem: { 
        marginVertical: 5, 
        marginHorizontal: 5 
    },
    right: {
        flex: 1,
        alignItems: "flex-start", 
        height: 150, 
        marginLeft: 15 
    },
    time: { 
        fontSize: 12,
        color: "#ccc" 
    },
    location: { 
        marginTop: 5,
        fontStyle: "italic",
        color: "#5891FE",
        fontWeight: "700" 
    }
});