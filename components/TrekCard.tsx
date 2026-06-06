import { ImageBackground, StyleSheet, Text, TouchableOpacity } from 'react-native'

interface TrekCardProps {
  title: string
  image: string
}

export default function TrekCard({ title, image }: TrekCardProps) {
  return (
    <TouchableOpacity style={styles.card}>
      <ImageBackground source={{ uri: image }} style={styles.image} imageStyle={{ borderRadius: 24 }}>
        <Text style={styles.title}>{title}</Text>
      </ImageBackground>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    width: 220,
    height: 160,
    marginRight: 16
  },

  image: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 16
  },

  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '800'
  }
})
