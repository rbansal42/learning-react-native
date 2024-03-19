import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Trending Places</Text>

      {/* Fancy Card Starts */}
      <View style={[styles.card, styles.elevatedCard]}>
        <Image
          source={{uri: 'https://imgur.com/NA6CQV0.png'}}
          style={styles.cardImage}
        />

        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Hawa Mahal</Text>
          <Text style={styles.cardLabel}>Pink City, Jaipur</Text>

          <ScrollView>
            <Text style={styles.cardDescription}>
              Qui ullamco dolor aliqua qui exercitation nulla non commodo.
              Laboris Lorem nostrud non reprehenderit id cillum. Reprehenderit
              esse laboris qui cillum occaecat. Tempor minim adipisicing
              consequat laboris quis ullamco fugiat reprehenderit qui Lorem ex
              commodo deserunt. Labore occaecat labore ipsum excepteur ipsum
              aliqua pariatur elit. Tempor labore consectetur fugiat commodo sit
              exercitation laboris. Labore ipsum cupidatat et qui culpa et in
              exercitation do reprehenderit nulla. Mollit et veniam anim ipsum
              ea nulla.
            </Text>
          </ScrollView>

          <Text style={styles.cardFooter}>300 mins away</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 18,
  },

  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  card: {
    width: 350,
    height: 360,

    marginVertical: 12,
    marginHorizontal: 16,

    borderRadius: 6,
  },

  elevatedCard: {
    backgroundColor: '#ffffff',

    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: 'black',
  },

  cardImage: {
    height: 180,

    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    marginBottom: 8,
  },

  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },

  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',

    marginBottom: 4,

    color: 'black',
  },

  cardLabel: {
    marginBottom: 6,

    fontSize: 14,

    color: 'black',
  },

  cardDescription: {
    flexShrink: 1,

    marginTop: 6,
    marginBottom: 12,

    fontSize: 12,

    color: '#242b2e',
    textAlign: 'justify',
  },

  cardFooter: {
    color: 'black',
  },
});
