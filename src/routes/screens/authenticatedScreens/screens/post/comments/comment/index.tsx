import { CommentType } from '@/types/comments';
import { Avatar, H6, Text, XStack, YStack } from 'tamagui';

type Props = {
  item: CommentType;
};

const Comment = ({ item }: Props) => {
  return (
    <XStack
      enterStyle={{
        y: 100,
        scale: 1.2,
      }}
      animation="bouncy"
      space="$3">
      <Avatar circular>
        <Avatar.Image source={{ uri: item.owner.avatar }} />
      </Avatar>
      <YStack marginRight="$2" flex={1}>
        <H6>{item.owner.name}</H6>
        <Text flex={1}>{item.description}</Text>
      </YStack>
    </XStack>
  );
};

export default Comment;
