import { Linking } from 'react-native';

type Props = {
  userLatitude: number;
  userLongitude: number;
  destinyLatitude: number;
  destinyLongitude: number;
};

const openGoogleMapsWithDirections = ({
  userLatitude,
  userLongitude,
  destinyLatitude,
  destinyLongitude,
}: Props) => {
  const uri = `https://www.google.com/maps/dir/?api=1&origin=${userLatitude},${userLongitude}&destination=${destinyLatitude},${destinyLongitude}`;

  Linking.openURL(uri);
};

export default openGoogleMapsWithDirections;
