import { useState, useEffect } from 'react';

export const useFetchTest = () => {
  const [status, setStatus] = useState("PENDING");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    // Simulasi mengecek koneksi API
    setTimeout(() => {
      // Kita set GAGAL untuk simulasi debugging
      setStatus("GAGAL");
      setErrorMessage("Network Error: 404 Not Found (Simulasi Flipper)");
    }, 2000);
  }, []);

  return { status, errorMessage };
};