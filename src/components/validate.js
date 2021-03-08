function validate({name, email, location, terms}, sendEmail) {

    let errors = {}
    const nameRegex = /[a-zA_Z]+/g;
    const emailRegex = /[a-zA-Z]\w+\.?@[a-z]\w+\.\S{2,}/g;
    const locationRegex = /\d{2}\-\d{3}/g;
    errors.state = true;
    // const API_KEY = process.env.REACT_APP_API_KEY;
    // const API_URL = `https://emailverification.whoisxmlapi.com/api/v1?apiKey=${API_KEY}&emailAddress=${email.toString()}`;

    if (!name.trim()) {
        errors.name = "Name is required.";
    } else if(!nameRegex.test(name)) {
        errors.name = "Name is invalid.";
        errors.state = false;
    }
    
    if (!email.trim()) {
        errors.email = "Email is required.";
    } else if(!emailRegex.test(email)) {
        errors.email = "Email is invalid.";
        errors.state = false;
    }

    if (!location.trim()) {
        errors.location = "We need it for marketing reasons";
    } else if (!locationRegex.test(location)) { 
        errors.location = "Postal code is invalid. Should be XX-XXX";
        errors.state = false;
    }

    console.log(typeof(terms), terms);

    if (!terms) {
        errors.terms = "You have to accept terms.";
        errors.state = false;
    }
        errors.state && sendEmail();

        return errors;
}

export default validate;