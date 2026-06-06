import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

interface CategoryCardProps {
  icon: keyof typeof Ionicons.glyphMap
  label: string
  onPress?: () => void
}

export default function CategoryCard({ icon, label, onPress }: CategoryCardProps) {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.card} onPress={onPress}>
      <Ionicons name={icon} size={28} color="#16a34a" />

      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    width: '31%',
    backgroundColor: '#ffffff',
    borderRadius: 20,
    paddingVertical: 22,
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,

    elevation: 4,

    marginBottom: 14
  },

  label: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: '600',
    color: '#1e293b'
  }
})
