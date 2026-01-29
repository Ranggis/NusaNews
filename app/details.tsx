import React, { useState } from 'react';
import { 
  useLocalSearchParams, useRouter 
} from 'expo-router';
import { 
  View, Text, Image, ScrollView, StyleSheet, 
  TouchableOpacity, StatusBar, Share, Dimensions, Platform 
} from 'react-native';
import { 
  ChevronLeft, Share2, Clock, Calendar, 
  User, Bookmark, MoreHorizontal 
} from 'lucide-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

export default function DetailsScreen() {
  const params = useLocalSearchParams();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [isBookmarked, setIsBookmarked] = useState(false);

  // Fitur Bagikan Berita
  const onShare = async () => {
    try {
      await Share.share({
        message: `Baca Berita Terbaru: ${params.title}\n\nBaca selengkapnya di NusaNews Portal.`,
      });
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <StatusBar barStyle="light-content" translucent />
      
      {/* FLOATING HEADER: Glassmorphism Style */}
      <View style={[styles.headerOverlay, { top: insets.top + 10 }]}>
        <TouchableOpacity 
          style={styles.blurBtn} 
          onPress={() => router.back()}
          activeOpacity={0.7}
        >
          <ChevronLeft color="white" size={24} />
        </TouchableOpacity>
        
        <View style={styles.headerRight}>
          <TouchableOpacity 
            style={styles.blurBtn} 
            onPress={onShare}
          >
            <Share2 color="white" size={20} />
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.blurBtn, { marginLeft: 12 }]}
            onPress={() => setIsBookmarked(!isBookmarked)}
          >
            <Bookmark 
              color="white" 
              size={20} 
              fill={isBookmarked ? "#E11D48" : "transparent"} 
              strokeWidth={isBookmarked ? 0 : 2}
            />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView 
        showsVerticalScrollIndicator={false} 
        bounces={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        {/* HERO IMAGE */}
        <View style={styles.imageContainer}>
          <Image 
            source={{ uri: params.image as string || 'https://picsum.photos/800/800' }} 
            style={styles.mainImage} 
          />
          <View style={styles.imageOverlay} />
        </View>
        
        {/* ARTICLE CONTENT CARD */}
        <View style={styles.contentCard}>
          <View style={styles.dragIndicator} />
          
          {/* CATEGORY & META */}
          <View style={styles.metaTop}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{params.category || 'INFO'}</Text>
            </View>
            <View style={styles.readTime}>
              <Clock size={14} color="#94A3B8" />
              <Text style={styles.timeLabel}>Estimasi 4 menit baca</Text>
            </View>
          </View>

          {/* MAIN TITLE */}
          <Text style={styles.articleTitle}>{params.title}</Text>
          
          {/* AUTHOR SECTION */}
          <View style={styles.authorBox}>
            <View style={styles.authorAvatar}>
              <User color="#FFF" size={20} />
            </View>
            <View style={styles.authorInfo}>
              <Text style={styles.authorName}>Redaksi NusaNews</Text>
              <View style={styles.dateInfo}>
                <Calendar size={12} color="#94A3B8" />
                <Text style={styles.dateText}>Diterbitkan pada 27 Jan 2024</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.moreBtn}>
               <MoreHorizontal color="#94A3B8" size={20} />
            </TouchableOpacity>
          </View>

          {/* BODY TEXT */}
          <View style={styles.bodyContent}>
            <Text style={styles.paragraph}>
              {params.content || "Berita ini sedang dimuat. Pastikan koneksi internet anda stabil untuk mendapatkan informasi terbaru dari Universitas Nusa Putra."}
            </Text>
            
            <Text style={styles.paragraph}>
              {"\n"}Universitas Nusa Putra melalui portal berita ini terus berkomitmen untuk memberikan transparansi dan kecepatan informasi bagi seluruh civitas akademika. Prestasi dan agenda penting yang disajikan bertujuan untuk membangun semangat kolaborasi.
            </Text>

            <Text style={styles.paragraph}>
              {"\n"}Halaman ini dioptimasi khusus untuk kenyamanan membaca di perangkat mobile, memastikan setiap kata tersaji dengan jelas dan estetika visual yang modern tetap terjaga.
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* FOOTER ACTION: Fixed Bottom Bar */}
      <View style={[styles.bottomBar, { paddingBottom: insets.bottom + 20 }]}>
         <TouchableOpacity style={styles.mainActionBtn}>
            <Text style={styles.btnText}>Simpan ke Arsip</Text>
         </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: { flex: 1, backgroundColor: '#FFFFFF' },
  
  // Header Buttons Style
  headerOverlay: {
    position: 'absolute',
    left: 20,
    right: 20,
    zIndex: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerRight: { flexDirection: 'row' },
  blurBtn: {
    backgroundColor: 'rgba(0,0,0,0.35)',
    width: 44,
    height: 44,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
    ...Platform.select({
      ios: { backdropFilter: 'blur(10px)' }
    })
  },

  // Image Section
  imageContainer: { width: width, height: height * 0.55 },
  mainImage: { width: '100%', height: '100%', resizeMode: 'cover' },
  imageOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.1)'
  },

  // Content Layout
  contentCard: {
    backgroundColor: '#FFFFFF',
    marginTop: -60,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingHorizontal: 28,
    paddingTop: 15,
    minHeight: height * 0.6,
    // Soft Shadow for card depth
    elevation: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: -10 }
  },
  dragIndicator: {
    width: 35,
    height: 4,
    backgroundColor: '#E2E8F0',
    borderRadius: 2,
    alignSelf: 'center',
    marginBottom: 25
  },

  // Metadata Styling
  metaTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20
  },
  badge: {
    backgroundColor: '#FFF1F2',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8
  },
  badgeText: {
    color: '#E11D48',
    fontWeight: '800',
    fontSize: 11,
    letterSpacing: 1,
    textTransform: 'uppercase'
  },
  readTime: { flexDirection: 'row', alignItems: 'center' },
  timeLabel: { color: '#94A3B8', fontSize: 13, marginLeft: 6, fontWeight: '600' },
  
  articleTitle: {
    fontSize: 30,
    fontWeight: '900',
    color: '#0F172A',
    lineHeight: 38,
    marginBottom: 25,
    letterSpacing: -0.5
  },

  authorBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    paddingBottom: 25,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9'
  },
  authorAvatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#1E293B',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15
  },
  authorInfo: { flex: 1 },
  authorName: { fontSize: 16, fontWeight: '700', color: '#1E293B' },
  dateInfo: { flexDirection: 'row', alignItems: 'center', marginTop: 4 },
  dateText: { fontSize: 12, color: '#94A3B8', marginLeft: 5, fontWeight: '500' },
  moreBtn: { padding: 5 },

  // Paragraph Styling
  bodyContent: { marginTop: 5 },
  paragraph: {
    fontSize: 18,
    lineHeight: 32,
    color: '#334155',
    textAlign: 'left',
    letterSpacing: 0.3
  },

  // Bottom Sticky Bar
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    width: width,
    backgroundColor: 'rgba(255,255,255,0.95)',
    paddingHorizontal: 28,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: '#F1F5F9'
  },
  mainActionBtn: {
    backgroundColor: '#0F172A',
    paddingVertical: 18,
    borderRadius: 18,
    alignItems: 'center',
    shadowColor: "#0F172A",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5
  },
  btnText: { color: '#FFF', fontWeight: '800', fontSize: 16, letterSpacing: 0.5 }
});