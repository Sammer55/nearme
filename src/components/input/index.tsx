import { useState } from 'react';
import { Controller } from 'react-hook-form';
import { Input as ThamaguiInput, InputProps, Stack, Button } from 'tamagui';
import { FontAwesome5 } from '@expo/vector-icons';

type Props = {
  control: any;
  name: string;
  secureTextEntry?: boolean;
} & InputProps

const Input = ({ control, name, secureTextEntry = false, ...rest }: Props) => {
  const [passwordIsVisible, setPasswordIsVisible] = useState(secureTextEntry);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => {
        return (
          <Stack position="relative" justifyContent="center">
            <ThamaguiInput
              placeholderTextColor="$gray11"
              borderWidth={1}
              value={value}
              onChangeText={onChange}
              secureTextEntry={passwordIsVisible}
              {...rest}
            />
            {secureTextEntry && (
              <Button
                onPress={() => setPasswordIsVisible(!passwordIsVisible)}
                circular
                position="absolute"
                right={8}
                size="$2"
                icon={
                  <FontAwesome5
                    name={passwordIsVisible ? 'eye' : 'eye-slash'}
                    size={12}
                    color="white"
                  />
                }
              />
            )}
          </Stack>
        );
      }}
    />
  );
};

export default Input;
