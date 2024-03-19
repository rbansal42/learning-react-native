import {
  Image,
  Linking,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import React from 'react';

export default function ActionCard() {
  // Function to open a website on click
  // Accepts a string argument
  const openWebsite = function (websiteLink: string) {
    Linking.openURL(websiteLink);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>What's new in JS 21</Text>
        </View>

        <Image
          src={
            'https://cdn.hashnode.com/res/hashnode/image/upload/v1613294983676/841x71jGr.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp'
          }
          style={styles.cardImage}
          resizeMethod={'resize'}
          resizeMode="cover"
          progressiveRenderingEnabled={true}></Image>

        <View style={styles.bodyContainer}>
          <Text style={styles.bodyText} numberOfLines={3}>
            Sint tempor aliquip enim eu est anim ea exercitation minim nulla
            nisi. Esse cillum nisi elit officia nulla pariatur cillum
            exercitation sit. Labore duis sint laborum non culpa in aute
            proident veniam nulla et in elit. Mollit est fugiat dolor enim in.
            Dolore sunt non id duis laboris veniam enim duis. Ut do dolore sunt
            sunt laboris pariatur. Incididunt culpa officia laboris ut do
            incididunt ut ex voluptate ut minim in aliquip reprehenderit. Tempor
            commodo minim tempor dolor consectetur ipsum aute. Velit cupidatat
            ipsum occaecat et nostrud. Reprehenderit consequat incididunt
            aliquip et dolor nisi ea. Nisi irure non et nostrud tempor culpa
            reprehenderit ea elit do deserunt velit ad proident ullamco. Aliquip
            duis laborum nisi fugiat eiusmod minim laborum officia quis in duis.
            Commodo occaecat adipisicing ex nostrud culpa quis duis elit nisi.
            Laborum aliquip ipsum nisi. Aute et duis aliquip consequat labore
            consectetur cillum incididunt ipsum nisi qui.
          </Text>
        </View>

        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() =>
              openWebsite(
                'https://blog.learncodeonline.in/whats-new-in-javascript-21-es12',
              )
            }>
            <Text style={[styles.footerText, styles.socialLinks]}>
              Read More
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => openWebsite('https://instagram.com/rbansal42')}>
            <Text style={[styles.footerText, styles.socialLinks]}>
              Follow Me
            </Text>
          </TouchableOpacity>
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
    height: 340,

    marginVertical: 12,
    marginHorizontal: 16,

    paddingHorizontal: 12,

    borderRadius: 6,
  },

  elevatedCard: {
    backgroundColor: '#FDF7E4',

    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.4,
  },

  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    height: 40,
  },

  headerText: {
    fontSize: 18,
    fontWeight: '600',

    paddingHorizontal: 8,
    marginVertical: 4,

    color: 'black',
  },

  cardImage: {
    marginHorizontal: -12,
    height: 180,
  },

  bodyContainer: {paddingTop: 10},
  bodyText: {
    marginTop: 6,

    fontSize: 12,

    color: '#242b2e',
    textAlign: 'justify',
  },
  footerContainer: {
    flex: 1,
    flexDirection: 'row',

    gap: 8,

    padding: 8,

    justifyContent: 'space-evenly',
  },
  footerText: {
    marginTop: 2,
    color: 'black',

    // fontWeight: '500',
  },
  socialLinks: {
    fontSize: 16,
    color: 'black',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 6,

    borderRadius: 6,

    textDecorationLine: 'underline',
  },
});
