import React, { useState, useEffect } from 'react';
import { Platform, View, ActivityIndicator } from 'react-native';

const MapScreen = () => {
  const [Component, setComponent] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    const loadMap = async () => {
      const module = Platform.OS === 'web'
        ? await import('./WebMap')
        : await import('./NativeMapScreen');
      setComponent(() => module.default);
    };

    loadMap();
  }, []);

  if (!Component) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return <Component />;
};

export default MapScreen;