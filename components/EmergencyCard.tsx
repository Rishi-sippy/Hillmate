import { Ionicons } from '@expo/vector-icons'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function EmergencyCard() {
  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.icon}>
        <Ionicons name="call" size={22} color="#fff" />
      </View>

      <View style={{ flex: 1 }}>
        <Text style={styles.title}>Emergency Help</Text>

        <Text style={styles.subTitle}>Ambulance • Police • Fire</Text>
      </View>

      <Ionicons name="chevron-forward" size={20} color="#DC2626" />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FEF2F2',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#FECACA',
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24
  },

  icon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#EF4444',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14
  },

  title: {
    color: '#DC2626',
    fontSize: 18,
    fontWeight: '700'
  },

  subTitle: {
    color: '#991B1B',
    marginTop: 4
  }
})
