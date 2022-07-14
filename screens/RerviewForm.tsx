import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { theme } from '../theme/theme';
import { Formik } from 'formik';
import { ReviewData } from '../types';
import * as yup from 'yup';

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
            />
            <TextInput
              style={theme.input}
              placeholder="Review Body"
              onChangeText={props.handleChange('body')}
              value={props.values.body}
            />
            <TextInput
              style={theme.input}
              placeholder="Rating (1-5)"
              onChangeText={props.handleChange('rating')}
              value={props.values.rating.toString()}
              keyboardType="numeric"
            />
            <Button
              color="maroon"
              title="submit"
              onPress={() => {
                props.handleSubmit();
              }}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default RerviewForm;

const styles = StyleSheet.create({});
