import { useState } from 'react';
import { useField } from 'formik';
import { StyledTextInput, StyledLabel, StyledIcon, ErrorMsg } from './Styles';
import { FiEyeOff, FiEye } from 'react-icons/fi';

export const TextInput = ({ icon, ...props }) => {
    const [field, meta] = useField(props);
    const [show, setShow] = useState(false);

    // Filter out props that should not be passed to the DOM
    const { invalid, right, ...inputProps } = props;

    return (
        <div style={{ position: "relative" }}>
            <StyledLabel htmlFor={props.name}>
                {props.label}
            </StyledLabel>

            <StyledTextInput
                {...field}
                {...inputProps}
                type={props.type === "password" ? (show ? "text" : "password") : props.type}
                invalid={meta.touched && meta.error ? true : undefined} // Ensuring `invalid` is a boolean or undefined
            />

            <StyledIcon>
                {icon}
            </StyledIcon>

            {props.type === "password" && (
                <StyledIcon onClick={() => setShow(!show)} right>
                    {show ? <FiEye /> : <FiEyeOff />}
                </StyledIcon>
            )}

            {meta.touched && meta.error ? (
                <ErrorMsg>{meta.error}</ErrorMsg>
            ) : (
                <ErrorMsg style={{ visibility: "hidden" }}>.</ErrorMsg>
            )}
        </div>
    );
};
