import { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert, ScrollView } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useQuery, useMutation } from "@tanstack/react-query";
import { fetchArtistById } from "../servies/artists/artists";
import { createBooking } from "../servies/booking/booking";

export default function BookingPage() {
  const { id: artistId } = useLocalSearchParams();
  const router = useRouter();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["artist", artistId],
    queryFn: () => fetchArtistById(artistId),
    enabled: !!artistId,
  });

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [tickets, setTickets] = useState("1");

  const mutation = useMutation({
    mutationFn: (bookingData) => createBooking(bookingData),
    onSuccess: (res) => {
      Alert.alert("Booking Confirmed", `Your booking code: ${res.ticket_code}`);
      router.push(`/tickets?email=${email.trim()}`);
    },
    onError: (error) => {
      console.log("❌ Booking error:", error.response?.data || error.message);
      Alert.alert("Error", "Something went wrong!");
    },
  });

  const handleBooking = () => {
    if (!fullName.trim() || !email.trim() || !tickets) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }

    const bookingData = {
      artistId,
      name: fullName.trim(),
      email: email.trim(),
      seats: Number(tickets),
    };

    console.log("📤 SEND BOOKING:", bookingData);
    mutation.mutate(bookingData);
  };

  if (isLoading) return <Text style={styles.loading}>Loading artist...</Text>;
  if (isError) return <Text style={styles.loading}>Error loading artist</Text>;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {data.photo && <Image source={{ uri: data.photo }} style={styles.image} resizeMode="cover" />}
      <Text style={styles.name}>{data.name}</Text>
      <Text style={styles.bio}>{data.bio}</Text>

      <Text style={styles.label}>Full Name</Text>
      <TextInput
        style={styles.input}
        value={fullName}
        onChangeText={setFullName}
        placeholder="Your full name"
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Your email"
        keyboardType="email-address"
      />

      <Text style={styles.label}>Number of Tickets</Text>
      <TextInput
        style={styles.input}
        value={tickets}
        onChangeText={setTickets}
        placeholder="1"
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={handleBooking}>
        <Text style={styles.buttonText}>Confirm Booking</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "#fff" },
  image: { width: "100%", height: 200, borderRadius: 10, marginBottom: 15 },
  name: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  bio: { fontSize: 16, color: "#444", marginBottom: 20 },
  label: { fontSize: 16, fontWeight: "bold", marginBottom: 5, marginTop: 15 },
  input: { borderWidth: 1, borderColor: "#ccc", borderRadius: 8, padding: 10, fontSize: 16 },
  button: { backgroundColor: "#ff5a5f", paddingVertical: 15, borderRadius: 10, alignItems: "center", marginTop: 25 },
  buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  loading: { fontSize: 16, textAlign: "center", marginTop: 50 },
});
