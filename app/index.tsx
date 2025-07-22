import { View } from 'react-native';
import { WebView } from 'react-native-webview';

const IndexPage = () => {
  return (
    <View style={{ flex: 1 }}>
      <WebView
        source={{
          uri: 'https://purple-coast-0984cd300.6.azurestaticapps.net/',
        }}
        originWhitelist={['*']}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        allowsInlineMediaPlayback={true}
        mediaPlaybackRequiresUserAction={false}
        startInLoadingState={true}
      />
    </View>
  );
};

export default IndexPage;
