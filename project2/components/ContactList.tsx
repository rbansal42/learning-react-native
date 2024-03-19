import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ContactList() {
  // contacts array
  const contacts = [
    {
      uid: 1,
      name: 'Hitesh Choudhary',
      status: 'Just an extra ordinary teacher',
      imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
    },
    {
      uid: 2,
      name: 'Anurag Tiwari',
      status: 'I ❤️ To Code and Teach!',
      imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
    },
    {
      uid: 3,
      name: 'Sanket Singh',
      status: 'Making your GPay smooth',
      imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
    },
    {
      uid: 4,
      name: 'Anirudh Jwala',
      status: 'Building secure Digital banks',
      imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
    },
  ];

  return (
    <View style={styles.container}>
      {/* Card Heading */}
      <Text style={styles.headingText}>Contact List</Text>
      {/* User Card */}
      <ScrollView style={styles.container} scrollEnabled={false}>
        <View style={styles.userSection}>
          {/* Array Mapping Starts */}
          {contacts.map(({uid, name, status, imageUrl}) => {
            return (
              <View key={uid} style={styles.userCard}>
                <Image
                  src={imageUrl}
                  style={styles.userImage}
                  progressiveRenderingEnabled
                  resizeMethod="resize"
                  resizeMode="contain"
                />
                <View style={styles.userDetails}>
                  <Text style={styles.userName}>{name}</Text>
                  <Text style={styles.userStatus}>{status}</Text>
                </View>
              </View>
            );
          })}
          {/* Array Mapping Ends */}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  container: {
    flex: 1,
    flexDirection: 'column',

    padding: 18,
  },

  userSection: {gap: 8},

  userCard: {
    flex: 1,
    flexDirection: 'row',
    gap: 6,

    backgroundColor: '#31363F',
    padding: 8,

    borderRadius: 12,
  },

  userImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },

  userDetails: {
    flex: 1,
    flexDirection: 'column',
    gap: 2,

    justifyContent: 'center',

    marginLeft: 12,
  },

  userName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#f5f5f5',
  },

  userStatus: {},
});
