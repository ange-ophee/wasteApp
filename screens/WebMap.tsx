import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { WebView } from 'react-native-webview';

const WebMap = () => {
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Google Maps</title>
      <style>
        html, body, #map {
          height: 100%;
          margin: 0;
          padding: 0;
        }
      </style>
      <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY"></script>
      <script>
        function initMap() {
          new google.maps.Map(document.getElementById("map"), {
            center: { lat: 5.354, lng: 10.385 },
            zoom: 13
          });
        }
      </script>
    </head>
    <body onload="initMap()">
      <div id="map"></div>
    </body>
    </html>
  `;

  return (
    <View style={styles.container}>
      <WebView
        originWhitelist={['*']}
        source={{ html }}
        style={{ flex: 1 }}
      />
    </View>
  );
};

export default WebMap;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});