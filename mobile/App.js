import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar />
        <WebView
          source={{ uri: 'https://easy-hscode.com/' }}
          onError={(e) => console.log('WebView Error:', e.nativeEvent)}
          onHttpError={(e) => console.log('HTTP Error:', e.nativeEvent)}
          startInLoadingState={true}
          javaScriptEnabled={true}
          domStorageEnabled={true}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}