import React from "react";
import './sign-in.styles.scss';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-buttton/custom-button.component";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config.js";
import { signInWithGoogle} from "../../firebase-config.js";
// import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged} from "firebase/auth";

class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            email: '',
            password: '',
        }
    }
    handleSubmit = async event => {
        event.preventDefault();
        const {email, password} = this.state;

        try {
            await signInWithEmailAndPassword(auth, email, password);
            this.setState({
                email: '',
                password: '',
            })
        } catch (error) {
            console.error(error)
        }
    }
    handleChange =  event => {
        const {value, name } = event.target;
        this.setState({ [name] : value})
    }


    render(){
        return(
            <div className="sign-in">
                <h2>I already Have an account</h2>
                <span>Sign in with email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    type="text" 
                    name="email" 
                    label="Email"
                    handleChange={this.handleChange}
                    value={this.state.email} 
                    />
                {/* <label htmlFor="">Email</label> */}
                    <FormInput 
                    type="password" 
                    name="password" 
                    label="Password"
                    handleChange={this.handleChange}
                    value={this.state.password} 
                    />
                {/* <label htmlFor="">Password</label> */}

                <div className="buttons">    
                <CustomButton type="submit"> Sign in </CustomButton>
                <CustomButton onClick={signInWithGoogle} isGoogleSignIn> 
                Sign in with google
                </CustomButton>

                </div>
                </form>
            </div>
        )
    }
}

export default SignIn;