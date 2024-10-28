import { StyledFormArea, StyledFormButton, Avatar, StyledTitle, colors, ButtonGroup, ExtraText, TextLink, CopyrightText } from "../components/Styles";
import Logo from './../assets/logo.png';
import { Formik, Form } from 'formik';
import { TextInput } from "../components/FormLib";
import * as Yup from 'yup';
import { FiMail, FiLock } from "react-icons/fi";
import { ThreeDots } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios for API calls
import { useState } from 'react'; // Import useState for managing local state

const Login = () => {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState(''); // State for storing error messages

    return (
        <div>
            <StyledFormArea>
                <Avatar image={Logo} />
                <StyledTitle color={colors.theme} size={30}>Member Login</StyledTitle>

                <Formik
                    initialValues={{
                        email: "",
                        password: "",
                    }}
                    validationSchema={Yup.object({
                        email: Yup.string()
                            .email("Invalid email address")
                            .required("Required"),
                        password: Yup.string()
                            .min(8, "Password is too short")
                            .max(30, "Password is too long")
                            .required("Required")
                    })}
                    onSubmit={async (values, { setSubmitting, setFieldError }) => {
                        try {
                            const response = await axios.post('http://localhost:5000/api/auth/login', values);
                            // Save the token to localStorage
                            localStorage.setItem('token', response.data.token);
                            setSubmitting(false); // Stop the loading spinner
                            navigate('/Dashboard'); // Redirect to the home or desired route
                        } catch (error) {
                            setSubmitting(false); // Stop the loading spinner
                            if (error.response) {
                                setFieldError("password", error.response.data.message); // Set field error
                                setErrorMessage(error.response.data.message); // Set error message for display
                            } else {
                                setErrorMessage('Login failed. Please try again.'); // Generic error message
                            }
                        }
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <TextInput
                                name="email"
                                type="text"
                                label="Email Address"
                                placeholder="example@example.com"
                                icon={<FiMail />}
                            />
                            <TextInput
                                name="password"
                                type="password"
                                label="Password"
                                placeholder="**********"
                                icon={<FiLock />}
                            />
                            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} {/* Display error messages */}
                            <ButtonGroup>
                                {!isSubmitting && <StyledFormButton type="submit">Login</StyledFormButton>}
                                {isSubmitting && (
                                    <ThreeDots
                                        type="ThreeDots"
                                        color={colors.theme}
                                        height={49}
                                        width={100}
                                    />
                                )}
                            </ButtonGroup>
                        </Form>
                    )}
                </Formik>
                <ExtraText>
                    New here? <TextLink to="/signup">Signup</TextLink>
                </ExtraText>
            </StyledFormArea>
            <CopyrightText>
                All rights reserved &copy;2024
            </CopyrightText>
        </div>
    );
}

export default Login;
