import {createGlobalStyle} from "styled-components"
import Background from "./Images/blog-bg.jpg"
const GlobalStyle = createGlobalStyle`
    html{
        scroll-behavior:smooth;
    }
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family:"Montserrat", sans-serif;
        body{
            width:100%;
            height:100vh;
            background:url(${Background});
            background-size:cover;
            background-position:center;
            position:relative;
            z-index:0;
            a{
                color:#2a2a2a;
                text-decoration:none;
            }
            &::after{
                content:"";
                position:absolute;
                top:0;
                right:0;
                background:#000;
                opacity:.8;
                width:100%;
                height:100%;
                z-index:1;
            }
        }
    }
`
export default GlobalStyle