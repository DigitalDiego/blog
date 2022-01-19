import React, {useState, useEffect} from 'react'
import GlobalStyle from "./GlobalStyle"
import Nav from "./Components/Nav"
import {Routes, Route} from "react-router-dom"
import PostForm from "./Components/PostForm"
import SignInForm from "./Components/SignInForm"
import PostContainer from "./Components/PostContainer"
import PostInfo from "./Components/PostInfo"
import Pswd from "./Components/Pswd"
import SideMenu from "./Components/SideMenu"
const App = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [post, setPost] = useState("")
  const [posts, setPosts] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [password, setPassword] = useState("newuser")
  const [closeForm, setCloseForm] = useState(true)
  const [closePswdForm, setClosePswdForm] = useState(true)
  const [sideMenu, setSideMenu] = useState(false)
  const navBtn = () => {
      setSideMenu(!sideMenu)
  }
  const pswdBtn = (event) => {
    event.preventDefault()
    setClosePswdForm(!closePswdForm)
  }
  const closeBtn = () => {
      setCloseForm(!closeForm)
  }
  const logIn = () => {
    setLoggedIn(!loggedIn)
  }
  const toggle = (event) => {
    event.preventDefault()
    setIsOpen(!isOpen)
  }
  useEffect(() => {
    const userPswd = localStorage.getItem("userPswd")
    if(userPswd){
      setPassword(userPswd)
    }
    const template = localStorage.getItem("posts")
    const loadedPosts = JSON.parse(template)
    if(loadedPosts){
        setPosts(loadedPosts)
    }
  }, [])
  useEffect(() => {
    localStorage.setItem("userPswd", password)
    const template = JSON.stringify(posts)
    localStorage.setItem('posts', template)
  }, [password, posts])
  console.log(loggedIn)
  return (
    <>
      <GlobalStyle/>
      <Nav loggedIn={loggedIn} toggle={toggle} closeBtn={closeBtn} logIn={logIn} password={password} pswdBtn={pswdBtn} sideMenu={sideMenu} navBtn={navBtn}/>
      <Routes>
        <Route path="/blog" exact element={<PostContainer posts={posts}/>}/>
        <Route path={`/post/:id`} element={<PostInfo posts={posts}/>}/>
      </Routes>
      <PostForm post={post} setPost={setPost} isOpen={isOpen} toggle={toggle} setPosts={setPosts} posts={posts} setIsOpen={setIsOpen}/>
      <SignInForm password={password} closeForm={closeForm} closeBtn={closeBtn} setCloseForm={setCloseForm} logIn={logIn}/>
      <Pswd closePswdForm={closePswdForm} pswdBtn={pswdBtn} setPassword={setPassword} setClosePswdForm={setClosePswdForm}/>
      <SideMenu closeBtn={closeBtn} logIn={logIn} password={password} pswdBtn={pswdBtn} navBtn={navBtn} sideMenu={sideMenu} loggedIn={loggedIn} toggle={toggle}/>
    </>
  )
}

export default App
