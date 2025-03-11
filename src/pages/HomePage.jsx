import { useState } from "react"

import { CommentForm } from "../cmps/CommentForm"
import { CommentList } from "../cmps/CommentList"

import '../assets/styles/main.css'


export function HomePage(){
   const [comments, setComments] = useState([])

   function addComment(newComment){
      setComments([...comments,newComment])
   }

   return(
    <div className="home-page">
    <h1 className="title" >Comment Feed</h1>
   <CommentForm onAddComment={addComment}/>
   <CommentList comments={comments}/>
    </div>
   )
}