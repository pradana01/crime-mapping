import React from 'react'
import {Text, Image, StyleSheet, View, Button} from 'react-native'

export default function Comment({props}) {

    const {title, image, id, comment} = props

    return (
        <View style={styles.container} key={id}>
            <View>
                <Image
                style={styles.logo} 
                source={{uri:image}}/>
            </View>
            <View>
                <Text>{title}</Text>
                <Text>{comment}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      borderWidth: 1,
      borderColor: "black",
      margin: 5
    },
    logo: {
      width: 200,
      height: 200,
    },
  });