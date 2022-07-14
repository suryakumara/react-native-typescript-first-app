import { Formik } from 'formik';
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import * as yup from 'yup';
import FlatButton from '../components/FlatButton';
import { theme } from '../theme/theme';
import { ReviewData } from '../types';

interface ReviewFormProps {
  addReview: (review: ReviewData) => void;
}

const ReviewSchema = yup.object({
  title: yup.string().required().min(4),
  body: yup.string().required().min(8),
  rating: yup
    .number()
    .required()
    .test('is-num', 'Rating must be a number 1-5', (val) => {
      return val !== undefined && val < 6 && val > 0;
    }),
});

const RerviewForm: React.FC<ReviewFormProps> = ({ addReview }) => {
  return (
    <View style={theme.container}>
      <Formik
        initialValues={{ title: '', body: '', rating: 0, key: '' }}
        validationSchema={ReviewSchema}
        onSubmit={(value, action) => {
          addReview({ ...value, rating: Number(value.rating) });
          action.resetForm();
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={theme.input}
              placeholder="Review Title"
              onChangeText={props.handleChange('title')}
              value={props.values.title}
              onBlur={props.handleBlur('title')}
            />

            <Text style={theme.errorText}>
              {props.touched.title && props.errors.title}
            </Text>
            <TextInput
              style={theme.input}
              placeholder="Review Body"
              onChangeText={props.handleChange('body')}
              value={props.values.body}
              onBlur={props.handleBlur('body')}
            />
            <Text style={theme.errorText}>
              {props.touched.body && props.errors.body}
            </Text>
            <TextInput
              style={theme.input}
              placeholder="Rating (1-5)"
              onChangeText={props.handleChange('rating')}
              value={props.values.rating.toString()}
              keyboardType="numeric"
              onBlur={props.handleBlur('rating')}
            />
            <Text style={theme.errorText}>
              {props.touched.rating && props.errors.rating}
            </Text>

            <FlatButton text="submit" onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default RerviewForm;

const styles = StyleSheet.create({});
