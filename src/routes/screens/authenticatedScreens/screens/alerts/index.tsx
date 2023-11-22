import { alerts } from '@/db/alerts';
import { AlertType } from '@/types/alerts';
import { FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button, H3, Text, XStack, YStack } from 'tamagui';
import Alert from './alert';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const AlertsScreen = () => {
  const { top, bottom } = useSafeAreaInsets();

  const navigation = useNavigation();

  const renderItem = ({ item }: { item: AlertType }) => <Alert item={item} />;

  return (
    <YStack
      backgroundColor="$background"
      flex={1}
      paddingTop={top}
      paddingBottom={bottom}
      paddingHorizontal="$3"
      space="$3">
      <XStack justifyContent="space-between" alignItems="center">
        <YStack flex={1}>
          <H3>Alerts</H3>
          <Text>Alerts from the last week in your region.</Text>
        </YStack>
        <Button
          onPress={() => navigation.goBack()}
          size="$2"
          circular
          icon={<FontAwesome5 name="chevron-down" size={14} color="white" />}
        />
      </XStack>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={alerts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{
          gap: 8,
        }}
      />
    </YStack>
  );
};

export default AlertsScreen;
