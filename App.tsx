import { useFonts } from 'expo-font';
import { TamaguiProvider } from 'tamagui';
import config from './tamagui.config';
import Root from './src/routes';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });

  if (!loaded) return null;

  return (
    <TamaguiProvider config={config}>
      <StatusBar style="light" />
      <Root />
    </TamaguiProvider>
  );
}
