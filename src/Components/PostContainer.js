import React from 'react'
import styled from "styled-components"
import {Link} from "react-router-dom"
const Container = styled.section`
    width:100%;
    height:90vh;
    display:grid;
    place-items:center;
    grid-template-columns:repeat(auto-fit, minmax(150px, 1fr));
    overflow-y:scroll;
    position:relative;
    z-index:110;
    grid-row-gap:1em;
    &::-webkit-scrollbar{
        width:5px;
    }
    &::-webkit-scrollbar-track{
        border:none;
        background:rgba(0, 0, 0, .1);
    }
    &::-webkit-scrollbar-thumb{
        border-radius:50px;
        background:#fff;
    }
    .post{
        width:150px;
        height:150px;
        background:#fff;
        border-radius:10px;
        border:2px solid #fff;
        overflow:hidden;
        .image-container{
            width:100%;
            height:100px;
            img{
                width:100%;
                height:100%;
                object-fit:cover;
            }
        }
        .date{
            width:100%;
            height:50px;
            display:grid;
            place-items:center;
            p{
                font-weight:bold;
                font-size:1em;
            }
        }
    }
    @media only screen and (min-width:800px){
        grid-template-columns:repeat(auto-fit, minmax(280px, 1fr));
        .post{
            width:280px;
            height:280px;
            .image-container{
                height:200px;
            }
            .date{
                height:80px;
                p{
                    font-size:1.5em;
                }
            }
        }
    }
`
const PostContainer = ({posts}) => {
    return (
        <Container>
            {posts.map((item,index) => (
                <Link to={`/post/${item.id}`} className="post" key={index}>
                    <div className="image-container">
                        <img src={item.image} alt="post image" />
                    </div>
                    <div className="date">
                        <p>{item.month} / {item.day} / {item.year}</p>
                    </div>
                </Link>
            ))}
        </Container>
    )
}

export default PostContainer
