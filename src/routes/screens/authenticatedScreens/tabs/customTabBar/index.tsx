import { Stack, Tabs } from 'tamagui';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useCallback, useState } from 'react';

type Props = BottomTabBarProps;

const CustomTabBar = (props: Props) => {
  const [currentScreen, setCurrentScreen] = useState('Feed');

  const { bottom } = useSafeAreaInsets();

  const { navigation } = props;

  const handleNavigation = (page: string) => {
    setCurrentScreen(page);
    navigation.navigate(page);
  };

  const CustomTab = useCallback(
    ({ page, children }: { page: string; children: React.ReactNode }) => {
      const isCurrent = currentScreen === page;
      return (
        <Tabs.Tab
          borderRadius={8}
          backgroundColor={isCurrent ? '$primary' : 'transparent'}
          onPress={() => handleNavigation(page)}
          flex={1}
          pressStyle={{
            opacity: 0.5,
          }}
          animation="bouncy"
          value={page}>
          <Stack
            animation="bouncy"
            enterStyle={{
              scale: isCurrent ? 1.5 : 1,
              rotate: isCurrent ? '15deg' : '0deg',
            }}>
            {children}
          </Stack>
        </Tabs.Tab>
      );
    },
    [currentScreen],
  );

  return (
    <Tabs
      backgroundColor="$background"
      paddingBottom={bottom - 16}
      defaultValue="feed"
      orientation="horizontal"
      flexDirection="column"
      width="100%">
      <Tabs.List
        borderTopWidth={2}
        borderColor="$backgroundHover"
        aria-label="Tabs"
        borderRadius={0}>
        <CustomTab page="Feed">
          <FontAwesome name="feed" size={16} color="white" />
        </CustomTab>
        <CustomTab page="List">
          <FontAwesome5 name="store-alt" size={16} color="white" />
        </CustomTab>
        <CustomTab page="Events">
          <FontAwesome name="calendar-o" size={16} color="white" />
        </CustomTab>
      </Tabs.List>
    </Tabs>
  );
};

export default CustomTabBar;
