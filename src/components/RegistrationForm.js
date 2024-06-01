import React from "react";

const emailValidator = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordValidator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
const phoneValidator = /^\+\d{1,3}\d{7,10}$/;
const panValidator = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
const aadharValidator = /^\d{12}$/;

class FormComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      username: "",
      emailAddress: "",
      password: "",
      passwordConfirmation: "",
      showPassword: false,
      phoneNo: "",
      country: "",
      city: "",
      panNo: "",
      aadharNo: "",
      firstNameError: "",
      lastNameError: "",
      usernameError: "",
      emailAddressError: "",
      passwordError: "",
      passwordConfirmationError: "",
      phoneNoError: "",
      countryError: "",
      cityError: "",
      panNoError: "",
      aadharNoError: "",
      isFormSubmitted: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateFirstName = this.validateFirstName.bind(this);
    this.validateLastName = this.validateLastName.bind(this);
    this.validateUsername = this.validateUsername.bind(this);
    this.validateEmailAddress = this.validateEmailAddress.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.validatePasswordConfirmation = this.validatePasswordConfirmation.bind(this);
    this.validatePhoneNo = this.validatePhoneNo.bind(this);
    this.validateCountry = this.validateCountry.bind(this);
    this.validateCity = this.validateCity.bind(this);
    this.validatePanNo = this.validatePanNo.bind(this);
    this.validateAadharNo = this.validateAadharNo.bind(this);
    this.validateField = this.validateField.bind(this);
    this.toggleShowPassword = this.toggleShowPassword.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });

    return;
  }

  handleBlur(event) {
    const { name } = event.target;

    this.validateField(name);
    return;
  }

  handleSubmit(event) {
    event.preventDefault();
    let formFields = [
      "firstName",
      "lastName",
      "username",
      "emailAddress",
      "password",
      "passwordConfirmation",
      "phoneNo",
      "country",
      "city",
      "panNo",
      "aadharNo",
    ];
    let isValid = true;
    formFields.forEach((field) => {
      isValid = this.validateField(field) && isValid;
    });

    if (isValid) this.setState({ isFormSubmitted: true });
    else this.setState({ isFormSubmitted: false });

    return this.state.isFormSubmitted;
  }

  validateField(name) {
    let isValid = false;

    if (name === "firstName") isValid = this.validateFirstName();
    else if (name === "lastName") isValid = this.validateLastName();
    else if (name === "username") isValid = this.validateUsername();
    else if (name === "emailAddress") isValid = this.validateEmailAddress();
    else if (name === "password") isValid = this.validatePassword();
    else if (name === "passwordConfirmation") isValid = this.validatePasswordConfirmation();
    else if (name === "phoneNo") isValid = this.validatePhoneNo();
    else if (name === "country") isValid = this.validateCountry();
    else if (name === "city") isValid = this.validateCity();
    else if (name === "panNo") isValid = this.validatePanNo();
    else if (name === "aadharNo") isValid = this.validateAadharNo();
    return isValid;
  }

  validateFirstName() {
    let firstNameError = "";
    const value = this.state.firstName;
    if (value.trim() === "") firstNameError = "First Name is required";

    this.setState({
      firstNameError,
    });
    return firstNameError === "";
  }

  validateLastName() {
    let lastNameError = "";
    const value = this.state.lastName;
    if (value.trim() === "") lastNameError = "Last Name is required";

    this.setState({
      lastNameError,
    });
    return lastNameError === "";
  }

  validateUsername() {
    let usernameError = "";
    const value = this.state.username;
    if (value.trim() === "") usernameError = "Username is required";

    this.setState({
      usernameError,
    });
    return usernameError === "";
  }

  validateEmailAddress() {
    let emailAddressError = "";
    const value = this.state.emailAddress;
    if (value.trim() === "") emailAddressError = "Email Address is required";
    else if (!emailValidator.test(value)) emailAddressError = "Email is not valid";

    this.setState({
      emailAddressError,
    });
    return emailAddressError === "";
  }

  validatePassword() {
    let passwordError = "";
    const value = this.state.password;
    if (value.trim() === "") passwordError = "Password is required";
    else if (!passwordValidator.test(value))
      passwordError = "Password must contain at least 8 characters, 1 number, 1 upper and 1 lowercase!";

    this.setState({
      passwordError,
    });
    return passwordError === "";
  }

  validatePasswordConfirmation() {
    let passwordConfirmationError = "";
    if (this.state.password !== this.state.passwordConfirmation)
      passwordConfirmationError = "Password does not match Confirmation";

    this.setState({
      passwordConfirmationError,
    });
    return passwordConfirmationError === "";
  }

  validatePhoneNo() {
    let phoneNoError = "";
    const value = this.state.phoneNo;
    if (value.trim() === "") phoneNoError = "Phone No. is required";
    else if (!phoneValidator.test(value)) phoneNoError = "Phone No. is not valid";

    this.setState({
      phoneNoError,
    });
    return phoneNoError === "";
  }

  validateCountry() {
    let countryError = "";
    const value = this.state.country;
    if (value.trim() === "") countryError = "Country is required";

    this.setState({
      countryError,
    });
    return countryError === "";
  }

  validateCity() {
    let cityError = "";
    const value = this.state.city;
    if (value.trim() === "") cityError = "City is required";

    this.setState({
      cityError,
    });
    return cityError === "";
  }

  validatePanNo() {
    let panNoError = "";
    const value = this.state.panNo;
    if (value.trim() === "") panNoError = "PAN No. is required";
    else if (!panValidator.test(value)) panNoError = "PAN No. is not valid";

    this.setState({
      panNoError,
    });
    return panNoError === "";
  }

  validateAadharNo() {
    let aadharNoError = "";
    const value = this.state.aadharNo;
    if (value.trim() === "") aadharNoError = "Aadhaar No. is required";
    else if (!aadharValidator.test(value)) aadharNoError = "Aadhaar No. is not valid";

    this.setState({
      aadharNoError,
    });
    return aadharNoError === "";
  }

  toggleShowPassword() {
    this.setState({ showPassword: !this.state.showPassword });
  }

  render() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <h3 className="text-2xl font-semibold mb-6">SignUp Form</h3>
        {this.state.isFormSubmitted ? (
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-4">Thanks for signing up, find your details below:</h3>
            <div className="text-gray-700">First Name: {this.state.firstName}</div>
            <div className="text-gray-700">Last Name: {this.state.lastName}</div>
            <div className="text-gray-700">Username: {this.state.username}</div>
            <div className="text-gray-700">Email Address: {this.state.emailAddress}</div>
            <div className="text-gray-700">Phone No.: {this.state.phoneNo}</div>
            <div className="text-gray-700">Country: {this.state.country}</div>
            <div className="text-gray-700">City: {this.state.city}</div>
            <div className="text-gray-700">PAN No.: {this.state.panNo}</div>
            <div className="text-gray-700">Aadhaar No.: {this.state.aadharNo}</div>
          </div>
        ) : (
          <form onSubmit={this.handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <div className="mb-4">
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                autoComplete="off"
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
              {this.state.firstNameError && (
                <div className="text-red-500 text-sm mt-1">{this.state.firstNameError}</div>
              )}
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                autoComplete="off"
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
              {this.state.lastNameError && (
                <div className="text-red-500 text-sm mt-1">{this.state.lastNameError}</div>
              )}
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Username"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                autoComplete="off"
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
              {this.state.usernameError && (
                <div className="text-red-500 text-sm mt-1">{this.state.usernameError}</div>
              )}
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email Address"
                name="emailAddress"
                value={this.state.emailAddress}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                autoComplete="off"
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
              {this.state.emailAddressError && (
                <div className="text-red-500 text-sm mt-1">{this.state.emailAddressError}</div>
              )}
            </div>
            <div className="mb-4">
              <input
                type={this.state.showPassword ? "text" : "password"}
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                autoComplete="off"
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
              <button
                type="button"
                onClick={this.toggleShowPassword}
                className="text-blue-500 text-sm mt-1"
              >
                {this.state.showPassword ? "Hide" : "Show"}
              </button>
              {this.state.passwordError && (
                <div className="text-red-500 text-sm mt-1">{this.state.passwordError}</div>
              )}
            </div>
            <div className="mb-4">
              <input
                type={this.state.showPassword ? "text" : "password"}
                placeholder="Confirm Password"
                name="passwordConfirmation"
                value={this.state.passwordConfirmation}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                autoComplete="off"
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
              {this.state.passwordConfirmationError && (
                <div className="text-red-500 text-sm mt-1">{this.state.passwordConfirmationError}</div>
              )}
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Phone No. (country code number)"
                name="phoneNo"
                value={this.state.phoneNo}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                autoComplete="off"
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
              {this.state.phoneNoError && (
                <div className="text-red-500 text-sm mt-1">{this.state.phoneNoError}</div>
              )}
            </div>
            <div className="mb-4">
              <select
                name="country"
                value={this.state.country}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                className="w-full p-3 border border-gray-300 rounded-lg"
              >
                <option value="">Select Country</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                {/* Add more countries as needed */}
              </select>
              {this.state.countryError && (
                <div className="text-red-500 text-sm mt-1">{this.state.countryError}</div>
              )}
            </div>
            <div className="mb-4">
              <select
                name="city"
                value={this.state.city}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                className="w-full p-3 border border-gray-300 rounded-lg"
              >
                <option value="">Select City</option>
                <option value="Mumbai">Mumbai</option>
                <option value="New York">New York</option>
                {/* Add more cities as needed */}
              </select>
              {this.state.cityError && (
                <div className="text-red-500 text-sm mt-1">{this.state.cityError}</div>
              )}
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="PAN No."
                name="panNo"
                value={this.state.panNo}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                autoComplete="off"
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
              {this.state.panNoError && (
                <div className="text-red-500 text-sm mt-1">{this.state.panNoError}</div>
              )}
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Aadhaar No."
                name="aadharNo"
                value={this.state.aadharNo}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                autoComplete="off"
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
              {this.state.aadharNoError && (
                <div className="text-red-500 text-sm mt-1">{this.state.aadharNoError}</div>
              )}
            </div>
            <button
              className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600"
              disabled={
                !this.state.firstName ||
                !this.state.lastName ||
                !this.state.username ||
                !this.state.emailAddress ||
                !this.state.password ||
                !this.state.passwordConfirmation ||
                !this.state.phoneNo ||
                !this.state.country ||
                !this.state.city ||
                !this.state.panNo ||
                !this.state.aadharNo
              }
            >
              Signup
            </button>
          </form>
        )}
      </div>
    );
  }
}

export default FormComponent;