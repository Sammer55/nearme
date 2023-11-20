import { posts } from '@/db/posts';
import { ImageBackground } from 'react-native';
import {
  Avatar,
  Button,
  H6,
  Stack,
  Text,
  XStack,
  YStack,
  useTheme,
} from 'tamagui';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'tamagui/linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Comments from './comments';
import { useState } from 'react';
import schedulePushNotification from '@/utils/pushLocalNotification';
import { formatDistanceToNow } from 'date-fns';
import Input from '@/components/input';
import { useForm } from 'react-hook-form';

const PostScreen = ({ route }) => {
  const [isFollowing, setIsFollowing] = useState(false);

  const { bottom, top } = useSafeAreaInsets();
  const theme = useTheme();
  const navigation = useNavigation();
  const { control, watch } = useForm();

  const comment = watch('comment');

  const postId = route?.params?.postId;
  const post = posts.find((item) => item.id === postId);

  const createdAt =
    post &&
    formatDistanceToNow(new Date(post?.created_at), {
      addSuffix: true,
    });

  const handleFollowCompany = () => {
    if (!isFollowing) {
      schedulePushNotification({
        title: 'You subscribed to this company',
        body: `${post?.owner?.name} will notify you whenever there is news.`,
        seconds: 1,
      });
    }

    setIsFollowing(!isFollowing);
  };

  const handleNavigateToMaps = () => {
    const latitude = post?.owner?.latitude;
    const longitude = post?.owner?.longitude;

    navigation.navigate('Maps', { initialRegion: { latitude, longitude } });
  };

  return (
    <ImageBackground
      style={{ flex: 1, backgroundColor: theme.background.get() }}
      source={{ uri: post?.image }}>
      <LinearGradient
        paddingHorizontal="$3"
        paddingTop={top}
        paddingBottom={bottom}
        colors={['transparent', 'black']}
        start={[0.2, 0.3]}
        end={[0, 1]}
        flex={1}
        position="relative"
        justifyContent="space-between">
        <XStack
          backgroundColor="$background"
          paddingVertical="$2"
          paddingHorizontal="$2"
          borderRadius="$12"
          enterStyle={{
            y: 100,
          }}
          animation="bouncy"
          alignItems="center"
          justifyContent="space-between">
          <XStack space="$3" flex={1}>
            <Avatar circular>
              <Avatar.Image source={{ uri: post?.owner.avatar }} />
            </Avatar>
            <YStack flex={1}>
              <XStack space="$2">
                <H6 numberOfLines={1} flex={1} space="$2">
                  {post?.owner?.name}
                  <H6
                    pressStyle={{
                      opacity: 0.5,
                    }}
                    animation="bouncy"
                    color={isFollowing ? '$red11' : '$green11'}
                    onPress={handleFollowCompany}>
                    {isFollowing ? 'Unfollow' : 'Follow'}
                  </H6>
                </H6>
              </XStack>
              <Text>{createdAt}</Text>
            </YStack>
          </XStack>
          <Button
            marginRight="$2"
            onPress={() => navigation.goBack()}
            circular
            size="$1"
            icon={<FontAwesome name="chevron-down" size={10} color="white" />}
          />
        </XStack>
        <YStack space="$3">
          <XStack
            width="100%"
            justifyContent="space-between"
            alignItems="flex-end">
            <Comments postId={postId} />
            <YStack
              space
              enterStyle={{
                y: -100,
                scale: 1.2,
              }}
              animation="bouncy">
              <YStack
                pressStyle={{
                  opacity: 0.5,
                }}
                animation="bouncy"
                space="$1"
                alignItems="center">
                <FontAwesome5 name="heart" size={24} color="white" />
                <Text fontWeight="bold">{post?.like_count}</Text>
              </YStack>
              <YStack
                pressStyle={{
                  opacity: 0.5,
                }}
                animation="bouncy"
                space="$1"
                alignItems="center">
                <FontAwesome5 name="comment" size={24} color="white" />
                <Text fontWeight="bold">{post?.comment_count}</Text>
              </YStack>
              <Button
                pressStyle={{
                  opacity: 0.5,
                  backgroundColor: '$green7',
                }}
                onPress={handleNavigateToMaps}
                backgroundColor="$green8"
                animation="bouncy"
                alignItems="center"
                circular
                icon={
                  <FontAwesome5 name="map-marker-alt" size={16} color="white" />
                }
              />
            </YStack>
          </XStack>
          <Stack justifyContent="center">
            <Input
              name="comment"
              control={control}
              placeholder="Leave comments"
              borderRadius="$10"
            />
            <Button
              disabled={!comment}
              right="$2"
              circular
              position="absolute"
              size="$2.5"
              icon={<FontAwesome name="send" size={16} color="white" />}
            />
          </Stack>
        </YStack>
      </LinearGradient>
    </ImageBackground>
  );
};

export default PostScreen;
