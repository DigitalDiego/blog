import React, {useState} from 'react'
import styled from "styled-components"
import {FaTimes} from "react-icons/fa"
import ImageOne from "../Images/image-one.jpg"
import ImageTwo from "../Images/image-two.jpg"
import ImageThree from "../Images/image-three.jpg"
import ImageFour from "../Images/image-four.jpg"
import ImageFive from "../Images/image-five.jpg"
import ImageSix from "../Images/image-six.jpg"
import ImageSeven from "../Images/image-seven.jpg"
import ImageEight from "../Images/image-eight.jpg"
import ImageNine from "../Images/image-nine.jpg"
import ImageTen from "../Images/image-ten.jpg"
const Container = styled.form`
    width:100%;
    height:100vh;
    display:${({isOpen}) => (isOpen ? "flex" : "none")};
    justify-content:center;
    align-items:center;
    flex-direction:column;
    background:rgba(0, 0, 0, .8);
    backdrop-filter:blur(1em);
    position:fixed;
    top:0;
    right:0;
    z-index:200;
    button{
        width:2em;
        height:2em;
        border-radius:50%;
        display:grid;
        place-items:center;
        border:none;
        outline:none;
        cursor:pointer;
        position:absolute;
        top:2em;
        right:2em;
        .icons{
            font-size:1em;
        }
    }
    textarea{
        width:320px;
        height:200px;
        margin-bottom:1em;
        border-radius:10px;
        outline:none;
        resize:none;
        font-size:1em;
        padding:.4em;
    }
    input{
        width:100px;
        height:28px;
        background:#fff;
        border-radius:10px;
        font-size:1em;
        border:none;
        outline:none;
        cursor:pointer;
        font-weight:bold;
    }
    @media only screen and (min-width:800px){
        textarea{
            width:800px;
        }
    }
`
const PostForm = ({post, setPost, isOpen, toggle, posts, setPosts, setIsOpen}) => {
    const [counter, setCounter] = useState(0)
    const increase = (counter) => {
        setCounter(counter => counter + 1)
    }
    const images = [ImageOne, ImageTwo, ImageThree, ImageFour, ImageFive, ImageSix, ImageSeven, ImageEight, ImageNine, ImageTen]
    const i = Math.floor(Math.random() * images.length)
    const createPost = (event) => {
        event.preventDefault()
        const postInfo = {
            id:counter,
            text:post,
            month:new Date().getMonth() + 1,
            day:new Date().getDate(),
            year:new Date().getFullYear(),
            image:images[i]
        }
        setPosts([...posts].concat(postInfo))
        setPost("")
        increase()
        setIsOpen(!isOpen)
    }
    return (
        <Container isOpen={isOpen} onSubmit={createPost}>
            <button onClick={toggle}>
                <FaTimes className="icon"/>
            </button>
            <textarea value={post} onChange={event => setPost(event.target.value)}></textarea>
            <input type="submit" value="Post"/>
        </Container>
    )
}

export default PostForm
