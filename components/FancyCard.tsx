import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      
      <View style={[styles.card, styles.cardElevated]}>
        <Image source={{
            uri: 'https://static.toiimg.com/photo/msid-92089121,width-96,height-65.cms'
        }}
        style={styles.cardImage}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Hawa Mahal</Text>
            <Text style={styles.cardLabel}>Rajasthan</Text>
            <Text style={styles.cardDesc}>The Hawa Mahal is a palace in the city of Jaipur, India. Built from red and pink sandstone, it is on the edge of the City Palace, Jaipur</Text>
            <Text style={styles.cardFooter}>12 minutes away...</Text>
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
      card: {
        width: 350,
        height: 340,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16
      },
      cardElevated: {
        backgroundColor: 'white',
        elevation: 5,
        shadowOffset:{
            height:1, width:1
        }
      },
      cardImage:{
        height: 180,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6
      },
      cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12
      },
      cardLabel: {
        color: 'black',
        fontSize: 16,
        fontStyle: 'italic',
        marginBottom: 6
    },
    cardDesc: {
        fontSize: 14,
        color: '#242B2E',
        marginBottom: 12,
        marginTop: 6, 
        flexShrink: 1
      },
      cardFooter: {
        color: 'black'
      },
      cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 4,
        color: 'black'
      }
})