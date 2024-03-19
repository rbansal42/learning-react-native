import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlatCards() {
  return (
    <View style={styles.container}>
      {/* Page Heading */}
      <Text style={styles.headingText}>Flat Cards</Text>

      {/* Cards Container */}
      <View style={styles.cardsContainer}>
        {/* Individual Cards*/}

        {/* Card 1 */}
        <View style={[styles.card, styles.cardOne]}>
          <Text>Red</Text>
        </View>

        {/* Card 2 */}
        <View style={[styles.card, styles.cardTwo]}>
          <Text>Green</Text>
        </View>

        {/* Card 3 */}
        <View style={[styles.card, styles.cardThree]}>
          <Text>Blue</Text>
        </View>

        {/* Card 4 */}
        <View style={[styles.card, styles.cardFour]}>
          <Text>Black</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
  },

  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  //   Card Container
  cardsContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',

    padding: 8,
  },

  //   Cards
  card: {
    flex: 1,

    height: 100,
    width: 100,

    margin: 8,

    borderWidth: 2,
    borderRadius: 4,
    borderColor: '#ffffff',

    alignItems: 'center',
    justifyContent: 'center',
  },

  cardOne: {
    backgroundColor: '#ff8881',
  },

  cardTwo: {
    backgroundColor: '#97C1A9',
  },

  cardThree: {
    backgroundColor: '#9ab7d3',
  },
  cardFour: {
    backgroundColor: '#060606',
  },
});
