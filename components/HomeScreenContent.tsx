import React, { useCallback, useState, useMemo } from 'react';
import { 
  StyleSheet, View, FlatList, Text, 
  StatusBar, TouchableOpacity, TextInput, ScrollView, 
  Dimensions, RefreshControl, Platform 
} from 'react-native';
import { useRouter } from 'expo-router';
import { Search, Bell, Filter, TrendingUp, LayoutGrid } from 'lucide-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import NewsCard from './NewsCard';
import { News } from '../constants/Types';

const { width } = Dimensions.get('window');

const CATEGORIES = ['Semua', 'Kampus', 'Prestasi', 'Olahraga', 'Teknologi', 'Event'];

const MOCK_DATA: News[] = [
  { id: '1', title: 'Nusa Putra University Sukses Gelar Wisuda Ke-15 Secara Megah', category: 'Kampus', content: 'Acara berlangsung khidmat dengan ribuan wisudawan...', image: 'https://picsum.photos/id/10/800/400', date: '27 Jan 2024', author: 'Redaksi' },
  { id: '2', title: 'Tim Futsal Mahasiswa Raih Medali Emas di Turnamen Nasional', category: 'Olahraga', content: 'Pertandingan final yang sangat seru melawan universitas tetangga...', image: 'https://picsum.photos/id/24/800/400', date: '26 Jan 2024', author: 'Sports Desk' },
  { id: '3', title: 'Open Recruitment Organisasi Mahasiswa Tahun 2024', category: 'Event', content: 'Segera daftarkan diri anda untuk menjadi pengurus baru...', image: 'https://picsum.photos/id/36/800/400', date: '25 Jan 2024', author: 'Kemahasiswaan' },
  { id: '4', title: 'Inovasi AI Mahasiswa Informatika Diakui Dunia', category: 'Teknologi', content: 'Sebuah terobosan baru di bidang kecerdasan buatan...', image: 'https://picsum.photos/id/48/800/400', date: '24 Jan 2024', author: 'Tech Media' },
  { id: '5', title: 'Beasiswa Prestasi Internasional Kembali Dibuka', category: 'Prestasi', content: 'Kesempatan emas bagi mahasiswa yang ingin menempuh study abroad...', image: 'https://picsum.photos/id/60/800/400', date: '23 Jan 2024', author: 'Humas' },
];

