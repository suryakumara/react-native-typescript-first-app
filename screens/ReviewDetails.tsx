import { Text, View } from 'react-native';
import { PropsNavigation } from '../routes/StackNavigator';
import { theme } from '../theme/theme';

type ReviewDetailsPropsNavigationProps = PropsNavigation['navigation'];
type ReviewDetailsPropsRouterProps = PropsNavigation['route'];
const ReviewDetails = ({
  navigation,
  route,
}: {
  navigation: ReviewDetailsPropsNavigationProps;
  route: ReviewDetailsPropsRouterProps;
}) => {
  return (
    <View style={theme.container}>
      <Text>{route.params.title}</Text>
    </View>
  );
};

export default ReviewDetails;
