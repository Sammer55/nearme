import { ScrollView } from 'tamagui';
import { TagTypes } from '@/types/tags';
import RenderTag from '@/utils/renderTag';
import { tags } from '@/db/tags';

type Props = {
  onSelectTag: (tag: TagTypes) => void;
};

const Tags = ({ onSelectTag }: Props) => {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal
      space="$2"
      contentContainerStyle={{
        paddingHorizontal: 16,
      }}>
      {tags.map((item: TagTypes) => (
        <RenderTag
          key={item}
          tag={item}
          onSelectTag={() => onSelectTag(item)}
        />
      ))}
    </ScrollView>
  );
};

export default Tags;
