import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { Camera } from 'expo-camera';

const ARScreen = () => {
  console.log("ARScreen called");
  const arHtml = `
  <html>
  <head>
    <script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js"></script>
    <script src="https://raw.githack.com/AR-js-org/AR.js/master/three.js/build/ar.js"></script>
  </head>
  <body style="margin: 0; overflow: hidden;">
    <a-scene embedded arjss="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;">
      <a-marker preset="hiro">
        <a-box position='0 0.5 0' material='color: red;'></a-box>
      </a-marker>
      <a-entity camera></a-entity>
    </a-scene>
  </body>
</html>
  `;

  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);

  const webViewRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleLoadEnd = () => {
    console.log("handleLoadEnd called");
    const injectScript = `
      const scene = document.querySelector('a-scene');
      const marker = document.querySelector('a-marker');
      if (scene && marker) {
        scene.style.display = 'block';
        marker.addEventListener('markerFound', () => {
          scene.emit('arjs-marker-found');
        });
        marker.addEventListener('markerLost', () => {
          scene.emit('arjs-marker-lost');
        });
      }
    `;
    webViewRef.current.injectJavaScript(injectScript);
    console.log("webViewRef", webViewRef);

  };

  if (hasPermission === null) {
    return <View style={styles.container}><Text>Demander l'autorisation d'utiliser la caméra...</Text></View>;
  }
  if (hasPermission === false) {
    return <View style={styles.container}><Text>L'autorisation d'utiliser la caméra a été refusée</Text></View>;
  }

  return (
    <View style={styles.container}>
       <Camera style={styles.camera} ref={setCameraRef}>
       <WebView
          ref={webViewRef}
          originWhitelist={['*']}
          source={{ html: arHtml }}
          onLoadEnd={handleLoadEnd}
          mediaPlaybackRequiresUserAction={false}
  />
      </Camera>
    </View>
  );
};

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonTouchable: {
    padding: 16
  }
});

export default ARScreen;