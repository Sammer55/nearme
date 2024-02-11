import { FlatList } from 'react-native';
import Comment from './comment';
import { comments } from '@/db/comments';
import { CommentType } from '@/types/comments';

type Props = {
  postId: number;
};

const Comments = ({ postId }: Props) => {
  const filteredComments = comments.filter((item) => item.postId === postId);

  const renderItem = ({ item }: { item: CommentType }) => (
    <Comment item={item} />
  );

  return (
    <FlatList
      data={filteredComments}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      contentContainerStyle={{
        gap: 8,
      }}
    />
  );
};

export default Comments;
