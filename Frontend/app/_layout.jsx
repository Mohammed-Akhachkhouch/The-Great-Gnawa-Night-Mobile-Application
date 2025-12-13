import { Stack } from "expo-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function RootLayout() {
  return (

    <QueryClientProvider client={queryClient}>

    <Stack>
    <Stack.Screen name ="index" options={{headerShown: false}}/>
    <Stack.Screen name ="artists" options={{headerShown: false}}/>
    <Stack.Screen name ="artist/[id]" options={{headerShown: false}}/>
    <Stack.Screen name ="booking/[id]" options={{headerShown: false}}/>
    <Stack.Screen name ="tickets" options={{headerShown: false}}/>



    </Stack>

    </QueryClientProvider>


  );
}
