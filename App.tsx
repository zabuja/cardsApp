import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import FlatCards from './components/FlatCards'
import ElevatedCards from "./components/ElevatedCards";
import FancyCard from "./components/FancyCard";
import ActionCard from "./components/ActionCard";

function App() {

  return(
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <FlatCards/>
        <Text style={styles.headingText}>ElevatedCards</Text>
        <ElevatedCards/>
        <Text style={styles.headingText}>Trending Places</Text>
        <FancyCard/>
        <FancyCard/>
        <FancyCard/>
        <Text style={styles.headingText}>Action Card</Text>
        <ActionCard/>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  headingText: {
      fontSize: 24,
      fontWeight: 'bold',
      paddingHorizontal: 8 
    },
  })

export default App