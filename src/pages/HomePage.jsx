import { CommentForm } from "../cmps/CommentForm"
import { CommentList } from "../cmps/CommentList"
import { loadComments,addComment } from '../store/actions/comment.actions'
import { commentService } from '../services/comment'


import '../assets/styles/main.css'
import { useSelector } from "react-redux"
import { use, useEffect, useState } from "react"


export function HomePage(){
  const comments = useSelector(state => state.commentModule.comments)

  useEffect(()=>{
   loadComments()
  },[])

   async function onAddComment(newComment){
      try{
       await addComment(newComment)
       loadComments()
      } catch (err) {
         console.error("Error adding comment:", err)
      }
    
   }

   return(
    <div className="home-page">
    <h1 className="title" >Comment Feed</h1>
   <CommentForm onAddComment={onAddComment}/>
   <CommentList comments={comments}/>
    </div>
   )
}