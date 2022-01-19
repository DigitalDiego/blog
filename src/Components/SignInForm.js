import React, {isValidElement, useState} from 'react'
import styled from "styled-components"
import {FaTimes} from "react-icons/fa"
const Container = styled.form`
    width:100%;
    height:100vh;
    display:${({closeForm}) => (closeForm ? "none" : "flex")};
    justify-content:center;
    align-items:center;
    flex-direction:column;
    position:fixed;
    top:0;
    right:0;
    z-index:1000;
    background:rgba(0, 0, 0, .8);
    backdrop-filter:blur(1em);
    button{
        width:2em;
        height:2em;
        display:grid;
        place-items:center;
        cursor:pointer;
        border-radius:50%;
        border:none;
        outline:none;
        background:#fff;
        position:absolute;
        top:2em;
        right:2em;
        .icons{
            font-size:1em;
            color:#2a2a2a;
        }
    }
    input[type=password]{
        width:280px;
        padding:.4em;
        font-size:1em;
        margin-bottom:1em;
        border:none;
        outline:none;
        border-radius:10px;
    }
    input[type=submit]{
        width:100px;
        padding:.4em;
        font-size:1em;
        border:none;
        outline:none;
        border-radius:10px;
        cursor:pointer;
        font-weight:bold;
    }
    @media only screen and (min-width:800px){
        flex-direction:unset;
        input[type=password]{
            margin-right:1em;
            margin-bottom:unset;
        }
    }
`
const SignInForm = ({password, closeForm, setCloseForm, closeBtn, logIn}) => {
    const [checkPassword, setCheckPassword] = useState("")
    const userLogIn = (event) => {
        if(checkPassword === password){
            event.preventDefault()
            logIn()
            setCloseForm(!closeForm)
            setCheckPassword("")
        } else {
            event.preventDefault()
            setCheckPassword("")
        }
    }
    return (
        <Container closeForm={closeForm} onSubmit={userLogIn}>
            <button onClick={closeBtn}>
                <FaTimes className="icon"/>
            </button>
            <input type="password" placeholder={password === "newuser" ? "Default Password: newuser" : "Password"} onChange={event => setCheckPassword(event.target.value)} value={checkPassword}/>
            <input type="submit" value="Enter"/>
        </Container>
    )
}

export default SignInForm
