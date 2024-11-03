# fetch data from api

                    "use client";
                   import { useEffect, useState } from "react";
                   
                   export default function Product() {
                       const [data, setData] = useState([]);
                   
                       useEffect(() => {
                   
                           const fetchData = async () => {+
                               try {4
                              let productData = await fetch("http://127.0.0.1:3001/");
                                   productData = await productData.json();
                                   console.log(productData);
                                   setData(productData); // Correctly set data
                               } catch (error) {
                                   console.error("Error fetching data:", error);
                               }
                           };
                           fetchData();
                       }, []);
                   
                       return (
                           <div>
                               <h1>Product page</h1>
                               
                               <h1>this is about product</h1>
                   
                               {
                                   data.map((item, index) =>(
                             <h1 key={index}>user name: {item.name}</h1>
                                   ))
                               }
                           </div>
                       );
                   }

# fetch data from server api
    
          create server component for products:
          make a function for call api:

                          async function Party(){
                          try{
                              let productDataList = await fetch("http://127.0.0.1:3001/");
                              productDataList = productDataList.json();
                              return productDataList;
                          } catch (error) {
                              console.error("error",error)
                          }
                      }

              call api and render data: 

                                   
                            export default async function ProductData(){
                            let ProductItem = await Party();
                            console.log(ProductItem)
                            return(
                                <div>
                                    <h1>this is jyotish</h1>
                                    {
                                        ProductItem.map((item)=>(
                                            <h2> user name: {item.name}</h2>
                                        ))
                                    }
                                </div>
                        
                            )
                        }

# client component with server Component

         why do we need a Client component inside Server Component?
         :::::::   because hame event perform karna hota hai server component ke andar so that's why hme iska use  karna hota hia.

         make component: name.js: 

                                          "use client"
                                          export default function Checkroll({price}){
                                              return(
                                                  <div>
                                          
                                                  <button onClick={()=>alert(price)}>Check roll</button>
                                                  
                                                  </div>
                                              )
                                          } 

     pass data in component:
                      
                     import Checkroll from "./event.js";
                      
                      async function Fetchlist(){
                          try{
                              let fetchdata1 =  await fetch("http://127.0.0.1:3001/");
                              fetchdata1 = fetchdata1.json();
                              return fetchdata1;
                      
                          } catch(error){
                              console.error("error in fetching data", error)
                              
                          }
                      
                          
                      }
                      
                      export default async function Innnerlist(){
                      
                          let resultlist = await Fetchlist();
                          console.log(resultlist)
                      
                      
                          return(
                              <div>
                      
                              <h1>hi this is jyotish</h1>
                      
                              {
                                 resultlist.map((item)=>(
                                  <div>
                                      <h1>user name: {item.name} </h1>
                                      <Checkroll price = {item.roll}  />
                                      </div>
                                  ))
                              }
                              .....
                              
                              </div>
                          )
                      }   

# Image optimization

            q. why we use Image component of next js 

              ans:  .. optimize image loading
                    ..        

            Q. import and use image.
             ans:
                     
                     import Link from "next/link";
                     import Image from "next/image";
                     import Profile from '../public/profile.jpg';
                     
                     export default function ImageCmp() {
                         return (
                             <div>
                                 <h1>This is the image page</h1>
                                 <Link href="/">Go to home page</Link>
                                 
                              
                                 <Image 
                                     src={Profile}
                                     height={200}
                                     width={200}
                                     alt="Profile image"
                                 />
                     
                                
                                 <Image 
                                     src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapers.com%2Fimages%2Fhd%2Fcoding-background-9izlympnd0ovmpli.jpg&f=1&nofb=1&ipt=dabd99f97ef4c8e84e8be17156492360d7cd9e51e35504e8340cc502a6a9c5d5&ipo=images"
                                     width={300}
                                     height={300}
                                     alt="Coding background"
                                 />
                             </div>
                         );
                     }


                use html img tag:
                config for image from other domain
                imp0rtant props in next image
                interview question

                q1. How to optimize image in next js.
                ans: using Image componenet

                q2. Different between nextjs image and html tag
                :::: next js image: ye size and image ka optimization accha karta hai.
                html tag: isme hame khud se sab kuchh karna hota hai.

                q3. How to use public folder images.
                ::::: public folder images ko use './public' ko import karke kar skte hai.

                q4. config for external image URL.
                  
                                  go in next.config.js: file
                                          
                                          /** @type {import('next').NextConfig} */
                                             const nextConfig = {
                                                 images: {
                                                     domains: ["external-content.duckduckgo.com"]
                                                 }
                                             };
                                             
                                             export default nextConfig;
                
# Font optimization

    why use nextjs font?
    how to use a normal font?
    How to use next js font?
    interview question
                        
                        import Link from "next/link";
                        import {Roboto} from "next/font/google"
                        const roboto = Roboto({
                            weight:'100',
                            subsets:['latin'],
                            display:'swap'
                        })
                        
                        export default function FontOpt(){
                        
                            return(
                                <div>
                                <h1>this is about fontopt</h1>
                                <Link href="/">home page</Link>
                          
                               <h1 className={roboto.className}>font with next js font feature</h1>
                        
                                </div>
                            )
                        }

# generateMetadata for Dynamic meta
 
                    what is dynamic meta data?
                    ::: dynamic meta data ka matlab ki hm sabhi page ke alag titile aur description aur etc. likh sakte hai.

                    what is the use of generateMetadata?
                    ::: generateMetadata ka use SEO me hota hai 

                    How to use generateMetadata?

                    ::::::: import Link from "next/link";
                            
                            export default function Metapage(){
                                return(
                                    <div>
                                        <h1>this is meta data page</h1>
                                        <Link href="/">go to home page</Link>
                                    </div>
                                )
                            }
                            
                            export function generateMetadata(){
                                return{
                                    title:"meta page title",
                                    description:"meta page description"
                            }
                            }

               wrong way to use meta data?
               ::::  
 
                        import Link from "next/link";
                            
                            export default function Metapage(){
                                return(
                                    <div>
                                    <title>student page </title>
                                        <h1>this is meta data page</h1>
                                        <Link href="/">go to home page</Link>
                                    </div>
                                )
                            }

                   use generateMetadata with multiple route?
                   :: yes we can like this as above shown

                   how to use dynamic title tag in nextjs
                   :::   using generateMetadata

                   

                                      
                             