import React from 'react'
import { render } from 'react-dom'
import { withFormik, Form, Field } from 'Formik'
import Yup from 'yup'

const SignIn = () => ({
    values,
    errors,
    touched,
    isSubmitting
}) => (
    values
    <Form>
        <div> {touched.email && errors.email && <p>(errors.email)}</p>
            <Field type="email" name="email" placeholder="Email" />
        </div>
        <div>{touched.password && errors.password && <p>(errors.password)</p>}
            <Field type="password" name="password" placeholder="Password" />
        </div>
                <Field type="checkbox" name="newsletter" checked={values.newsletter} />
        Join our newsletter
        <label />
        <Field component="select" name="plan">
            <option value="free">Free</option>
            <option value="premium">Premium</option>
        </Field>
        <button disabled={isSubmitting}>Submit</button>
    </Form>
)

const FormikApp = withFormik({
    mapPropsToValues() {
        return {
            email: email || "",
            password: password || "",
            newsletter: "newsletter" || false,
            plan: "plan" || "premium"
        }
    }
    validationSchema: Yup.object().shape({
        email: Yup.string().email('email not valid').required('email is required'),
        password: Yup.string().min(9, 'Password must be 9 characters of longer').required('password is required')
    })
    handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
        setTimeout(() => {
            if (values.email === 'andre@test.io') {
                setErrors({ email: 'That email is already taken' })
            }else {
                resetForm()
            }
            isSubmitting(false)
        }, 2000)
        console.log(values);
    }
})(SignIn)

