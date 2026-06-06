import { Ionicons } from '@expo/vector-icons'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface ServiceCardProps {
  title: string
  category: string
  location: string
  rating: string
  distance: string
  image: string
  onPress?: () => void
}

export default function ServiceCard({ title, category, location, rating, distance, image, onPress }: ServiceCardProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: image }} style={styles.image} />

      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>

          <View style={styles.rating}>
            <Ionicons name="star" size={12} color="#F59E0B" />
            <Text style={styles.ratingText}>{rating}</Text>
          </View>
        </View>

        <Text style={styles.meta}>
          {category} • {location}
        </Text>

        <Text style={styles.distance}>📍 {distance}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 18,
    borderWidth: 1,
    borderColor: '#f1f5f9'
  },

  image: {
    width: '100%',
    height: 160
  },

  content: {
    padding: 16
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  title: {
    fontSize: 18,
    fontWeight: '700'
  },

  meta: {
    color: '#64748B',
    marginTop: 8
  },

  distance: {
    marginTop: 8,
    color: '#16A34A',
    fontWeight: '600'
  },

  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 20
  },

  ratingText: {
    marginLeft: 4,
    color: '#92400E',
    fontWeight: '700'
  }
})
