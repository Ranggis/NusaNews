import React from 'react';
import { View, Text, StyleSheet, ScrollView, Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useFetchTest } from "../../hooks/useFetchTest";
import { 
  Activity, 
  Cpu, 
  Zap, 
  Settings, 
  AlertCircle, 
  CheckCircle2, 
  ShieldCheck 
} from "lucide-react-native";

export default function DebugScreen() {
  const { status, errorMessage } = useFetchTest();
  const insets = useSafeAreaInsets(); // Hook untuk area aman

  const isError = status === "GAGAL";

  return (
    <View style={[styles.mainContainer, { backgroundColor: '#F8FAFC' }]}>
      {/* ScrollView dengan padding top dan bottom yang dinamis */}
      <ScrollView 
        contentContainerStyle={[
          styles.scrollContent, 
          { 
            paddingTop: insets.top + 20, // Jarak aman dari notch/kamera
            paddingBottom: insets.bottom + 140 // Jarak aman agar tidak tertutup Tab Bar melayang
          }
        ]}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.header}>System Dashboard</Text>
        <Text style={styles.subHeader}>Session 14 Debugging & Optimization</Text>

        {/* 1. API STATUS SECTION (DYNAMIC) */}
        <View style={[styles.statusCard, isError ? styles.cardError : styles.cardSuccess]}>
          <View style={styles.cardHeaderRow}>
            <Activity color={isError ? "#E11D48" : "#10B981"} size={24} />
            <Text style={[styles.cardTitle, { color: isError ? "#E11D48" : "#065F46" }]}>
              Network Status
            </Text>
          </View>
          
          <View style={styles.statusBadge}>
            <Text style={[styles.statusLabel, { color: isError ? "#E11D48" : "#10B981" }]}>
              {status === "BERHASIL" ? "SERVICE ONLINE" : "CONNECTION ERROR"}
            </Text>
          </View>

          {errorMessage && (
            <View style={styles.errorContainer}>
              <AlertCircle color="#E11D48" size={16} />
              <Text style={styles.errorText}>{errorMessage}</Text>
            </View>
          )}
        </View>

        {/* 2. OPTIMIZATION TECHNIQUES SECTION */}
        <View style={styles.card}>
          <View style={styles.cardHeaderRow}>
            <Zap color="#E11D48" size={24} />
            <Text style={styles.cardTitleText}>Applied Optimizations</Text>
          </View>
          
          <View style={styles.listItem}>
            <CheckCircle2 color="#10B981" size={18} />
            <View style={styles.listTextContainer}>
              <Text style={styles.listTitle}>React.memo</Text>
              <Text style={styles.listDesc}>Mencegah re-render komponen NewsCard secara redundan.</Text>
            </View>
          </View>

          <View style={styles.listItem}>
            <CheckCircle2 color="#10B981" size={18} />
            <View style={styles.listTextContainer}>
              <Text style={styles.listTitle}>useCallback & useMemo</Text>
              <Text style={styles.listDesc}>Memastikan integritas referensi fungsi dan nilai komputasi.</Text>
            </View>
          </View>

          <View style={styles.listItem}>
            <CheckCircle2 color="#10B981" size={18} />
            <View style={styles.listTextContainer}>
              <Text style={styles.listTitle}>FlatList Performance</Text>
              <Text style={styles.listDesc}>Implementasi initialNumToRender & windowSize.</Text>
            </View>
          </View>
        </View>

        {/* 3. DEBUG TOOLS SECTION */}
        <View style={styles.card}>
          <View style={styles.cardHeaderRow}>
            <Settings color="#1F2937" size={24} />
            <Text style={styles.cardTitleText}>Active Debug Tools</Text>
          </View>
          
          <View style={styles.toolRow}>
            <View style={styles.toolItem}>
              <Cpu color="#64748B" size={20} />
              <Text style={styles.toolLabel}>Flipper Logs</Text>
            </View>
            <View style={styles.toolItem}>
              <ShieldCheck color="#64748B" size={20} />
              <Text style={styles.toolLabel}>DevTools</Text>
            </View>
          </View>
        </View>

        <Text style={styles.footer}>App Integrity Verified • v1.0.0</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: { 
    flex: 1, 
  },
  scrollContent: { 
    paddingHorizontal: 24,
  },
  header: {
    fontSize: 28,
    fontWeight: "900",
    color: "#1F2937",
    letterSpacing: -1,
  },
  subHeader: {
    fontSize: 14,
    color: "#64748B",
    marginBottom: 30,
    fontWeight: "600"
  },
  card: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 24,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#F1F5F9",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
  statusCard: {
    padding: 20,
    borderRadius: 24,
    marginBottom: 20,
    borderWidth: 1.5,
  },
  cardSuccess: {
    backgroundColor: "#F0FDF4",
    borderColor: "#BBF7D0",
  },
  cardError: {
    backgroundColor: "#FFF1F2",
    borderColor: "#FECDD3",
  },
  cardHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "800",
    marginLeft: 10,
    textTransform: 'uppercase',
    letterSpacing: 1
  },
  cardTitleText: {
    fontSize: 18,
    fontWeight: "800",
    color: "#1F2937",
    marginLeft: 10,
  },
  statusBadge: {
    backgroundColor: 'white',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  statusLabel: {
    fontSize: 13,
    fontWeight: "900",
  },
  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: 'rgba(225, 29, 72, 0.1)',
  },
  errorText: {
    color: "#E11D48",
    marginLeft: 8,
    fontSize: 13,
    fontWeight: "600",
    flex: 1
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 18,
  },
  listTextContainer: {
    marginLeft: 12,
    flex: 1,
  },
  listTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#334155",
  },
  listDesc: {
    fontSize: 13,
    color: "#64748B",
    lineHeight: 18,
    marginTop: 2,
  },
  toolRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  toolItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
    padding: 12,
    borderRadius: 12,
    marginHorizontal: 4,
  },
  toolLabel: {
    fontSize: 13,
    fontWeight: "700",
    color: "#475569",
    marginLeft: 8,
  },
  footer: {
    textAlign: 'center',
    color: '#CBD5E1',
    fontSize: 11,
    fontWeight: '800',
    marginTop: 20,
    textTransform: 'uppercase',
    letterSpacing: 1
  }
});