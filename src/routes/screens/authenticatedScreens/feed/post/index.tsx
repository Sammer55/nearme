import { Avatar, H6, Image, Stack, Text, XStack, YStack } from 'tamagui';
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';
import { PostType } from '../../../../../types/posts';
import { formatDistanceToNow } from 'date-fns';
import { useNavigation } from '@react-navigation/native';
import Tag from '../../../../../components/tag';

type Props = {
  item: PostType;
};

const Post = ({ item }: Props) => {
  const navigation = useNavigation();

  const createdAt = formatDistanceToNow(new Date(item.created_at), {
    addSuffix: false,
  });

  const handleGoToUser = () =>
    navigation.navigate('User', { userId: item?.owner?.id });

  const Tags = () => {
    if (item?.tags.length <= 0) return;
    return item?.tags?.map((item: string) => (
      <Tag
        size="$2"
        item={{ label: item, color: '$gray1' }}
        onSelectTag={() => {}}
      />
    ));
  };

  return (
    <YStack
      enterStyle={{
        scale: 1.05,
        x: 100,
        opacity: 0,
      }}
      animation="lazy"
      marginHorizontal="$3"
      space="$3"
      marginVertical="$3"
      zIndex={1}>
      <XStack>
        <XStack
          onPress={handleGoToUser}
          pressStyle={{ opacity: 0.5 }}
          animation="bouncy"
          flex={1}
          alignItems="center"
          space="$2">
          <Avatar circular size="$3">
            <Avatar.Image
              accessibilityLabel={item?.owner?.name}
              src={item?.owner?.avatar}
            />
            <Avatar.Fallback delayMs={600} backgroundColor="$blue10" />
          </Avatar>
          <YStack>
            <H6>{item?.owner?.name}</H6>
            <Text>{item?.owner?.neighborhood}</Text>
          </YStack>
        </XStack>

        <Text>{createdAt}</Text>
      </XStack>

      <YStack space="$1.5">
        {!!item?.description && <Text>{item?.description}</Text>}
        <Tags />
      </YStack>
      {!!item?.image && (
        <Stack
          animation="lazy"
          scale={1}
          pressStyle={{ scale: 1.3 }}
          zIndex={9}>
          <Image
            borderRadius="$4"
            source={{ uri: item?.image }}
            w="100%"
            h={300}
          />
        </Stack>
      )}
      <XStack space alignItems="center">
        <XStack
          alignItems="center"
          space="$2"
          pressStyle={{ opacity: 0.5 }}
          animation="bouncy">
          <FontAwesome5 name="heart" size={24} color="white" />
          <Text>{item?.like_count}</Text>
        </XStack>
        <XStack
          alignItems="center"
          space="$2"
          pressStyle={{ opacity: 0.5 }}
          animation="bouncy">
          <FontAwesome5 name="comment" size={24} color="white" />
          <Text>{item?.comment_count}</Text>
        </XStack>
      </XStack>
    </YStack>
  );
};

export default Post;
