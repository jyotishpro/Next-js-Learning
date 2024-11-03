# common layout
  
          app/login/layout.js:

                    import Link from "next/link";

               export default function Loginlayout({children}){
                   return(
                       <div>
                            <ul className="decoration-none border-2 flex gap-4 items-center justify-center  border-green-600">
                               <li>
                                   <Link href="/">Home page</Link>
                               </li>
                               <li>
                                   <Link href="/login">Main login</Link>
                               </li>
                               <li>
                                   <Link href="/login/studentlogin">Student login</Link>
                               </li>
                               <li>
                                   <Link href="/login/collegelogin">College login</Link>
                               </li>
                            </ul>
               
                           {children}
                       </div>
                   )
               
               }  

        app/about/layout.js

                                import Link from "next/link";
               
               export default function Aboutlayout({children}){
                   return(
                       <div>
                      <ul className="decoration-none border-2 flex gap-4 items-center justify-center  border-green-600">
                       <li>
                           <Link href="/">Home page</Link>
                       </li>
                       <li>
                           <Link href="/about">Main About</Link>
                       </li>
                      <li>
                       <Link href="/about/aboutstudent">About Student</Link>
                      </li>
                      <li>
                       <Link href="/about/aboutcollege">About College</Link>
                      </li>
                      </ul>
                       {children}
                       </div>
                   )
               }

# make nested routing:


           folder structure:
               
              localhost:3000/login:
                                     app/login/page.js

             localhost:3000/login/studentlogin:
                                                app/login/studentlogin/page.js


                 component and props and etc is just like react:
# conditional layout:

           in /about/layout.js:

                                        "use client"
                  import Link from "next/link";
                  import { usePathname } from "next/navigation";
                  
                  export default function Aboutlayout({children}){
                      const pathName = usePathname();
                      return(
                          <div>
                              {
                                  pathName != "/about/aboutcollege" ?
                  
                         <ul className="decoration-none border-2 flex gap-4 items-center justify-center  border-green-600">
                          <li>
                              <Link href="/">Home page</Link>
                          </li>
                          <li>
                              <Link href="/about">Main About</Link>
                          </li>
                         <li>
                          <Link href="/about/aboutstudent">About Student</Link>
                         </li>
                         <li>
                          <Link href="/about/aboutcollege">About College</Link>
                         </li>
                         </ul>
                             :null
                         }
                          {children}
                          </div>
                      )
                  }

       in /login/layout.js:

                         "use client"
        import Link from "next/link";
        import { usePathname } from "next/navigation";
        
        export default function Loginlayout({children}){
            const pathName = usePathname();
             console.log(pathName);
             return(
                 <div>
                     
                     {
                         pathName!= "/login/studentlogin" ?
                         
                      <ul className="decoration-none border-2 flex gap-4 items-center justify-center  border-green-600">
                       
                         <li>
                             <Link href="/">Home page</Link>
                         </li>
                         <li>
                             <Link href="/login">Main login</Link>
                         </li>
                         <li>
                             <Link href="/login/studentlogin">Student login</Link>
                         </li>
                         <li>
                             <Link href="/login/collegelogin">College login</Link>
                         </li>
                         
                      </ul>
                          : <Link href="/login">go to Main login</Link>
                      }
                     
         
                     {children}
                 </div>
             )
         
         }         


         question no. : how to write conditions in jsx.

                2. How to add conditional layout

 # dynamic routing:

            what are dynamic routes
            make a folder and file for the dynamic route
            write code and navigation
            get dynamic route name

            
 # Catch all segments of routess

       what are the segments of the route?
       :::  route segments refers to the part of url.
       how to get all segments of route?
       :::: firstly make folder name : [...folderName]/page.js

              in page.js: 
                          
                                          "use client"
                export default function Lecture({params}){
                    console.log(params.lecture[0])
                
                    return(
                        <div>
                            <h1>Day {params.lecture[0]} </h1>
                            <h1> Lecture no: {params.lecture[1]} </h1>
                        </div>
                    )
                
                }

      interview question:

                1. get route name from url?
                2. How to get all segments of route?

         
# 404 page in nextjs

         what is 404 page?

                :::::: 
          make the global 404 page?
          :::: firstly make file name should be: not-found.js:
                                                                within this file you can write your code
          make route specific 404 page:

               isko banane ke liye dynamic aur segment routing ka use kar skate hai [...foderName]  and make page.js file 

# middleware in next js

           what is middleware in next js routing:
              
               ek aisa self executing code hota hai jo page ko redirect hone se pahle execute hota hai

           make middleware in next js app?

             ans: firstly make folder in src that name is: middleware.js:
                    in middleware.js:
                                     import { NextResponse } from "next/server"
                                     
                                     export  function middleware(request){
                                         // if(request.nextUrl.pathname != "/login"){
                                             return NextResponse.redirect(new URL("/login",request.url))
                                     
                                         // }
                                     }
                                     
                                     export const config = {
                                         matcher:["/about/:path*"]
                                     }



