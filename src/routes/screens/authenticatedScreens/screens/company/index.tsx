import { companies } from '@/db/companies';
import { FlatList, ImageBackground } from 'react-native';
import {
  Avatar,
  Button,
  H5,
  H6,
  Image,
  Sheet,
  Stack,
  Text,
  View,
  XStack,
  YStack,
} from 'tamagui';
import { BlurView } from 'expo-blur';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';
import schedulePushNotification from '@/utils/pushLocalNotification';
import { posts } from '@/db/posts';
import { PostType } from '@/types/posts';

const CompanyScreen = ({ route }) => {
  const [isRating, setIsRating] = useState(false);
  const [rating, setRating] = useState(0);

  const [isFollowing, setIsFollowing] = useState(false);

  const companyId = route?.params?.companyId;
  const company = companies.find((item) => item.id === companyId);

  const filteredPosts: PostType[] =
    posts.filter((item) => item.owner.id === companyId) || [];

  const navigation = useNavigation();

  const handleFollowCompany = () => {
    if (!isFollowing) {
      schedulePushNotification({
        title: 'You subscribed to this company',
        body: `${company?.name} will notify you whenever there is news.`,
        seconds: 1,
      });
    }

    setIsFollowing(!isFollowing);
  };

  const renderItem = ({ item }: { item: PostType }) => (
    <Stack
      onPress={() => navigation.navigate('Post', { postId: item.id })}
      enterStyle={{
        scale: 1.2,
        y: 200,
        opacity: 0,
      }}
      pressStyle={{ opacity: 0.8, y: -2 }}
      animation="bouncy">
      <Image
        height={100}
        aspectRatio={1}
        borderRadius="$3"
        source={{ uri: item?.image }}
      />
    </Stack>
  );

  const StarButton = ({ value }: { value: number }) => {
    return (
      <Button
        onPress={() => setRating(value)}
        borderWidth={1}
        borderColor="$yellow8"
        animation="bouncy"
        enterStyle={{
          rotate: rating >= value ? '5deg' : '0deg',
        }}
        pressStyle={{
          opacity: 0.5,
        }}
        circular
        icon={
          <FontAwesome
            name={rating >= value ? 'star' : 'star-o'}
            size={24}
            color="yellow"
          />
        }
      />
    );
  };

  return (
    <ImageBackground source={{ uri: company?.avatar }} style={{ flex: 1 }}>
      <BlurView intensity={100} style={{ flex: 1 }}>
        <YStack padding="$3" space="$6">
          <XStack alignItems="center" justifyContent="space-between">
            <Button
              onPress={() => navigation.goBack()}
              size="$2"
              circular
              icon={
                <FontAwesome5 name="chevron-left" size={16} color="white" />
              }
            />
            <Text
              fontSize="$6"
              fontWeight="bold"
              numberOfLines={1}
              flex={1}
              maxWidth="70%"
              textAlign="center">
              {company?.name}
            </Text>
            <XStack
              onPress={() => setIsRating(!isRating)}
              pressStyle={{
                scale: 1.1,
              }}
              animation="bouncy"
              space="$2"
              alignItems="center">
              <FontAwesome name="star" size={16} color="yellow" />
              <H6>{company?.rate}</H6>
            </XStack>
          </XStack>

          <YStack alignItems="center" space="$3">
            <Avatar
              borderWidth={2}
              borderColor="white"
              circular
              size="$14"
              alignSelf="center">
              <Avatar.Image
                accessibilityLabel={company?.name}
                src={company?.avatar}
              />
              <Avatar.Fallback delayMs={600} backgroundColor="$blue10" />
            </Avatar>
            <XStack alignItems="center" space="$3">
              <FontAwesome name="map-marker" size={18} color="white" />
              <H5>{company?.address}</H5>
            </XStack>
            <Button
              onPress={handleFollowCompany}
              backgroundColor={isFollowing ? '$green9' : '$background'}
              iconAfter={<FontAwesome5 name="bell" size={20} color="white" />}>
              {isFollowing ? 'Following the company' : 'Follow company'}
            </Button>
          </YStack>
          <FlatList
            contentContainerStyle={{
              paddingVertical: 16,
            }}
            data={filteredPosts}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            numColumns={3}
            columnWrapperStyle={{
              gap: 16,
              justifyContent: 'space-between',
            }}
          />
        </YStack>
        <Sheet
          open={isRating}
          zIndex={100_000}
          animation="lazy"
          defaultOpen
          snapPoints={[25]}>
          <Sheet.Handle />
          <Sheet.Frame
            padding="$4"
            position="relative"
            justifyContent="center"
            alignItems="center"
            space="$5">
            <XStack
              alignItems="center"
              justifyContent="space-around"
              width="100%">
              <Text fontSize="$5" fontWeight="bold">
                Evaluate local commerce
              </Text>
              <Button
                onPress={() => setIsRating(false)}
                circular
                size="$2"
                icon={
                  <FontAwesome5 name="chevron-down" size={16} color="white" />
                }
              />
            </XStack>

            <XStack space="$3">
              <StarButton value={1} />
              <StarButton value={2} />
              <StarButton value={3} />
              <StarButton value={4} />
              <StarButton value={5} />
            </XStack>
          </Sheet.Frame>
        </Sheet>
      </BlurView>
    </ImageBackground>
  );
};

export default CompanyScreen;
