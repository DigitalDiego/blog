import React from 'react'
import styled from "styled-components"
import {useParams} from "react-router-dom"
const Container = styled.section`
    width:100%;
    height:90vh;
    display:grid;
    place-items:center;
    position:relative;
    z-index:110;
    padding:1em;
    .content{
        width:100%;
        padding:.4em;
        background:#fff;
        border-radius:10px;
        .date{
            width:100%;
            height:20px;
            display:flex;
            justify-content:flex-end;
            align-items:center;
        }
    }
    @media only screen and (min-width:800px){
        .content{
            width:50%;
        }
    }
`
const PostInfo = ({posts}) => {
    const {id} = useParams()
    const post = posts[id]
    return (
        <Container>
            <div className="content">
                    <p>{post.text}</p>
                <div className="date">
                    <p>{post.month} / {post.day} / {post.year}</p>
                </div>
            </div>
        </Container>
    )
}

export default PostInfo
