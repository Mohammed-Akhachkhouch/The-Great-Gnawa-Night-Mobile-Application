// import { View, Text, TouchableOpacity } from "react-native";
// import { router } from "expo-router";

// export default function Home() {
//   return (
//     <View style={{ padding: 20, flex: 1, justifyContent: "center" }}>
//       <Text style={{ fontSize: 28, fontWeight: "bold" }}>Home Screen</Text>

//       <TouchableOpacity
//         onPress={() => router.push("/artist/1")}
//         style={{
//           marginTop: 20,
//           padding: 12,
//           backgroundColor: "#4F46E5",
//           borderRadius: 10,
//         }}
//       >
//         <Text style={{ color: "white", textAlign: "center" }}>
//           Go to Artist 1
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// }


import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from 'react-native';

import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native'; 
import { artists } from "../data/data";


export default function EventScreen() {
  const navigation = useNavigation();

  const handleSeeArtistes = () => {
    navigation.navigate('events');
  };

  const handleBackToTicket = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
        source={require('../assets/images/gnawa.jpg')}
        resizeMode="cover"
        style={styles.imageBackground}
      >
        <View style={styles.overlay} />

        <View style={styles.headerContainer}>
          <Text style={styles.eventTitle}>The Great Gnawa Event</Text>
        </View>

        <View style={styles.infoCardsContainer}>
          <View style={styles.infoCard}>
            <Ionicons
              name="calendar"
              size={24}
              color="#6B7280"
              style={{ marginRight: 10 }}
            />
            <View>
              <Text style={styles.cardLabel}>Date :</Text>
              <Text style={styles.cardValue}>December 28, 2025</Text>
            </View>
          </View>

          <View style={styles.infoCard}>
            <FontAwesome
              name="map-marker"
              size={24}
              color="#6B7280"
              style={{ marginRight: 10 }}
            />
            <View>
              <Text style={styles.cardLabel}>Location :</Text>
              <Text style={styles.cardValue}>Agadir, Morocco</Text>
              <Text style={styles.cardValue}>Open-Air Amphitheater</Text>
            </View>
          </View>

          <View style={styles.descriptionCard}>
            <Text style={styles.descriptionText}>
              An enchanting evening of traditional Gnawa music and culture.
            </Text>
          </View>

          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              onPress={handleSeeArtistes}
              style={[styles.actionButton, { backgroundColor: '#FF8C00' }]}
            >
              <Text style={styles.buttonText}>See Artistes</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleBackToTicket}
              style={[
                styles.actionButton,
                { backgroundColor: 'transparent', borderColor: '#FF8C00', borderWidth: 2 },
              ]}
            >
              <Text style={[styles.buttonText, { color: '#FF8C00' }]}>Back to Ticket</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000',
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  headerContainer: {
    position: 'absolute',
    top: '35%',
    left: 0,
    right: 0,
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  eventTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  infoCardsContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    paddingBottom: 40,
  },
  infoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  cardLabel: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 2,
  },
  cardValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
  },
  descriptionCard: {
    backgroundColor: 'transparent',
    paddingVertical: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  descriptionText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#1F2937',
    fontWeight: '500',
    lineHeight: 24,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  actionButton: {
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 30,
    width: '45%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textTransform: 'uppercase',
  },
});