export default function HomeScreenContent() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [refreshing, setRefreshing] = useState(false);

  // LOGIKA: Filter Data (Optimasi menggunakan useMemo)
  const filteredNews = useMemo(() => {
    return MOCK_DATA.filter(item => {
      const matchSearch = item.title.toLowerCase().includes(search.toLowerCase());
      const matchCategory = activeCategory === 'Semua' || item.category === activeCategory;
      return matchSearch && matchCategory;
    });
  }, [search, activeCategory]);

  // LOGIKA: Greeting berdasarkan waktu
  const greeting = useMemo(() => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Selamat Pagi';
    if (hour < 17) return 'Selamat Siang';
    return 'Selamat Malam';
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 2000);
  }, []);

  const handlePress = useCallback((item: News) => {
    router.push({
      pathname: '/details',
      params: { 
        title: item.title, 
        content: item.content, 
        image: item.image, 
        category: item.category 
      }
    });
  }, []);

  const renderHeader = () => (
    <View style={styles.headerContent}>
      {/* Search Bar Section */}
      <View style={styles.searchSection}>
        <View style={styles.searchBar}>
          <Search color="#94A3B8" size={18} />
          <TextInput 
            placeholder="Cari berita terkini..." 
            style={styles.searchInput}
            placeholderTextColor="#94A3B8"
            value={search}
            onChangeText={setSearch}
          />
          {search.length > 0 && (
            <TouchableOpacity onPress={() => setSearch('')}>
                <Text style={{color: '#94A3B8', fontWeight: 'bold'}}>X</Text>
            </TouchableOpacity>
          )}
        </View>
        <TouchableOpacity style={styles.filterBtn}>
          <Filter color="#FFF" size={20} />
        </TouchableOpacity>
      </View>

      {/* Categories Pill Navigation */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        style={styles.categoriesScroll}
        contentContainerStyle={{ paddingRight: 40 }}
      >
        {CATEGORIES.map((cat) => (
          <TouchableOpacity 
            key={cat} 
            onPress={() => setActiveCategory(cat)}
            activeOpacity={0.7}
            style={[
              styles.categoryChip, 
              activeCategory === cat && styles.categoryChipActive
            ]}
          >
            <Text style={[
              styles.categoryText, 
              activeCategory === cat && styles.categoryTextActive
            ]}>{cat}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* List Title Section */}
      <View style={styles.sectionLabelRow}>
        <View style={styles.row}>
            <TrendingUp color="#E11D48" size={18} />
            <Text style={styles.sectionTitle}>Berita Terkini</Text>
        </View>
        <TouchableOpacity>
            <Text style={styles.seeAll}>Lihat Semua</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: '#FFFFFF' }]}>
      <StatusBar barStyle="dark-content" />
      
      {/* Dynamic Navbar */}
      <View style={[styles.navbar, { paddingTop: insets.top + 15 }]}>
        <View>
          <Text style={styles.greetingText}>{greeting}, Ranggis</Text>
          <Text style={styles.brand}>Nusa<Text style={{color: '#E11D48'}}>News</Text></Text>
        </View>
        <TouchableOpacity style={styles.notifBtn} activeOpacity={0.7}>
          <Bell color="#0F172A" size={22} />
          <View style={styles.notifDot} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredNews}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <NewsCard item={item} onPress={() => handlePress(item)} />}
        ListHeaderComponent={renderHeader}
        contentContainerStyle={{ 
          paddingBottom: insets.bottom + 40, // Karena tab bar standar, padding tidak perlu 100+
          paddingHorizontal: 20 
        }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor="#E11D48" />
        }
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
            <View style={styles.emptyContainer}>
                <LayoutGrid size={50} color="#F1F5F9" />
                <Text style={styles.emptyText}>Berita tidak ditemukan</Text>
            </View>
        }
        // OPTIMASI: Performance Props
        initialNumToRender={5}
        maxToRenderPerBatch={5}
        windowSize={10}
        removeClippedSubviews={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  navbar: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    paddingHorizontal: 24, 
    paddingBottom: 20, 
    backgroundColor: '#FFF',
  },
  greetingText: { fontSize: 13, color: '#94A3B8', fontWeight: '600', marginBottom: 2 },
  brand: { fontSize: 28, fontWeight: '900', color: '#0F172A', letterSpacing: -1.5 },
  notifBtn: { 
    width: 48, height: 48, borderRadius: 16, backgroundColor: '#F8FAFC', 
    justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#F1F5F9'
  },
  notifDot: { 
    position: 'absolute', top: 14, right: 15, width: 8, height: 8, 
    borderRadius: 4, backgroundColor: '#E11D48', borderWidth: 2, borderColor: '#FFF' 
  },
  headerContent: { paddingVertical: 10 },
  searchSection: { 
    flexDirection: 'row', marginTop: 5, alignItems: 'center' 
  },
  searchBar: { 
    flex: 1, flexDirection: 'row', backgroundColor: '#F8FAFC', paddingHorizontal: 16, 
    paddingVertical: 14, borderRadius: 18, alignItems: 'center',
    borderWidth: 1, borderColor: '#F1F5F9'
  },
  searchInput: { marginLeft: 12, fontSize: 15, color: '#0F172A', flex: 1, fontWeight: '500' },
  filterBtn: { 
    backgroundColor: '#0F172A', width: 52, height: 52, borderRadius: 18, 
    marginLeft: 12, justifyContent: 'center', alignItems: 'center' 
  },
  categoriesScroll: { marginTop: 25 },
  categoryChip: { 
    paddingHorizontal: 22, paddingVertical: 12, borderRadius: 15, 
    backgroundColor: '#F8FAFC', marginRight: 10, borderWidth: 1, borderColor: '#F1F5F9' 
  },
  categoryChipActive: { backgroundColor: '#E11D48', borderColor: '#E11D48' },
  categoryText: { color: '#64748B', fontWeight: '700', fontSize: 14 },
  categoryTextActive: { color: '#FFF' },
  sectionLabelRow: { 
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    marginTop: 30, marginBottom: 15 
  },
  row: { flexDirection: 'row', alignItems: 'center' },
  sectionTitle: { fontSize: 20, fontWeight: '900', color: '#0F172A', marginLeft: 10, letterSpacing: -0.5 },
  seeAll: { fontSize: 13, color: '#E11D48', fontWeight: '700' },
  emptyContainer: { alignItems: 'center', marginTop: 60 },
  emptyText: { marginTop: 10, color: '#94A3B8', fontWeight: '600' }
});