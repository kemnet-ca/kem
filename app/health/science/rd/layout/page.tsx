
import Head from 'next/head';
import Cookies from"js-cookie


import { Metadata, ResolvingMetadata } from 'next';
import SinglePost from '../posts/page';

type Props = {
  params: { id: string };
};

// set dynamic metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    // read route params
    const id = params.id;
    const url = 'https://api.slingacademy.com/v1/sample-data/blog-posts/' + id;

    var posttitle = Cookies.get("post_body");
  
    // fetch data
    const data = await fetch(url).then((res) => res.json());
    const blogPost = data.blogs;
    console.log(blogPost);
  
    return {
      title: "KEMET BLOG - ",
      description: "BLOG - ",
    };
  }
  export default function SinglePostLayout(props:any) {

    return (

        <>
        <SinglePost />
         
      </>
    )
  
    
  }