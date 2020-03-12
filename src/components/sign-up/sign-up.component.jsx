import React from "react";
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import { auth, createUserProfile } from "../../firebase/firebase.utils";
import { withRouter } from "react-router-dom";

import "./style.scss";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { email, displayName, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("Your passwords don't match");
      return;
    }

    if (displayName.trim() === "") {
      alert("Display name cannot be blank");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      let userRef = await createUserProfile({ ...user, displayName });
      userRef.onSnapshot(snap => {
        this.setState({
          currentUser: {
            id: snap.id,
            ...snap.data()
          }
        });
      });
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert(
          "This email id is already in use. Please login or try a different email id."
        );
        return;
      }
      console.log(error);
    }
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-up">
        <h2 className="title">Dont' have an account ?</h2>
        <span>Sign up with your username and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={this.state.displayName}
            required
            handleChange={this.handleChange}
            label="Display Name"
          />
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            required
            handleChange={this.handleChange}
            label="Email"
          />
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            required
            handleChange={this.handleChange}
            label="Password"
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={this.state.confirmPassword}
            required
            handleChange={this.handleChange}
            label="Confirm Password"
          />
          <div className="buttons">
            <CustomButton type="submit">Sign Up</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignUp);
