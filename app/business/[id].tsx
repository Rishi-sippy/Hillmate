import { Ionicons } from '@expo/vector-icons'
import { router, Stack, useLocalSearchParams } from 'expo-router'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const businesses: Record<string, any> = {
  '1': {
    name: 'Tibet Kitchen',
    category: 'Restaurant',
    rating: '4.8',
    city: 'Dharamshala',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
    description: 'Authentic Tibetan and Himalayan cuisine with beautiful mountain views.'
  },

  '2': {
    name: 'Kangra Taxi Service',
    category: 'Taxi',
    rating: '4.9',
    city: 'Palampur',
    image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c',
    description: 'Reliable taxi service across Kangra, Dharamshala and Palampur.'
  },

  '3': {
    name: 'Snow Valley Resort',
    category: 'Hotel',
    rating: '4.7',
    city: 'Manali',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
    description: 'Luxury mountain stay with stunning Himalayan views.'
  }
}

export default function BusinessDetailsScreen() {
  const { id } = useLocalSearchParams()

  const business = businesses[id as string]

  if (!business) {
    return (
      <View style={styles.center}>
        <Text>Business Not Found</Text>
      </View>
    )
  }

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <ScrollView style={styles.container}>
        <Image source={{ uri: business.image }} style={styles.heroImage} />

        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>

        <View style={styles.content}>
          <Text style={styles.title}>{business.name}</Text>

          <View style={styles.ratingRow}>
            <Ionicons name="star" size={18} color="#F59E0B" />
            <Text style={styles.rating}>{business.rating}</Text>
          </View>

          <Text style={styles.location}>
            {business.category} • {business.city}
          </Text>

          <View style={styles.actions}>
            <TouchableOpacity style={styles.actionButton}>
              <Ionicons name="navigate" size={22} color="#16A34A" />
              <Text>Directions</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
              <Ionicons name="call" size={22} color="#16A34A" />
              <Text>Call</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
              <Ionicons name="logo-whatsapp" size={22} color="#16A34A" />
              <Text>WhatsApp</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.sectionTitle}>About</Text>

          <Text style={styles.description}>{business.description}</Text>
        </View>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },

  heroImage: {
    width: '100%',
    height: 300
  },

  backButton: {
    position: 'absolute',
    top: 60,
    left: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    borderRadius: 50
  },

  content: {
    padding: 24
  },

  title: {
    fontSize: 30,
    fontWeight: '800'
  },

  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10
  },

  rating: {
    marginLeft: 6,
    fontWeight: '700'
  },

  location: {
    color: '#64748B',
    marginTop: 8,
    fontSize: 16
  },

  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24
  },

  actionButton: {
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
    padding: 16,
    borderRadius: 16,
    width: '31%'
  },

  sectionTitle: {
    marginTop: 30,
    fontSize: 22,
    fontWeight: '700'
  },

  description: {
    marginTop: 12,
    color: '#475569',
    lineHeight: 24
  },

  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
