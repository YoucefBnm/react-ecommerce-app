import React from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

import './signin.styles.scss'

class SignIn extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handlSubmit = async event => {
        event.preventDefault()
        
        const { email, password } = this.state

        this.setState({ email: '', password:''})
        
        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({ eamil: '', password: ''})
        } catch (error) {
            console.log(error)
        }
    }

    handleChange = event => {
        const { value, name } = event.target

        this.setState({ [name]: value})
    }

    render() {
        return(
            <div className='signin'>
                <h2 className='title'>I alread have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handlSubmit}>
                    <FormInput 
                        handleChange={this.handleChange} 
                        name='email' type='email' required 
                        label='email'
                        value={this.state.email} 
                    />
                    <FormInput 
                        handleChange={this.handleChange} 
                        name='password' type='password' required 
                        label='password'
                        value={this.state.password} 
                    />

                    <div className="buttons">
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton onClick={ signInWithGoogle } isGoogleSignIn>Sign In with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn