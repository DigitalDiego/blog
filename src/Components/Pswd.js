import React, {useState} from 'react'
import styled from "styled-components"
import {FaTimes} from "react-icons/fa"
const Container = styled.form`
    width:100%;
    height:100vh;
    display:${({closePswdForm}) => (closePswdForm ? "none" : "flex")};
    justify-content:center;
    align-items:center;
    flex-direction:column;
    background:rgba(0, 0, 0, .8);
    backdrop-filter:blur(1em);
    position:fixed;
    z-index:110;
    top:0;
    right:0;
    button{
        width:2em;
        height:2em;
        display:grid;
        place-items:center;
        border:none;
        outline:none;
        border-radius:50%;
        position:absolute;
        top:2em;
        right:2em;
        cursor:pointer;
        .icon{
            font-size:1em;
        }
    }
    input[type=text]{
        width:280px;
        padding:.4em;
        font-size:1em;
        border:none;
        outline:none;
        border-radius:10px;
        margin-bottom:1em;
    }
    input[type=submit]{
        width:100px;
        padding:.4em;
        background:#fff;
        border:none;
        outline:none;
        border-radius:10px;
        cursor:pointer;
        font-size:1em;
    }
    @media only screen and (min-width:800px){
        flex-direction:unset;
        input[type=text]{
            margin-right:1em;
            margin-bottom:unset;
        }
    }
`
const Pswd = ({closePswdForm, pswdBtn, setPassword, setClosePswdForm}) => {
    const [pswd,setPswd] = useState("")
    const changePswd = (event) => {
        if(pswd === ""){
            return null
        } else {
            event.preventDefault()
            setPassword(pswd)
            setClosePswdForm(!closePswdForm)
            setPswd("")
        }
    }
    return (
        <Container closePswdForm={closePswdForm} onSubmit={changePswd}>
            <button onClick={pswdBtn}>
                <FaTimes className="icon"/>
            </button>
            <input type="text" placeholder="Password" onChange={event => setPswd(event.target.value)} value={pswd}/>
            <input type="submit" value="Enter"/>
        </Container>
    )
}

export default Pswd
