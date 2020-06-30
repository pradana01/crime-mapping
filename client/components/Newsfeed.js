import React, { useState,useEffect} from 'react'
import {Text, Image, StyleSheet, View, Button} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import {CardItem, Right} from 'native-base'

export default function Newsfeed({props}) {
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const navigation = useNavigation()

    const {title, photo, id, description, location, video, createdAt, Users} = props.item
    
    console.log(props.item.Users)

    const pindahPage = () => {
        navigation.navigate({name:'Comment',params:id})
    }

    useEffect(() => {
      setDate(createdAt.split('T')[0])
      setTime(createdAt.split('T')[1].split('.')[0])
    },[])

    return (
        <CardItem style={styles.carditem}>
          <View >
            <Image 
                style={ styles.image }
                source={{uri:photo}} />
          </View>
          <Right style={ styles.right }>
            <Text style={styles.time}>{date} {time} By: {Users[0].name}</Text>
            <Text>{title}</Text>
            <Text style={{ fontWeight: "bold" }}>{description}</Text>
            <Text
              style={styles.location}
            >
              Kecamatan : {location}
            </Text>
            <Button title="see comment"/>
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
      height: 100, 
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