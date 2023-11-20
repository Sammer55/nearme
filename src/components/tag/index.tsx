import { TagType } from '../../types/tags';
import { Button, ButtonProps } from 'tamagui';

type Props = {
  onSelectTag: (tag: TagType) => void;
  item: TagType;
} & ButtonProps;

const Tag = ({ onSelectTag, item, size = '$3', ...rest }: Props) => {
  const hoverStyle = { scale: 0.95, bg: item.color, opacity: 0.5 };

  return (
    <Button
      {...rest}
      onPress={() => onSelectTag(item)}
      key={item.label}
      scale={1}
      animation="bouncy"
      pressStyle={hoverStyle}
      width="$10"
      size={size}
      bg={item.color}>
      {item.label}
    </Button>
  );
};

export default Tag;
