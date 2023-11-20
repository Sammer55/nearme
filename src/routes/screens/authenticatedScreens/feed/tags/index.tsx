import { ScrollView } from 'tamagui';
import { TagTypes, tags } from '../../../../../types/tags';
import RenderTag from '../../../../../utils/renderTag';

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
        <RenderTag tag={item} onSelectTag={() => onSelectTag(item)} />
      ))}
    </ScrollView>
  );
};

export default Tags;
