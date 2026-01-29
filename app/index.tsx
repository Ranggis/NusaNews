import React, { useState, useEffect, useRef } from 'react';
import { 
  StyleSheet, View, Text, TouchableOpacity, 
  SafeAreaView, Image, Animated, Dimensions, StatusBar 
} from 'react-native';
import { useRouter } from 'expo-router';
import LoadingScreen from '../components/LoadingScreen'; 
import { ArrowRight, Sparkles } from 'lucide-react-native';

const { width, height } = Dimensions.get('window');

export default function EntryPoint() {
  const [stage, setStage] = useState<'loading' | 'welcome'>('loading');
  const router = useRouter();

  // Animasi Values
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;
  const logoScale = useRef(new Animated.Value(0.8)).current;

  useEffect(() => {
    if (stage === 'loading') {
      // Loading selama 4 detik (sesuai animasi ngetik di LoadingScreen)
      const timer = setTimeout(() => setStage('welcome'), 4500);
      return () => clearTimeout(timer);
    }
    
    if (stage === 'welcome') {
      // Animasi masuk yang sangat halus
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.spring(logoScale, {
          toValue: 1,
          friction: 8,
          tension: 40,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        })
      ]).start();
    }
  }, [stage]);

  if (stage === 'loading') return <LoadingScreen />;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Dekorasi Background Halus */}
      <View style={styles.topDecor} />
      <View style={styles.bottomDecor} />

      <Animated.View 
        style={[
          styles.content, 
          { 
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }] 
          }
        ]}
      >
        {/* Logo Section */}
        <Animated.View style={[styles.logoWrapper, { transform: [{ scale: logoScale }] }]}>
          <View style={styles.logoShadow}>
            <Image 
              source={{ uri: 'https://raw.githubusercontent.com/Ranggis/Api-Image/main/nusput.png' }} 
              style={styles.logo}
              resizeMode="cover"
            />
          </View>
          <View style={styles.badge}>
            <Sparkles color="#FFF" size={10} style={{marginRight: 4}} />
            <Text style={styles.badgeText}>APLIKASI RESMI</Text>
          </View>
        </Animated.View>

        {/* Text Section */}
        <View style={styles.textContainer}>
          <Text style={styles.title}>
            Portal Berita{"\n"}
            <Text style={{color: '#E11D48'}}>Nusa Putra</Text>
          </Text>
          <Text style={styles.desc}>
            Tetap terhubung dengan informasi terkini, prestasi mahasiswa, dan seluruh kegiatan kampus dalam satu genggaman.
          </Text>
        </View>
        
        {/* Button Section */}
        <TouchableOpacity 
          style={styles.btn} 
          activeOpacity={0.9}
          onPress={() => router.replace('/(tabs)')}
        >
          <Text style={styles.btnText}>Mulai Membaca</Text>
          <View style={styles.btnIconCircle}>
            <ArrowRight color="#E11D48" size={22} />
          </View>
        </TouchableOpacity>

        <Text style={styles.footerNote}>© 2024 Universitas Nusa Putra • V.1.0</Text>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#FFFFFF' 
  },
  topDecor: {
    position: 'absolute',
    top: -height * 0.1,
    right: -width * 0.2,
    width: width * 0.7,
    height: width * 0.7,
    borderRadius: width * 0.35,
    backgroundColor: '#FFF1F2',
    opacity: 0.6,
  },
  bottomDecor: {
    position: 'absolute',
    bottom: -height * 0.1,
    left: -width * 0.2,
    width: width * 0.8,
    height: width * 0.8,
    borderRadius: width * 0.4,
    backgroundColor: '#F8FAFC',
    zIndex: -1,
  },
  content: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
    paddingHorizontal: width * 0.08 
  },
  logoWrapper: { 
    alignItems: 'center', 
    marginBottom: 50 
  },
  logoShadow: {
    width: width * 0.4,
    height: width * 0.4,
    backgroundColor: '#FFF',
    borderRadius: (width * 0.4) / 2,
    padding: 2,
    elevation: 20,
    shadowColor: '#E11D48',
    shadowOpacity: 0.2,
    shadowRadius: 20,
    overflow: 'hidden',
  },
  logo: { 
    width: '100%', 
    height: '100%', 
  },
  badge: {
    flexDirection: 'row',
    backgroundColor: '#1F2937',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 20,
    marginTop: -20,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFF'
  },
  badgeText: {
    color: '#FFF',
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 1
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 40
  },
  title: { 
    fontSize: width * 0.09, 
    fontWeight: '900', 
    textAlign: 'center', 
    color: '#0F172A',
    lineHeight: width * 0.11,
    letterSpacing: -1.5
  },
  desc: { 
    fontSize: 16, 
    textAlign: 'center', 
    color: '#64748B', 
    marginTop: 20,
    lineHeight: 24,
    paddingHorizontal: 10
  },
  btn: { 
    backgroundColor: '#1F2937', 
    width: '100%', 
    paddingVertical: 14, 
    paddingLeft: 30,
    paddingRight: 14,
    borderRadius: 100, 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between',
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 15
  },
  btnText: { 
    color: 'white', 
    fontSize: 18, 
    fontWeight: '800',
  },
  btnIconCircle: {
    backgroundColor: 'white',
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footerNote: {
    position: 'absolute',
    bottom: 30,
    color: '#CBD5E1',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1,
    textTransform: 'uppercase'
  }
});