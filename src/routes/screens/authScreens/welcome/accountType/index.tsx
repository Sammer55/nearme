import { H6, Text, YStack } from 'tamagui';
import { Card } from 'tamagui';
import { LinearGradient } from 'tamagui/linear-gradient';

type Props = {
  title: string;
  description: string;
  icon: React.ReactNode;
  onPress: () => void;
};

const AccountType = ({ title, description, icon, onPress }: Props) => {
  return (
    <Card
      elevate
      enterStyle={{
        scale: 1.5,
        y: -10,
        opacity: 0,
      }}
      onPress={onPress}
      scale={1}
      hoverStyle={{ scale: 0.97 }}
      pressStyle={{ scale: 0.97 }}
      animation="bouncy"
      space="$3"
      alignItems="center"
      flexDirection="row"
      w="100%"
      p="$3"
      borderWidth={1}
      borderColor="$gray7">
      <LinearGradient
        colors={['$primary', '$purple8']}
        start={[0, 0.5]}
        end={[0.5, 0]}
        borderRadius="$8"
        h={40}
        w={40}
        alignItems="center"
        justifyContent="center">
        {icon}
      </LinearGradient>
      <YStack>
        <H6>{title}</H6>
        <Text>{description}</Text>
      </YStack>
    </Card>
  );
};

export default AccountType;