

import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useQuery } from '@tanstack/react-query';
import { fetchBookingsByEmail } from '../app/servies/booking/booking';

export default function TicketsPage() {
  const router = useRouter();
  const { email } = useLocalSearchParams(); 

  const { data, isLoading, isError } = useQuery({
    queryKey: ['bookings', email],
    queryFn: () => fetchBookingsByEmail(email),
    enabled: !!email,
  });

  const handleBack = () => {
    router.back(); 
  };

  if (isLoading) return <Text style={styles.loading}>Loading tickets...</Text>;
  if (isError) return <Text style={styles.loading}>Error loading tickets.</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Tickets</Text>

      {(!data || data.length === 0) ? (
        <Text style={styles.noTickets}>You have no tickets yet.</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.ticket_code}
          renderItem={({ item }) => (
            <View style={styles.ticketCard}>
              <Text style={styles.ticketLabel}>Artist:</Text>
              <Text style={styles.ticketValue}>{item.Artist?.name || 'Unknown Artist'}</Text>

              <Text style={styles.ticketLabel}>Seats:</Text>
              <Text style={styles.ticketValue}>{item.seats}</Text>

              <Text style={styles.ticketLabel}>Ticket Code:</Text>
              <Text style={styles.ticketValue}>{item.ticket_code}</Text>

              <Text style={styles.ticketLabel}>Email:</Text>
              <Text style={styles.ticketValue}>{item.email}</Text>
            </View>
          )}
        />
      )}

      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  loading: { fontSize: 16, textAlign: 'center', marginTop: 50 },
  noTickets: { fontSize: 16, textAlign: 'center', marginTop: 50 },
  ticketCard: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 2,
  },
  ticketLabel: { fontWeight: 'bold', fontSize: 14, color: '#333' },
  ticketValue: { fontSize: 16, marginBottom: 5 },
  backButton: {
    backgroundColor: '#FF5A5F',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  backButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});
