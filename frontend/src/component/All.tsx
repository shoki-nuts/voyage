import { memo, useCallback, useEffect, useState, VFC } from "react";
import axios from 'axios'
import { PostCard } from "./PostCard";

type Post = {
    id: number;
    photo:{
      url:string
    }
    place: string;
    genre: string;
    prefecture: string;
}

export const AllPosts: VFC = memo(() => {

  const [posts, setPosts] = useState<Post[] | null>(null)

  const getAllPosts = useCallback(() => {
    axios.get('http://localhost:3001/posts')
      .then(res => {
        setPosts(res.data)
      })
      .catch((e) => console.error(e))
  },[])

  useEffect(() => {
    getAllPosts()
  }, [])

  return (
    <>
      {posts?.map((post,index) => (
           
            <PostCard id={post.id} imageUrl={post.photo.url} getAllPosts={getAllPosts} postPrefecture={post.prefecture} postPlace={post.place} postGenre={post.genre}  key={index}/>
           
      ))}
    </>
  )
})