import React from 'react'
import {Text, Image, StyleSheet, View, Button} from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function Newsfeed({props}) {
    const navigation = useNavigation()

    const {title, image, id, comment} = props.item
    
    // console.log(props)

    const pindahPage = () => {
        navigation.navigate({name:'Comment',params:id})
    }

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
            <Button 
                onPress={() => pindahPage()}
                title="View Comment" />
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