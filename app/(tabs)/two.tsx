import React, { useState } from 'react';
import { 
  StyleSheet, Text, View, TouchableOpacity, 
  StatusBar, ScrollView, Image, Alert, BackHandler, 
  Platform, Modal, Dimensions, Animated 
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { 
  ShieldCheck, ChevronRight, Info, Bug, 
  LogOut, GraduationCap, Laptop, FileText, CheckCircle2
} from 'lucide-react-native';

const { width, height } = Dimensions.get('window');

export default function ProfileScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  
  // State untuk Custom Modal
  const [modalVisible, setModalVisible] = useState(false);

  // 1. FITUR: SIMULASI ERROR (Dengan Custom Aesthetic Pop-up)
  const simulasikanError = () => {
    const data: any = null;
    // Log ini akan muncul di Flipper tepat sebelum crash
    console.log("--- ATTEMPTING TO ACCESS NULL OBJECT ---");
    // Pemicu runtime error
    return data.system.forceCrash();
  };

  // 2. FITUR: LAPORAN DEBUGGING
  const bukaLaporan = () => {
    router.push('/debug');
  };

  // 3. FITUR: KELUAR APLIKASI
  const keluarAplikasi = () => {
    Alert.alert(
      "Konfirmasi", 
      "Apakah Anda yakin ingin menutup aplikasi?", 
      [
        { text: "Batal", style: "cancel" },
        { 
          text: "Keluar", 
          style: "destructive",
          onPress: () => Platform.OS === 'android' ? BackHandler.exitApp() : router.replace('/')
        }
      ]
    );
  };

  return (
    <View style={styles.mainContainer}>
      <StatusBar barStyle="dark-content" />
      
      {/* Background Decorator */}
      <View style={styles.topCircle} />

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ 
          paddingTop: insets.top + 30,
          paddingBottom: insets.bottom + 40 
        }}
      >
        {/* HEADER SECTION */}
        <View style={styles.header}>
          <View style={styles.avatarWrapper}>
            <View style={styles.avatarCircle}>
              <Image 
                source={{ uri: 'https://raw.githubusercontent.com/Ranggis/Api-Image/main/ranggisss.jpg' }} 
                style={styles.profileImg}
              />
            </View>
            <View style={styles.verifiedBadge}>
              <ShieldCheck color="white" size={12} strokeWidth={3} />
            </View>
          </View>
          
          <Text style={styles.userName}>Ranggis</Text>
          <View style={styles.subInfoRow}>
            <GraduationCap color="#64748B" size={14} />
            <Text style={styles.userNim}>20230040197</Text>
          </View>
          <View style={styles.univContainer}>
            <Text style={styles.univText}>UNIVERSITAS NUSA PUTRA</Text>
          </View>
        </View>

        <View style={styles.contentContainer}>
          {/* SECTION: SYSTEM INFO */}
          <Text style={styles.sectionLabel}>Sistem & Keamanan</Text>
          <View style={styles.surfaceCard}>
            <View style={styles.menuItem}>
              <View style={[styles.iconBox, {backgroundColor: '#F0F9FF'}]}>
                <Info color="#0EA5E9" size={20} />
              </View>
              <View style={styles.menuContent}>
                <Text style={styles.menuTitle}>Versi Aplikasi</Text>
                <Text style={styles.menuSubTitle}>v1.0.0 Stable Build</Text>
              </View>
            </View>
            <View style={styles.divider} />
            <View style={styles.menuItem}>
              <View style={[styles.iconBox, {backgroundColor: '#F0FDF4'}]}>
                <ShieldCheck color="#22C55E" size={20} />
              </View>
              <View style={styles.menuContent}>
                <Text style={styles.menuTitle}>Enkripsi</Text>
                <Text style={styles.menuSubTitle}>AES-256 Bit Active</Text>
              </View>
            </View>
          </View>

          {/* SECTION: DEVELOPER TOOLS */}
          <View style={styles.devHeader}>
            <Laptop color="#0F172A" size={16} />
            <Text style={styles.devHeaderText}>Developer Menu</Text>
          </View>

          <TouchableOpacity 
            style={styles.debugCard} 
            onPress={simulasikanError}
            activeOpacity={0.9}
          >
            <View style={styles.debugInfo}>
              <Text style={styles.debugTitle}>Simulasi Runtime Error</Text>
              <Text style={styles.debugDesc}>Klik untuk memicu handling optional chaining.</Text>
            </View>
            <View style={styles.bugIconCircle}>
              <Bug color="white" size={20} />
            </View>
          </TouchableOpacity>

          {/* SECTION: CONTROLS */}
          <Text style={[styles.sectionLabel, { marginTop: 30 }]}>Kontrol Laporan</Text>
          <View style={styles.surfaceCard}>
            <TouchableOpacity style={styles.pressableItem} onPress={bukaLaporan}>
              <View style={[styles.iconBox, {backgroundColor: '#F5F3FF'}]}>
                <FileText color="#8B5CF6" size={20} />
              </View>
              <Text style={styles.pressableText}>Lihat Laporan Debugging</Text>
              <ChevronRight color="#CBD5E1" size={18} />
            </TouchableOpacity>

            <View style={styles.divider} />

            <TouchableOpacity style={styles.pressableItem} onPress={keluarAplikasi}>
              <View style={[styles.iconBox, {backgroundColor: '#FFF1F2'}]}>
                <LogOut color="#E11D48" size={20} />
              </View>
              <Text style={[styles.pressableText, { color: '#E11D48' }]}>Keluar Aplikasi</Text>
              <ChevronRight color="#FFE4E6" size={18} />
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.footer}>NusaNews Pro • Build Session 14</Text>
      </ScrollView>

      {/* --- CUSTOM SUCCESS MODAL (AESTHETIC ALERT) --- */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.successIconWrapper}>
              <CheckCircle2 color="#10B981" size={50} strokeWidth={2.5} />
            </View>
            <Text style={styles.modalTitle}>Sistem Aman</Text>
            <Text style={styles.modalMessage}>
              Data null telah ditangani secara aman dengan teknik <Text style={{fontWeight: 'bold', color: '#E11D48'}}>Optional Chaining</Text>. Aplikasi terhindar dari crash.
            </Text>
            <TouchableOpacity 
              style={styles.modalButton} 
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.modalButtonText}>Mengerti</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: { flex: 1, backgroundColor: '#FFFFFF' },
  topCircle: { position: 'absolute', top: -100, right: -50, width: 250, height: 250, borderRadius: 125, backgroundColor: '#FFF1F2', opacity: 0.5 },
  contentContainer: { paddingHorizontal: 24 },
  header: { alignItems: 'center', marginBottom: 40 },
  avatarWrapper: { marginBottom: 18 },
  avatarCircle: { width: 110, height: 110, borderRadius: 55, backgroundColor: '#F8FAFC', padding: 3, borderWidth: 1, borderColor: '#F1F5F9', elevation: 10, shadowColor: '#E11D48', shadowOpacity: 0.1, shadowRadius: 15 },
  profileImg: { width: '100%', height: '100%', borderRadius: 55 },
  verifiedBadge: { position: 'absolute', bottom: 5, right: 5, backgroundColor: '#E11D48', width: 24, height: 24, borderRadius: 12, justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: '#FFF' },
  userName: { fontSize: 26, fontWeight: '900', color: '#0F172A', letterSpacing: -0.5 },
  subInfoRow: { flexDirection: 'row', alignItems: 'center', marginTop: 6 },
  userNim: { fontSize: 14, color: '#64748B', marginLeft: 6, fontWeight: '600' },
  univContainer: { backgroundColor: '#F1F5F9', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 8, marginTop: 12 },
  univText: { fontSize: 10, fontWeight: '800', color: '#475569', letterSpacing: 1 },
  sectionLabel: { fontSize: 11, fontWeight: '800', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 12, marginLeft: 4 },
  surfaceCard: { backgroundColor: '#FFF', borderRadius: 24, paddingHorizontal: 16, borderWidth: 1, borderColor: '#F1F5F9' },
  menuItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 16 },
  pressableItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 16 },
  iconBox: { width: 42, height: 42, borderRadius: 14, justifyContent: 'center', alignItems: 'center' },
  menuContent: { marginLeft: 16 },
  menuTitle: { fontSize: 11, color: '#94A3B8', fontWeight: '800', textTransform: 'uppercase' },
  menuSubTitle: { fontSize: 15, color: '#1F2937', fontWeight: '700', marginTop: 1 },
  pressableText: { fontSize: 15, fontWeight: '700', color: '#475569', marginLeft: 16, flex: 1 },
  divider: { height: 1, backgroundColor: '#F8FAFC' },
  devHeader: { flexDirection: 'row', alignItems: 'center', marginTop: 35, marginBottom: 15, marginLeft: 4 },
  devHeaderText: { fontSize: 12, fontWeight: '900', color: '#0F172A', textTransform: 'uppercase', marginLeft: 8, letterSpacing: 1 },
  debugCard: { backgroundColor: '#0F172A', borderRadius: 24, padding: 22, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', elevation: 8, shadowColor: '#0F172A', shadowOpacity: 0.2, shadowRadius: 15 },
  debugInfo: { flex: 1 },
  debugTitle: { fontSize: 16, fontWeight: '800', color: '#FFF' },
  debugDesc: { fontSize: 12, color: '#94A3B8', marginTop: 4, lineHeight: 18 },
  bugIconCircle: { width: 48, height: 48, borderRadius: 24, backgroundColor: '#E11D48', justifyContent: 'center', alignItems: 'center' },
  footer: { textAlign: 'center', color: '#CBD5E1', fontSize: 11, fontWeight: '800', marginTop: 40, letterSpacing: 1.5 },

  // MODAL STYLES (Aesthetic Alert)
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(15, 23, 42, 0.6)', // Gelap transparan (Slate blur)
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: width * 0.85,
    backgroundColor: '#FFFFFF',
    borderRadius: 32,
    padding: 30,
    alignItems: 'center',
    elevation: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 15,
  },
  successIconWrapper: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#F0FDF4',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: '900',
    color: '#0F172A',
    marginBottom: 10,
  },
  modalMessage: {
    fontSize: 15,
    color: '#64748B',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 30,
  },
  modalButton: {
    backgroundColor: '#0F172A',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 16,
    width: '100%',
    alignItems: 'center',
  },
  modalButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
  }
});