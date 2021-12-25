import React from "react";
import './sign-in.styles.scss';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-buttton/custom-button.component";
class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            email: '',
            password: '',
        }
    }
    handleSubmit = event => {
        event.preventDefault();
        this.setState({email: '', password: ''})
    }
    handleChange =  event => {
        const {value, name } = event.target;
        this.setState({[name] : value})
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

                <CustomButton type="submit"> Sign in </CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;