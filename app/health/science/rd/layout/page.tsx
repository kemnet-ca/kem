
import Head from 'next/head';
import Cookies from"js-cookie";

import { headers } from "next/headers";
import { usePathname  } from 'next/navigation'
import {  ResolvingMetadata } from 'next';
import SinglePost from '../posts/page';

type Metadata = {
  title: string;
  description?: string;
  // Add other metadata properties if needed
};


export async function generateMetadata(content_id: any): Promise<Metadata> {
 
 
  const url = `https://back.kemet.care/api/single/post/${content_id.searchParams.content_id}`;

  try {
      const response = await fetch(url);
      if (!response.ok) {
          throw new Error('Failed to fetch data');
      }

      const data = await response.json();
      const blogPost = data.post;

      return {
          title: `KEMET BLOG - ${blogPost!.title}`,
          description: `BLOG - ${blogPost!.title}`,
          // Add other metadata properties as needed
      };
  } catch (error) {
      console.error('Error fetching data:', error);
      return {
          title: 'Error occurred ', // Provide a fallback title or error message
          description: 'Failed to fetch data',
          // Add other error-related metadata properties as needed
      };
  }
 

}

  export default function SinglePostLayout(props:any) {

    return (

        <>
        <SinglePost />
         
      </>
    )
  
    
  }