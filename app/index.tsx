import React, { useEffect, useState, useRef } from 'react';
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import type { WebView as WebViewType } from 'react-native-webview';
import { fetchWebViewUrl } from '../src/services/FetchUrl';
import ReloadButton from '../components/ReloadButton';

const IndexPage = () => {
  const [uri, setUri] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const webViewRef = useRef<WebViewType>(null);

  const loadData = async () => {
    setLoading(true);
    const result = await fetchWebViewUrl(); // use the api
    if (result) setUri(result);
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleRefresh = () => {
    loadData();
  };

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!uri) {
    return (
      <View style={styles.centered}>
        <Text>Error: No WebView URL</Text>
      </View>
    );
  }

  const userAgent = 'Mozilla/5.0 (Linux; Android 10; SM-G975F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.120 Mobile Safari/537.36';

  return (
    <View style={{ flex: 1 }}>
      <WebView
        ref={webViewRef}
        userAgent={userAgent}
        source={{ uri }}
        originWhitelist={['*']}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        allowsInlineMediaPlayback={true}
        mediaPlaybackRequiresUserAction={false}
        startInLoadingState={true}
      />
      <ReloadButton onPress={handleRefresh} />
    </View>
  );
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default IndexPage;
