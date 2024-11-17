import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { store } from './src/store/store';
import Navigation from './src/navigation';

export default function App() {
  return (
    <SafeAreaProvider>
      <ReduxProvider store={store}>
        <PaperProvider>
          <Navigation />
        </PaperProvider>
      </ReduxProvider>
    </SafeAreaProvider>
  );
}