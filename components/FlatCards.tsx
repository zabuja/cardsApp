import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>CardsApp</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
           <Text style={styles.innerText}>Card</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
           <Text style={styles.innerText}>Card</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
           <Text style={styles.innerText}>Card</Text>
        </View>
        <View style={[styles.card, styles.cardFour]}>
           <Text style={styles.innerText}>Card</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
      fontSize: 24,
      fontWeight: 'bold',
      paddingHorizontal: 8 
    },

    container: {   
        flex: 1,
        flexDirection: 'row',
        padding: 8,
    },
    
    card: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        borderRadius: 5,
        margin: 8,
    },

    cardOne: {
        backgroundColor: 'red'
    },

    cardTwo: {
        backgroundColor: 'black',
    },

    innerText: {
        color: 'white',
        fontWeight: 'bold'
    },

    cardThree: {
        backgroundColor: 'green'
    },
    cardFour: {
        backgroundColor: 'orange'
    }
  })