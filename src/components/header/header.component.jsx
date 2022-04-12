import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assests/logo.svg'
import './header.styles.scss';
import { auth } from '../../firebase-config';
import { signOut } from 'firebase/auth';

import { connect } from 'react-redux';

// const SignOut = ()=>{
//     signOut(authentication)
//     .then(res => {
//         console.log('sign out success');
//     })
//     .catch(err =>{
//         console.log(err);
//     })
// }

const Header = ({currentUser}) => (
    <div className="header">
        <Link className="logo-container" to='/'>
            <Logo className="logo"></Logo>
        </Link>

        <div className="options">
            <Link className="option" to='/shop'>SHOP</Link>
            <Link className="option" to='/shop'>CONTACT</Link>
            {
            currentUser ?
            <Link className="option" onClick={()=>signOut(auth)}>SIGN OUT</Link>    
            :
            <Link className="option" to='/signin'>SIGN IN</Link>
        }
        </div>
    </div>
)
const mapStateToProps = state =>({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);