import React, {useState} from 'react'
import styled from "styled-components"
import {Link} from "react-router-dom"
import {FaBars} from "react-icons/fa"
import {FaTimes} from "react-icons/fa"
const Container = styled.header`
        width:100%;
        height:10vh;
        display:flex;
        justify-content:space-between;
        align-items:center;
        padding:0 1em;
        position:relative;
        z-index:10;
        h1{
            font-family:"Pacifico", sans-serif;
            color:#fff;
            font-size:1.9em;
        }
        nav{
            display:none;
        }
        .sign-in-btn{
            display:none;
        }
        .nav-btn{
            width:2em;
            height:2em;
            display:grid;
            place-items:center;
            border:none;
            outline:none;
            background:transparent;
            cursor:pointer;
            position:relative;
            .icon{
                font-size:1.5em;
                position:absolute;
                color:#fff;
            }
            .bars{
                opacity:${({sideMenu}) => (sideMenu ? 0 : 1)};
                transition:all .4s linear;
            }
            .times{
                opacity:${({sideMenu}) => (sideMenu ? 1 : 0)};
                transition:all .4s linear;
            }
        }
    @media only screen and (min-width:800px){
        button{
            background:#fff;
            color:#2a2a2a;
            font-weight:bold;
            width:100px;
            height:28px;
            border:none;
            outline:none;
            border-radius:10px;
            cursor:pointer;
            font-size:1em;
            margin-left:1em;
        }
        nav{
            display:unset;
        }
        .sign-in-btn{
            display:unset;
        }
        .nav-btn{
            display:none;
        }
    }
    @media only screen and (min-width:1800px){
        h1{
            font-size:3.2em;
        }
    }
`
const Nav = ({loggedIn, toggle, closeBtn, logIn, pswdBtn, sideMenu, navBtn}) => {
    return (
        <Container loggedIn={loggedIn} sideMenu={sideMenu}>
            <Link to="/blog">
                <h1>My World</h1>
            </Link>
            {loggedIn === true ? 
                <nav>
                    <button onClick={toggle}>Post</button>
                    <button onClick={pswdBtn}>Password</button>
                    <button onClick={logIn}>Sign Out</button>
                </nav> : 
                <button onClick={closeBtn} className="sign-in-btn">Sign In</button>
            }
            <button className="nav-btn" onClick={navBtn}>
                <FaBars className="icon bars"/>
                <FaTimes className="icon times"/>
            </button>
        </Container>
    )
}

export default Nav
