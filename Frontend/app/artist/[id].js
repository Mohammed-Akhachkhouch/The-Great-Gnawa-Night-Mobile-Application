import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useQuery } from "@tanstack/react-query";
import { fetchArtistById } from "../servies/artists/artists"; 

export default function ArtistPage() {
  const { id } = useLocalSearchParams(); 
  const router = useRouter();


  const { data, isLoading, isError } = useQuery({
    queryKey: ["artist", id],
    queryFn: () => fetchArtistById(id),
    enabled: !!id,
  });

  const goToBooking = () => {
    router.push(`/booking/${id}`);
  };

  if (isLoading) return <Text>Loading...</Text>;
  if (isError) return <Text>Error loading artist</Text>;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {data.photo && <Image source={{ uri: data.photo }} style={styles.image} />}
      <Text style={styles.name}>{data.name}</Text>
      <Text style={styles.bio}>{data.bio}</Text>

      <TouchableOpacity style={styles.button} onPress={goToBooking}>
        <Text style={styles.buttonText}>Book This Artist</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "#fff" },
  image: { width: "100%", height: 200, borderRadius: 10, marginBottom: 15 },
  name: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  bio: { fontSize: 16, color: "#444", marginBottom: 20 },
  button: { backgroundColor: "#ff5a5f", paddingVertical: 15, borderRadius: 10, alignItems: "center", marginTop: 25 },
  buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
});
