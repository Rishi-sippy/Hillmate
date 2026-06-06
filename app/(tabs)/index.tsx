import CategoryCard from '@/components/CategoryCard'
import EmergencyCard from '@/components/EmergencyCard'
import ServiceCard from '@/components/ServiceCard'
import TrekCard from '@/components/TrekCard'
import { Ionicons } from '@expo/vector-icons'
import { BlurView } from 'expo-blur'
import { router } from 'expo-router'
import { ImageBackground, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
const categories = [
  { icon: 'restaurant', label: 'Food' },
  { icon: 'car', label: 'Taxi' },
  { icon: 'bed', label: 'Hotels' },
  { icon: 'medical', label: 'Hospital' },
  { icon: 'map', label: 'Treks' },
  { icon: 'warning', label: 'Emergency' }
]

const services = [
  {
    title: 'Tibet Kitchen',
    category: 'Restaurant',
    location: 'Dharamshala',
    rating: '4.8',
    distance: '0.4 km'
  },
  {
    title: 'Kangra Taxi Service',
    category: 'Taxi',
    location: 'Palampur',
    rating: '4.9',
    distance: '0.8 km'
  },
  {
    title: 'Snow Valley Resort',
    category: 'Hotel',
    location: 'Manali',
    rating: '4.7',
    distance: '1.2 km'
  }
]

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* HERO SECTION */}

      <ImageBackground source={require('../../assets/images/himachal-bg.jpeg')} style={styles.hero}>
        <View style={styles.overlay}>
          <SafeAreaView>
            <View style={styles.locationPill}>
              <Ionicons name="location" size={14} color="#fff" />
              <Text style={styles.locationText}>Palampur</Text>
            </View>

            <Text style={styles.logo}>HillMate</Text>

            <Text style={styles.heading}>Explore Himachal</Text>

            <Text style={styles.subHeading}>Discover restaurants, hotels, taxis, trekking routes and emergency services.</Text>

            <BlurView intensity={50} tint="dark" style={styles.searchBox}>
              <Ionicons name="search" size={22} color="#fff" />

              <TextInput placeholder="Search anything nearby..." placeholderTextColor="#ddd" style={styles.input} />
            </BlurView>

            <View style={styles.statsRow}>
              <View style={styles.stat}>
                <Text style={styles.statNumber}>12K+</Text>

                <Text style={styles.statLabel}>Places</Text>
              </View>

              <View style={styles.stat}>
                <Text style={styles.statNumber}>4</Text>

                <Text style={styles.statLabel}>Cities</Text>
              </View>

              <View style={styles.stat}>
                <Text style={styles.statNumber}>24/7</Text>

                <Text style={styles.statLabel}>Emergency</Text>
              </View>
            </View>
          </SafeAreaView>
        </View>
      </ImageBackground>

      {/* CONTENT */}

      <View style={styles.content}>
        <EmergencyCard />

        {/* CATEGORIES */}

        <Text style={styles.sectionTitle}>Categories</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map((item) => (
            <CategoryCard key={item.label} icon={item.icon as any} label={item.label} onPress={() => {}} />
          ))}
        </ScrollView>

        {/* NEARBY SERVICES */}

        <View style={styles.sectionRow}>
          <Text style={styles.sectionTitle}>Nearby Services</Text>

          <Text style={styles.seeAll}>See All</Text>
        </View>

        <ServiceCard title="Tibet Kitchen" category="Restaurant" location="Dharamshala" rating="4.8" distance="0.4 km" image="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4" onPress={() => router.push('/business/1')} />

        <ServiceCard title="Kangra Taxi Service" category="Taxi" location="Palampur" rating="4.9" distance="0.8 km" image="https://images.unsplash.com/photo-1519003722824-194d4455a60c" onPress={() => router.push('/business/2')} />

        <ServiceCard title="Snow Valley Resort" category="Hotel" location="Manali" rating="4.7" distance="1.2 km" image="https://images.unsplash.com/photo-1566073771259-6a8506099945" onPress={() => router.push('/business/3')} />
        {/* POPULAR TREKS */}

        <View style={styles.sectionRow}>
          <Text style={styles.sectionTitle}>Popular Treks</Text>

          <Text style={styles.seeAll}>See All</Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TrekCard title="Triund Trek" image="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b" />

          <TrekCard title="Kareri Lake" image="https://images.unsplash.com/photo-1506744038136-46273834b3fb" />

          <TrekCard title="Indrahar Pass" image="https://images.unsplash.com/photo-1511497584788-876760111969" />
        </ScrollView>

        <View style={{ height: 80 }} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC'
  },

  hero: {
    height: 330
  },

  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.58)',
    paddingHorizontal: 24
  },

  locationPill: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.15)',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    marginBottom: 20
  },

  locationText: {
    color: '#fff',
    marginLeft: 6,
    fontWeight: '600'
  },

  logo: {
    color: '#fff',
    fontSize: 34,
    fontWeight: '900',
    marginBottom: 18
  },

  heading: {
    color: '#fff',
    fontSize: 38,
    fontWeight: '800'
  },

  subHeading: {
    color: '#E2E8F0',
    fontSize: 15,
    lineHeight: 24,
    marginTop: 12,
    width: '90%'
  },

  searchBox: {
    marginTop: 22,
    height: 58,
    borderRadius: 18,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
    overflow: 'hidden'
  },

  input: {
    flex: 1,
    marginLeft: 12,
    color: '#fff',
    fontSize: 16
  },

  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  },

  stat: {
    alignItems: 'center'
  },

  statNumber: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '800'
  },

  statLabel: {
    color: '#CBD5E1',
    marginTop: 4,
    fontSize: 12
  },

  content: {
    backgroundColor: '#fff',
    marginTop: -25,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingHorizontal: 24,
    paddingTop: 24
  },

  emergencyBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FEF2F2',
    borderWidth: 1,
    borderColor: '#FECACA',
    borderRadius: 18,
    padding: 16,
    marginBottom: 24
  },

  emergencyTitle: {
    color: '#DC2626',
    fontWeight: '700'
  },

  emergencySub: {
    color: '#991B1B',
    marginTop: 4,
    fontSize: 12
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 16
  },

  row: {
    marginTop: 24,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  serviceCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#F1F5F9'
  },

  serviceImage: {
    width: 70,
    height: 70,
    borderRadius: 18,
    backgroundColor: '#F0FDF4',
    justifyContent: 'center',
    alignItems: 'center'
  },

  serviceContent: {
    flex: 1,
    marginLeft: 14
  },

  serviceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  serviceTitle: {
    fontSize: 17,
    fontWeight: '700'
  },

  serviceMeta: {
    marginTop: 6,
    color: '#64748B'
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
    fontWeight: '700',
    color: '#92400E'
  },
  sectionRow: {
    marginTop: 24,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  seeAll: {
    color: '#16A34A',
    fontWeight: '600'
  }
})
