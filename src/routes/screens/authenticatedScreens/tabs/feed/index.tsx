import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button, H3, Separator, Text, XStack, YStack } from 'tamagui';
import { LinearGradient } from 'tamagui/linear-gradient';
import Tags from './tags';
import { useCallback, useMemo, useState } from 'react';
import { TagTypes } from '@/types/tags';
import { posts } from '@/db/posts';
import { PostType } from '@/types/posts';
import Post from './post';
import { FlatList } from 'react-native';
import EmptyState from '@/components/emptyState';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useToast } from 'react-native-toast-notifications';

const FeedScreen = () => {
  const [selectedTag, setSelectedTag] = useState<TagTypes | null>(null);

  const { top } = useSafeAreaInsets();

  const navigation = useNavigation();

  const toast = useToast();

  const onSelectTag = (tag: TagTypes) => setSelectedTag(tag);

  const renderItem = ({ item }: { item: PostType }) => <Post item={item} />;

  const filteredPosts = useMemo(() => {
    return posts.filter((item) => {
      if (selectedTag === 'all') return true;
      if (selectedTag) return item.tags.includes(selectedTag);
      if (!selectedTag) return item;
    });
  }, [selectedTag]);

  const handleLogout = () => {
    toast.show('See you later! 👋', {
      type: 'danger',
      placement: 'bottom',
      duration: 4000,
    });
    navigation.navigate('AuthScreens');
  };

  const ListHeaderComponent = useCallback(
    () => (
      <YStack space="$3">
        <YStack paddingHorizontal="$3" space="$1">
          <XStack justifyContent="space-between">
            <H3>Explore</H3>
            <XStack space="$2">
              <Button
                onPress={() => navigation.navigate('Alerts')}
                backgroundColor="$blue9"
                pressStyle={{ backgroundColor: '$blue8' }}
                height={22}
                icon={<FontAwesome name="bullhorn" size={16} color="white" />}
              />
              <Button
                onPress={handleLogout}
                backgroundColor="$red9"
                pressStyle={{ backgroundColor: '$red9' }}
                height={22}
                icon={<FontAwesome name="power-off" size={16} color="white" />}
              />
            </XStack>
          </XStack>
          <Text fontSize="$5">
            Connect and Support Local Businesses{' '}
            <Text fontWeight="bold">Near you</Text>.
          </Text>
        </YStack>
        <Tags onSelectTag={onSelectTag} />
      </YStack>
    ),
    [],
  );

  return (
    <LinearGradient
      flex={1}
      paddingTop={top + 16}
      colors={['$blue1', 'black']}
      start={[1, 1]}
      end={[0, 0.2]}
      position="relative">
      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={ListHeaderComponent}
        data={filteredPosts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={<EmptyState />}
        ItemSeparatorComponent={() => (
          <Separator borderWidth="$0.25" borderColor="white" opacity={0.5} />
        )}
      />
    </LinearGradient>
  );
};

export default FeedScreen;
