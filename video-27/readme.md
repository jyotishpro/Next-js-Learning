# script component in Next.js

         what is Script Componenet?
         >>>> script component ka use kisi library ya file ko use karna hot hai hota hai ho jo javascript file me hota hai tab script ka use karete hai.

         How to use it:

         >>>>>
                   "use client";
                   import { useEffect } from "react";
                   import Script from "next/script";
                   
                   export default function Scriptcomp() {
                       useEffect(() => {
                           if ( navigator.geolocation) {
                               navigator.geolocation.getCurrentPosition(
                                   (position) => {
                                       console.log("Latitude:", position.coords.latitude);
                                       console.log("Longitude:", position.coords.longitude);
                                   },
                                   (error) => {
                                       console.error("Error obtaining location:", error);
                                   }
                               );
                           } else {
                               console.log("Geolocation is not supported or running on the server.");
                           }
                       }, []);
                   
                       return (
                           <div>
                               <Script 
                                   src="/location.js"
                                   strategy="lazyOnload"
                                   onLoad={() => {
                                       console.log("Location script loaded");
                                   }}
                               />
                               <h1>Get User Location</h1>
                           </div>
                       );
                   }

# Loader in Next.js
                   why do we need a loader in next.js?
                   :::: because whenever i fetch the a lot data through api then it takes time. on that time 
                   our web page looks blank so that i use loader that time to show a message that loading data....

                   Call API?
                   ::::::  as you saw in server api
                   
                   Render data of API on screen:
                   ::::::: as you saw in server api

                   Make loading screen.
                   :::: firstly make file name: loading.js:
                   with this file: 
                                export default function LoaderPage(){
                                 return(
                                     <div>
                                         <h1>Loading data........</h1>
                                     </div>
                                 )
                             }
                                
                   interview question:
                   1. How to make a loader in Nextjs?
                   2. How to add loadint screen in NextJs?


# static assets in next js

          public folder ke andar jo kuchh bhi file banate hai wo statick hota hai use kahi bhi use kar sakte hai. 

# How to make production build

     what is build:
     '''''''   jo bhi code ham likhte hai wo directly browser pe run nahi hota hai. use phle browser ke dwara understandable bnaya jata hai tab run hota ahi isi ko build kahte hai.
     Type od build?
     1. prduction
     2.development
     3. khud se bhi bna skte skte hai

     difference between production and development?
     :::::: production> ye alag url pe chlta hai., ye fast hota hai., isme code minified hota hai.  ye readable bhi nahi hota hai.
            development> ye slow hota hai, isko minified karne se browser ke andar debug main problem hota hai.

            npm run dev::::: isse development build start hota hai. ye ready to use build hota hai. ye directly run hona start ho jata hai.
            npm run build:::: isse production build start hota hai.. ise run karne ke liye ?>>>> npm start... ye readable form mein nahi hota hai.

# static site generation(SSG)

           what is SSG?
           ::::: ye build time pe hi js ke code ko html me convert karke page bna deta hai.              

           make a service file and call api?
           :::::: firstly make dynamic page and within dynamic page:
           
                           import UserDataFetch from "@/ssgservices/page"
                           export default async function UserId(props){
                           
                               const result = UserDataFetch();
                               const data = await result;
                               const currentid = props.params.userid
                               console.log(data[currentid])
                               return(
                                   <div>
                                       <h1>
                                           hello this is dynamic
                                           <h2>name:{data[currentid].name}</h2>
                                          
                                           <h2>class:{data[currentid].clas}</h2>
                                           <h2>roll:{data[currentid].roll}</h2>
                                           
                                          
                                       </h1>
                                   </div>
                               )
                           }
                           
                           export async function generateStaticParams(){
                               const result = UserDataFetch();
                               const data = await result;
                               return data.map(data=>({
                                   userid:data.uniqueid.toString()
                           }))
                           }

# export static html page with build

          1. what is static html means ?
          ::::; ye different pages ho html me generate karke deta hai.
          2. make some pages.
          3. Add configuration;
          :::::::::  output:"export"
          4.Run build command:
          ::::::: npm run build 
          5. check html and try to run it.

# Redirection in Next js

      1. What is Redirection.
      ::::: jab user koi url ko enter karen aur access karne ka prayas karen , usi time jab hamara wo page working me ho to use ham kisi aur page ke upar redirect karba sakte hai. 

      2. Redirect form component.

      ....          import { redirect } from "next/navigation"

                      export default function Redirection (){
                          redirect('/')
                          return(
                      
                              <div>
                                  Redirection learning
                              </div>
                          )
                      }
         3. Redirect form config file.

         ::: in next.config.mjs:

                                 /** @type {import('next').NextConfig} */
                                  const nextConfig = {
                                      images: {
                                          domains: ["external-content.duckduckgo.com"]
                                      },
                                      // output:'export',
                                  
                                      redirects:async ()=>[
                                          {
                                              source:'/redirection',
                                              destination:'/',
                                              permanent:false
                                          },
                                          {
                                              source:'/redirection',
                                              destination:'/',
                                              permanent:false
                                          },
                                          {
                                              source:'/redirection/:redirectionid',
                                              destination:'/',
                                              permanent:false
                                          },
                                          {
                                              source:'/login',
                                              destination:'/',
                                              permanent:false
                                          },
                                      ]
                                  
                                  };
                                  
                                  export default nextConfig;
        4. Dynamic url redirect.
        5.How many ways we have to redirect?
        6. How to redirect dynamic redirection with config file?       

# Environment variables:

    1. What are environment varibles.
        ;;; envioenment varibale me default kuchh value hota hai kuchh hm bhi declare kar sakte hai. ye ek tarike se private hota hai . ye server side pe render hota hai , client side pe render nahi hota hai.

    2. How to access environment variable?
    :::::  process.env.NODE_ENV

           
             import { API_BASE_URL } from "../config/constant"

     export default function Environment(){
      console.log(process.env.NODE_ENV)
    return(
        <div>
     {
        process.env.NODE_ENV == "development" ?
        <h1>you are on development mode</h1>
    
        :
        <h1> you are on producton mode</h1>
     }

      {
        process.env.PAGE_ON == "testing" ?
         <h1>this is on testing mode api {API_BASE_URL} </h1>
        :
        <h1>this is not on testin mode api {API_BASE_URL}</h1>
      }

            <h1>enviornmet variable page</h1>
        <h2>{process.env.ADMIN_PASS}</h2>
        <h2>{process.env.DB_PASS}</h2>
        {API_BASE_URL}
        </div>
    )
    }
        3. Use environment variable?
        ::::: make file name: .env.local
        in .env.local:
                 ADMIN_PASS = "admin@123"
                 DB_PASS = "db@123"
                 PAGE_ON = "testing"   
        in config/constant.js:

               export const API_BASE_URL = process.env.PAGE_ON == 'testing' ? 'example.api.dev.com' : 'expample.api.prod.com'                

         q.1. how to use different configurations in defferent Build?
        2. What are Environment variables?