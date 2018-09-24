export const validateSignUp = (values) => {
    const errors = {};

    if (!values.email) {
        errors.email = 'Please enter an email address';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z9-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'This email address is invalid';
    }

    if (!values.password1) {
        errors.password1 = 'Please enter a password';
    } else if (!/(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i.test(values.password1)) {
        errors.password1 = 'Your password is invalid';
    }

    if (values.password2 !== values.password1) {
        errors.password2 = 'Password fields must match';
    }

    return errors;
};