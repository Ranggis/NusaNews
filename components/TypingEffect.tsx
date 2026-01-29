import React, { useState, useEffect } from 'react';
import { Text, StyleSheet } from 'react-native';

export default function TypingEffect({ title }: { title: string }) {
  const [displayedText, setDisplayedText] = useState('');
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setDisplayedText(title.slice(0, i));
      i++;
      if (i > title.length) clearInterval(timer);
    }, 100); // Kecepatan mengetik
    return () => clearInterval(timer);
  }, [title]);

  return (
    <Text style={styles.text}>
      {displayedText}<Text style={{color: '#E11D48'}}>_</Text>
    </Text>
  );
}

const styles = StyleSheet.create({
  text: { fontSize: 32, fontWeight: '900', color: '#1F2937', textAlign: 'center' }
});