import { StyledFormArea, StyledFormButton, Avatar, StyledTitle, colors, ButtonGroup, ExtraText, TextLink, CopyrightText } from "../components/Styles";
import Logo from './../assets/logo.png';
import { Formik, Form } from 'formik';
import { TextInput } from "../components/FormLib";
import * as Yup from 'yup';
import { FiMail, FiLock, FiUser, FiCalendar } from "react-icons/fi";
import { ThreeDots } from 'react-loader-spinner';
import { connect } from "react-redux";
import { signupUser } from "../auth/actions/userActions";
import { useNavigate } from 'react-router-dom';

const Signup = ({ signupUser }) => {
    const navigate = useNavigate();

    return (
        <div>
            <StyledFormArea>
                <Avatar image={Logo} />
                <StyledTitle color={colors.theme} size={30}>Member Signup</StyledTitle>

                <Formik
                    initialValues={{
                        email: "",
                        password: "",
                        repeatPassword: "",
                        dob: "", // Change de dateOfBirth à dob
                        fullname: "",
                    }}
                    validationSchema={Yup.object({
                        email: Yup.string()
                            .email("Invalid email address")
                            .required("Required"),
                        password: Yup.string()
                            .min(8, "Password is too short")
                            .max(30, "Password is too long")
                            .required("Required"),
                        fullname: Yup.string().required("Required"),
                        dob: Yup.date().required("Required"), // Change de dateOfBirth à dob
                        repeatPassword: Yup.string()
                            .required("Required")
                            .oneOf([Yup.ref("password")], "Passwords must match")
                    })}
                    onSubmit={(values, { setSubmitting, setFieldError }) => {
                        console.log(values); // Ajoutez ceci pour voir les valeurs soumises
                        signupUser(values, navigate, setFieldError, setSubmitting);
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <TextInput
                                name="fullname"
                                type="text"
                                label="Full Name"
                                placeholder="Your name"
                                icon={<FiUser />}
                            />
                            <TextInput
                                name="email"
                                type="text"
                                label="Email Address"
                                placeholder="example@example.com"
                                icon={<FiMail />}
                            />
                            <TextInput
                                name="dob" // Assurez-vous que cela correspond au backend
                                type="date"
                                label="Date Of Birth"
                                icon={<FiCalendar />}
                            />
                            <TextInput
                                name="password"
                                type="password"
                                label="Password"
                                placeholder="**********"
                                icon={<FiLock />}
                            />
                            <TextInput
                                name="repeatPassword"
                                type="password"
                                label="Repeat Password"
                                placeholder="**********"
                                icon={<FiLock />}
                            />
                            <ButtonGroup>
                                {!isSubmitting && <StyledFormButton type="submit">Signup</StyledFormButton>}
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
                    Already have an account? <TextLink to="/login">Login</TextLink>
                </ExtraText>
            </StyledFormArea>
            <CopyrightText>
                All rights reserved &copy;2024
            </CopyrightText>
        </div>
    );
}

const mapDispatchToProps = {
    signupUser
};

export default connect(null, mapDispatchToProps)(Signup);
