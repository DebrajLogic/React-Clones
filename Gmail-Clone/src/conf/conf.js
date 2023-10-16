const conf = {
    firebaseApiKey: String(import.meta.VITE_API_KEY),
    firebaseAuthDomain: String(import.meta.VITE_AUTH_DOMAIN),
    firebaseProjectId: String(import.meta.VITE_PROJECT_ID),
    firebaseStorageBucket: String(import.meta.VITE_STORAGE_BUCKET),
    firebaseMessagingSenderId: String(import.meta.VITE_MESSAGING_SENDING_ID),
    firebaseAppId: String(import.meta.VITE_APP_ID),
    firebaseMeasurementId: String(import.meta.VITE_MEASUREMENT_ID),
  };
  
  export default conf;
  