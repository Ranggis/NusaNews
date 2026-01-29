import React, { useState, useEffect, useRef } from 'react';
import { 
  View, Text, StyleSheet, Animated, Easing, 
  Image, Dimensions, Platform 
} from 'react-native';

const { width, height } = Dimensions.get('window');

export default function LoadingScreen() {
  const [displayText, setDisplayText] = useState('');
  const [status, setStatus] = useState('Menginisialisasi Sistem');
  const fullText = "NusaNews";
  
  // Animation Values
  const pulseAnim = useRef(new Animated.Value(1)).current;
  const cursorOpacity = useRef(new Animated.Value(0)).current;
  const fadeContent = useRef(new Animated.Value(0)).current;
  const rotateRight = useRef(new Animated.Value(0)).current;
  const rotateLeft = useRef(new Animated.Value(0)).current;
  const statusFade = useRef(new Animated.Value(1)).current;
  const blobMove = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // 1. Animasi Mengetik
    let i = 0;
    const typingInterval = setInterval(() => {
      setDisplayText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(typingInterval);
    }, 150);

    // 2. Animasi Kursor & Reveal
    Animated.loop(
      Animated.sequence([
        Animated.timing(cursorOpacity, { toValue: 1, duration: 400, useNativeDriver: true }),
        Animated.timing(cursorOpacity, { toValue: 0, duration: 400, useNativeDriver: true }),
      ])
    ).start();

    // 3. Animasi Logo & Ring (Putaran Ganda)
    const createLoop = (val: Animated.Value, duration: number, reverse = false) => {
      return Animated.loop(
        Animated.timing(val, {
          toValue: reverse ? -1 : 1,
          duration,
          easing: Easing.linear,
          useNativeDriver: true,
        })
      );
    };
    
    createLoop(rotateRight, 8000).start();
    createLoop(rotateLeft, 12000, true).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, { toValue: 1.05, duration: 2000, useNativeDriver: true }),
        Animated.timing(pulseAnim, { toValue: 1, duration: 2000, useNativeDriver: true }),
      ])
    ).start();

    // 4. Background Liquid Motion
    Animated.loop(
      Animated.sequence([
        Animated.timing(blobMove, { toValue: 1, duration: 5000, useNativeDriver: true }),
        Animated.timing(blobMove, { toValue: 0, duration: 5000, useNativeDriver: true }),
      ])
    ).start();

    // 5. Reveal Content
    Animated.timing(fadeContent, { toValue: 1, duration: 1200, useNativeDriver: true }).start();

    // 6. Status Timeline dengan Cross-fade
    const updateStatus = (newText: string, delay: number) => {
      setTimeout(() => {
        Animated.sequence([
          Animated.timing(statusFade, { toValue: 0, duration: 300, useNativeDriver: true }),
          Animated.delay(100),
          Animated.timing(statusFade, { toValue: 1, duration: 300, useNativeDriver: true }),
        ]).start();
        setTimeout(() => setStatus(newText), 300);
      }, delay);
    };

    updateStatus('Memverifikasi Koneksi Aman...', 1500);
    updateStatus('Sinkronisasi Berita Kampus...', 3000);
    updateStatus('Menyiapkan Pengalaman Anda...', 4500);

    return () => clearInterval(typingInterval);
  }, []);

  // Interpolations
  const spinRight = rotateRight.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '360deg'] });
  const spinLeft = rotateLeft.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '360deg'] });
  const moveX = blobMove.interpolate({ inputRange: [0, 1], outputRange: [-20, 20] });

  return (
    <View style={styles.container}>
      {/* Dynamic Background Blobs */}
      <Animated.View style={[styles.blob, { transform: [{ translateX: moveX }] }]} />
      <Animated.View style={[styles.blobSmall, { transform: [{ translateY: moveX }] }]} />

      <Animated.View style={[styles.content, { opacity: fadeContent }]}>
        
        {/* PREMIUM LOGO HOUSING */}
        <View style={styles.logoWrapper}>
          {/* Inner Pulsing Image */}
          <Animated.View style={[styles.logoContainer, { transform: [{ scale: pulseAnim }] }]}>
            <Image 
              source={{ uri: 'https://raw.githubusercontent.com/Ranggis/Api-Image/main/nusput.png' }} 
              style={styles.logoImage}
              resizeMode="cover" 
            />
          </Animated.View>
          
          {/* Double Decorative Rings */}
          <Animated.View style={[styles.ringOuter, { transform: [{ rotate: spinRight }] }]} />
          <Animated.View style={[styles.ringInner, { transform: [{ rotate: spinLeft }] }]} />
        </View>

        {/* BRANDING */}
        <View style={styles.brandRow}>
          <Text style={styles.mainTitle}>{displayText}</Text>
          <Animated.View style={[styles.cursor, { opacity: cursorOpacity }]} />
        </View>

        {/* ANIMATED STATUS */}
        <Animated.View style={[styles.statusBox, { opacity: statusFade }]}>
          <Text style={styles.statusText}>{status}</Text>
        </Animated.View>

      </Animated.View>

      {/* REFINED FOOTER */}
      <View style={styles.footer}>
        <Text style={styles.footerBrand}>UNIVERSITAS NUSA PUTRA</Text>
        <View style={styles.footerIndicator}>
            <View style={styles.lineLeft} />
            <View style={styles.dot} />
            <View style={styles.lineRight} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  },
  blob: {
    position: 'absolute',
    width: width * 0.9,
    height: width * 0.9,
    backgroundColor: '#FFF1F2',
    borderRadius: width,
    top: height * 0.1,
    left: -width * 0.2,
    opacity: 0.5,
  },
  blobSmall: {
    position: 'absolute',
    width: width * 0.6,
    height: width * 0.6,
    backgroundColor: '#F8FAFC',
    borderRadius: width,
    bottom: height * 0.1,
    right: -width * 0.1,
    opacity: 0.8,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },
  logoWrapper: {
    width: width * 0.5,
    height: width * 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 60,
  },
  logoContainer: {
    width: width * 0.42,
    height: width * 0.42,
    borderRadius: (width * 0.42) / 2,
    backgroundColor: '#FFF',
    overflow: 'hidden',
    borderWidth: 4,
    borderColor: '#FFFFFF',
    zIndex: 5,
    ...Platform.select({
      ios: { shadowColor: "#E11D48", shadowOffset: { width: 0, height: 12 }, shadowOpacity: 0.2, shadowRadius: 15 },
      android: { elevation: 20 },
    }),
  },
  logoImage: {
    width: '100%',
    height: '100%',
  },
  ringOuter: {
    position: 'absolute',
    width: width * 0.52,
    height: width * 0.52,
    borderRadius: (width * 0.52) / 2,
    borderWidth: 1.5,
    borderColor: '#E11D48',
    borderStyle: 'dashed',
    opacity: 0.2,
  },
  ringInner: {
    position: 'absolute',
    width: width * 0.47,
    height: width * 0.47,
    borderRadius: (width * 0.47) / 2,
    borderWidth: 1,
    borderColor: '#94A3B8',
    borderStyle: 'dotted',
    opacity: 0.4,
  },
  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
  },
  mainTitle: {
    fontSize: 40,
    fontWeight: '900',
    color: '#0F172A',
    letterSpacing: -2,
  },
  cursor: {
    width: 4,
    height: 38,
    backgroundColor: '#E11D48',
    marginLeft: 8,
    borderRadius: 2,
  },
  statusBox: {
    marginTop: 15,
    height: 30,
    justifyContent: 'center',
  },
  statusText: {
    fontSize: 14,
    color: '#64748B',
    fontWeight: '700',
    letterSpacing: 0.5,
    textAlign: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: 60,
    alignItems: 'center',
  },
  footerBrand: {
    fontSize: 11,
    fontWeight: '900',
    color: '#94A3B8',
    letterSpacing: 2.5,
  },
  footerIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  lineLeft: { width: 30, height: 2, backgroundColor: '#F1F5F9' },
  lineRight: { width: 30, height: 2, backgroundColor: '#F1F5F9' },
  dot: { width: 6, height: 6, borderRadius: 3, backgroundColor: '#E11D48', marginHorizontal: 10 },
});