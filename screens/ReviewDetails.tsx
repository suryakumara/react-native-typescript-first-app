import {
  Text,
  View,
  Image,
  StyleSheet,
  ImageSourcePropType,
} from 'react-native';
import { PropsNavigation } from '../routes/StackNavigator';
import { theme, images } from '../theme/theme';

type ReviewDetailsPropsNavigationProps = PropsNavigation['navigation'];
type ReviewDetailsPropsRouterProps = PropsNavigation['route'];

const DetailItem = ({ route }: { route: ReviewDetailsPropsRouterProps }) => {
  const rating: string = route.params.rating.toString();

  return (
    <View style={theme.container}>
      <View style={styles.card}>
        <Text style={theme.titleText}>{route.params.title}</Text>
        <Text style={theme.titleText}>{route.params.body}</Text>
        <View style={styles.rating}>
          <Text>GameZone rating : </Text>
          <Image source={images.ratings[rating]} />
        </View>
      </View>
    </View>
  );
};

const ReviewDetails = ({
  route,
}: {
  navigation: ReviewDetailsPropsNavigationProps;
  route: ReviewDetailsPropsRouterProps;
}) => {
  return <DetailItem route={route} />;
};

export default ReviewDetails;

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eeee',
  },
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
    padding: 10,
  },
});
