import React from 'react';
import { TouchableOpacity, Image, View, Text, StyleSheet, Dimensions } from 'react-native';
import { News } from '../constants/Types';
import { Calendar, ChevronRight, Bookmark } from 'lucide-react-native';

interface Props {
  item: News;
  onPress: () => void;
}

const { width } = Dimensions.get('window');

const NewsCard = React.memo(({ item, onPress }: Props) => {
  return (
    <TouchableOpacity 
      style={styles.card} 
      onPress={onPress} 
      activeOpacity={0.95}
    >
      {/* Container Gambar */}
      <View style={styles.imageWrapper}>
        <Image source={{ uri: item.image }} style={styles.image} />
        {/* Badge Kategori yang Mengambang di Atas Gambar */}
        <View style={styles.floatingBadge}>
          <Text style={styles.categoryText}>{item.category}</Text>
        </View>
        <TouchableOpacity style={styles.bookmarkBtn}>
          <Bookmark color="white" size={16} fill="white" />
        </TouchableOpacity>
      </View>

      {/* Konten Teks */}
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
        
        <Text style={styles.description} numberOfLines={2}>
          {item.content}
        </Text>

        {/* Footer Kartu */}
        <View style={styles.footer}>
          <View style={styles.dateWrapper}>
            <Calendar color="#94A3B8" size={14} />
            <Text style={styles.dateText}>{item.date}</Text>
          </View>
          
          <View style={styles.readMoreWrapper}>
            <Text style={styles.readMoreText}>Baca Selengkapnya</Text>
            <ChevronRight color="#E11D48" size={16} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  card: { 
    backgroundColor: '#fff', 
    borderRadius: 24, 
    marginBottom: 24, 
    overflow: 'hidden',
    // Shadow yang lebih soft untuk tampilan premium
    elevation: 8, 
    shadowColor: '#000', 
    shadowOpacity: 0.1, 
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 15,
  },
  imageWrapper: {
    position: 'relative',
  },
  image: { 
    width: '100%', 
    height: 200, 
    resizeMode: 'cover' 
  },
  floatingBadge: {
    position: 'absolute',
    top: 15,
    left: 15,
    backgroundColor: 'rgba(225, 29, 72, 0.9)', // Merah Nusa Putra dengan transparansi
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    backdropFilter: 'blur(10px)', // Hanya ngefek di iOS jika pakai library tambahan, tapi fallbacknya tetap bagus
  },
  categoryText: { 
    color: '#FFF', 
    fontWeight: '800', 
    fontSize: 10, 
    letterSpacing: 0.5,
    textTransform: 'uppercase'
  },
  bookmarkBtn: {
    position: 'absolute',
    top: 15,
    right: 15,
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 8,
    borderRadius: 12,
  },
  content: { 
    padding: 20,
  },
  title: { 
    fontSize: 20, 
    fontWeight: '800', 
    color: '#0F172A', 
    lineHeight: 28,
    marginBottom: 8 
  },
  description: {
    fontSize: 14,
    color: '#64748B',
    lineHeight: 20,
    marginBottom: 16,
  },
  footer: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: '#F1F5F9',
  },
  dateWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateText: { 
    fontSize: 12, 
    color: '#94A3B8', 
    marginLeft: 6,
    fontWeight: '600'
  },
  readMoreWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  readMoreText: {
    fontSize: 12,
    color: '#E11D48',
    fontWeight: '700',
    marginRight: 4,
  }
});

export default NewsCard;