import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ElevatedCards() {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Elevated Cards</Text>

      <ScrollView style={styles.elevatedCardsContainer} horizontal={true}>
        {/* Cards Start */}
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.cardText}>Tap</Text>
        </View>

        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.cardText}>Me</Text>
        </View>

        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.cardText}>to</Text>
        </View>

        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.cardText}>Scroll</Text>
        </View>

        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.cardText}>and</Text>
        </View>

        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.cardText}>Scroll</Text>
        </View>

        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.cardText}>Scroll</Text>
        </View>
        {/* Cards End */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 18,
  },

  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  elevatedCardsContainer: {
    flex: 1,
    flexDirection: 'row',

    rowGap: 18,
  },

  card: {
    justifyContent: 'center',
    alignItems: 'center',

    margin: 8,

    borderWidth: 2,
    borderRadius: 4,
    borderColor: '#ffffff',

    width: 100,
    height: 100,
  },

  cardElevated: {
    backgroundColor: '#CAD5E2',
    elevation: 4,

    shadowColor: '#333',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },

  cardText: {
    color: '#000000',
  },
});
