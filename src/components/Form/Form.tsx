import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Button from '../Library/Button';
import Input from '../Library/Input';
import Select from '../Library/Select';
import './Form.css';

function App() {
    const initialValues: formValuesTypes = {
        firstName: '',
        lastName: '',
        study: ''
    };

    return (
        <div className="root">
            <Formik
                initialValues={initialValues}
                validationSchema={Yup.object().shape({
                    firstName: Yup.string().required('First name is required'),
                    lastName: Yup.string().required('Last name is required'),
                    study: Yup.string().required('Study is required'),
                })}
                onSubmit={(values, actions) => {
                    console.log(values);
                    actions.setSubmitting(false);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    dirty,
                    isSubmitting,
                    isValid,
                    handleChange,
                    handleBlur,
                }) => {
                    return (
                        <>
                            <Form>
                                <Input
                                    id="firstName"
                                    className="input"
                                    label="First Name"
                                    required
                                    value={values.firstName}
                                    errors={errors}
                                    touched={touched}
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                />
                                <Input
                                    id="lastName"
                                    className="input"
                                    label="Last Name"
                                    required
                                    value={values.lastName}
                                    errors={errors}
                                    touched={touched}
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                />
                                <Select
                                    id="study"
                                    options={[
                                        { value: '', display: 'Choose One' },
                                        { value: 'bling', display: 'Bling' },
                                        { value: 'sing', display: 'Sling' },
                                    ]}
                                    label="Study"
                                    required
                                    errors={errors}
                                    touched={touched}
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                />
                                <Button
                                    children="Reset"
                                    type="reset"
                                    outline
                                    disabled={!dirty || isSubmitting}
                                />
                                <Button
                                    children="Submit"
                                    type="submit"
                                    disabled={!dirty || isSubmitting || !isValid}
                                />
                            </Form>
                        </>
                    );
                }}
            </Formik>
        </div>
    );
}

interface formValuesTypes {
    firstName: string;
    lastName: string;
    study: string;
};

export default App;
