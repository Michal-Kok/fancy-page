import { useState } from 'react';

const useForm = (validate, sendEmail) => {

    const [values, setValues] = useState({
        name: '',
        email: '',
        location: '',
        terms: false,
    });

    const [errors, setErrors] = useState({});

    const handleInputChange = e => {
        const {name, value, checked} = e.target;
        
        if (name === 'terms') {
            setValues({...values, [name]: checked});
            return;
        }

        setValues({ ...values, [name]: value });
    }

    const handleSubmit = e => {
        e.preventDefault();
        setErrors(validate(values, sendEmail));
    }

    return [values, handleInputChange, handleSubmit, errors,]
}

export default useForm;