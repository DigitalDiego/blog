import React from 'react'
import styled from "styled-components"
const Container = styled.section`
    width:100%;
    height:90vh;
    position:fixed;
    top:10vh;
    right:0;
    z-index:200;
    background:rgba(0 0, 0, .8);
    backdrop-filter:blur(1em);
    transform:${({sideMenu}) => (sideMenu ? "translateX(0)" : "translate(100%)")};
    transition:all .4s linear;
    nav{
        display:flex;
        justify-content:flex-start;
        align-items:flex-start;
        flex-direction:column;
    }
    button{
        width:100%;
        height:50px;
        text-align:left;
        padding-left:1em;
        font-size:1em;
        font-weight:bold;
        border:none;
        outline:none;
        background:transparent;
        cursor:pointer;
        color:#fff;
    }
`
const SideMenu = ({toggle, closeBtn, logIn, pswdBtn, sideMenu, navBtn, loggedIn}) => {
    return (
        <Container onClick={navBtn} sideMenu={sideMenu} loggedIn={loggedIn}>
            {loggedIn === true ? 
                <nav>
                    <button onClick={toggle}>Post</button>
                    <button onClick={pswdBtn}>Password</button>
                    <button onClick={logIn}>Sign Out</button>
                </nav> :
                <nav>
                    <button onClick={closeBtn}>Sign In</button>
                </nav>
            }
        </Container>
    )
}

export default SideMenu
