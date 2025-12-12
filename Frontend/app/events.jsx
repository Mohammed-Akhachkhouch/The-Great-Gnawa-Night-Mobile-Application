import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { router } from "expo-router";



export default function Home() {
  return (
    <View style={{ padding: 20, flex: 1 }}>
      <Text style={{ fontSize: 23, fontWeight: "bold" }}>Home Screen</Text>

      {artists.map((item) => (
        <TouchableOpacity
          key={item.id}
          onPress={() => router.push(`/artist/${item.id}`)}
        >
          <View style={styles.artists}>
            <Text style={{ color: "white", textAlign: "center" }}>
              {item.name}
            </Text>

            <View style={styles.kors}>
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  marginTop: 18,
                }}
              >
                9ors
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  artists: {
    marginTop: 20,
    padding: 12,
    backgroundColor: "#4F46E5",
    borderRadius: 10,
    width: 350,
    height: 100,
  },
  kors: {
    backgroundColor: "red",
    width: 60,
    height: 60,
    borderRadius: 60,
    alignSelf: "center",
    marginTop: 10,
  },
});
