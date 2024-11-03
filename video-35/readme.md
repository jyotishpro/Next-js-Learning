# API Routes:
  
     Use of API Routes?
     :::  api banane ke liye
     Make API Route.
     :::::::: make folder within app: name -> api
     within api folder: make folder name -> asYouWish
     with asYouWish folder make file naem: route.js
     within route.js:
                 
                    import { NextResponse } from "next/server";

                     export async function GET(request){
                         return NextResponse.json({name:"jyotish",age:21,city:"bihar sharif"},{status:200})
                     }

         3. test it with postman
         4.How to make api route with next js.
         5. Use of api route in next js.            

 # GET API with static data

          API for user detail and user list.
          2. make a static db file:
               ;;;; make folder with src name asYouWish:
               in asYouWish:
                           make file name db.js:

                             export const UserData = [
                                {
                                    name:'jyotish',
                                    age:21,
                                    id:32,
                                    email:'kumarjyoitsh67303@gmail.com'
                                }
                             ]        

        4. Make user list api:
          ;;;; make folder with api name staticdata:
          within staticdata:  make file name: route.js:
          within route.js:
                    import { UserData } from "@/src/utli/db";
                     import { NextResponse } from "next/server";
                     
                     export async function GET(request){
                         const data = UserData
                         return NextResponse.json(data,{status:200})
                     
                     }                     
         4. make a route for single user api.

                 -> make folder within staticdata name [id]    
                 within [id]:
                 make file route.js:
                         
                          import { UserData } from "@/src/utli/db";
                          import { NextResponse } from "next/server";
                          
                          export async function GET(request,content){
                              console.log(content.params.id)
                              const specdata = UserData.filter((item)=>item.id==content.params.id)
                             return NextResponse.json(
                              specdata.length == 0 ?{result:"no data found",success:false?result:specdata,success:true}:
                              {status:200})
                          }
            5. get request params.
            6. filter result and test api
            7. how to make api with next js
            8. api for single result?
            9. get params from url in next js api route
            10. filter result from array


# Call Next js APIs

    1. make route for screen.
    ::make folder within app name callapi:
    within callapi make page.js:
    within page.js:
              import Link from "next/link";
               
               async function FetchData(){
                   try{
                       let data = await fetch("http://localhost:3000/api/staticdata")
                       data = data.json();
                    
                       return data;
                   } catch(error){
                       console.log("error in ferched data")
                   }
               }
               
               export default async function Callapi(){
                   let result = await FetchData()
                   
                   return(
                       <div>
                           <h1>this is call api </h1>
                           {
                               result.map((item)=>(
                                   <div key={item.id} className="p-2 border border-black w-fit m-2 cursor-pointer hover:bg-red-400 ">
                                   <Link href={`/callapi/${item.id}`}>{item.name}</Link>
                                   </div>
                               ))
                           }
                       </div>
                   )
               }   
        3. call user list api
        4. display data:

            make folder with callapi name: [userid]
            within [userid]:
                   make file name page.js:
                      
                    async function FetchData(id){
                        try{
                            let data = await fetch(`http://localhost:3000/api/staticdata/${id}`)
                            data = data.json();
                         
                            return data;
                        } catch(error){
                            console.log("error in ferched data")
                        }
                    }
                    
                    export default async function UserId(params){
                        let result = await FetchData(params.params.userid)
                        
                        return(
                            <div>
                                this is dynamic page
                                <br></br>
                                <h1>name: {result.name}</h1>
                                <h1>email: {result.email}</h1>
                                <h1>age: {result.age}</h1>
                                <h1>id: {result.id}</h1>
                            </div>
                        )
                    }
        5. Test api:
        ;;;;

# POST apis 

     go in apis section ;
     make post api request:
                              // POST request
                             export async function POST(request){
                                 let payload = await request.json()
                                 console.log(payload.name)
                             if(!payload.name || payload.age || payload.email){
                                 return NextResponse.json({result:"require field not found", success:false},{status:404})
                             }
                                 return NextResponse.json({result:"new user created", success:true},{status:201})
                             }

                        .... go in postman -> post request karen -> body me jakar data send karen.
# integerate post APIs:
        1. Make new page route.
        :: make folder name integerateapi .
        2. make a form and add input fields 
        3. define state for inpute fields.
        4. write code for call api.

          ::::::::::    
                       "use client"
                       import { useState } from "react"
                       
                       export default function AddData(){
                           const [name, setname] = useState('');
                           const [email, setemail] = useState('');
                           const [age, setage] = useState(0);
                       
                           const adddata = async () => {
                               let response = await fetch("http://localhost:3000/api/staticdata",{
                                   method:"POST",
                                   body:JSON.stringify({name,age,email})
                               });
                               response =await response.json()
                               console.log(response)
                               if(response.success){
                                   alert("new user created")
                               } else{
                            alert("require field not found")
                               }
                           }
                       
                           return(
                               <div className="bg-gray-400 min-h-screen flex flex-col items-center justify-center">
                                   <label className="text-white text-2xl font-bold mb-2">enter your name</label>
                                   <input  type="text" placeholder="enter your name" className="border border-black rounded-lg p-2 text-white bg- bg-gray-800"
                                   value={name}
                                   onChange={(e)=>setname(e.target.value)}
                                   />
                                   <label className="text-white text-2xl font-bold mb-2">enter your email</label>
                                   <input type="email" placeholder="enter your email" className="border border-black rounded-lg p-2 text-white bg- bg-gray-800" 
                                   value={email}
                                   onChange={(e)=>setemail(e.target.value)}
                                   />
                                   <label className="text-white text-2xl font-bold mb-2">enter your age</label>
                                   <input type="number" placeholder="enter your age" className="border border-black rounded-lg p-2 text-white bg- bg-gray-800"
                                   value={age}
                                   onChange={(e)=>setage(e.target.value)}
                                   />
                                   <button className="bg-red-800 text-white font-bold text-2xl p-2 mt-2 rounded-lg w-52 "
                                   onClick={adddata}
                                   >submit</button>
                               </div>
                           )
                       }   

# make PUT APIs:

                 
              export async function PUT(request, content ){
                  let payload = await request.json();
                  payload.id = content.params.id;
                  if(!payload.id || !payload.name || !payload.age || !payload.email){
                      return NextResponse.json({result:"requested data is not valid",success:false},{status:404})
                  } else{
              
                      return NextResponse.json({result:payload,success:true},{status:200})
                  }
              }       

# integerate PUT APIs

             firstly make folder name  integerate put apis : and within this flolder make file name page.js:
             within page.js:

                                import DeleteData from "@/src/utli/delete";
                                import Link from "next/link";
                                
                                const FetchData = async() =>{
                                    let data = await fetch("http://localhost:3000/api/staticdata/")
                                    data = await data.json()
                                    return data;
                                
                                }                                                        
                                
                                export default async function Integrate(){
                                let result =  await FetchData();
                                
                                    return(
                                        <div>
                                            <h1>this is integerate put api  page</h1>
                                            {
                                                result.map((item)=>(
                                                    <div className="flex gap-11">
                                
                                                    <span><Link href={`/integerateputapi/${item.id}`}>
                                                    <h1 key={item.id}>name  : {item.name}</h1>
                                                    </Link> </span>
                                                    <span><Link href={`/integerateputapi/${item.id}/update`}>edit</Link></span>
                                                    <DeleteData id={item.id}/>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    )
                                }                                                                
         then after make folder name : [id]
         within thid [id] folder make file name page.js:
         within page.js:
                        
                         
                         async function FetchDAta2(id) {
                             let Dyndata = await fetch(`http://localhost:3000/api/staticdata/${id}/`)
                             Dyndata = await Dyndata.json();
                             console.log(Dyndata)
                             return Dyndata;
                         }
                         
                         
                         export default async function Dynamicpage({params}) {
                         
                             let result8 = await FetchDAta2(params.id);
                         
                         
                             return (
                                 <div>
                                     <h1>this is dynamic page for any id</h1>
                                     <h1>User detail</h1>
                                     <h3 key={result8.result.id}>name: {result8.result.name}</h3>
                                     <h3 key={result8.result.id}>email: {result8.result.email}</h3>
                                     <h3 key={result8.result.id}>age: {result8.result.age}</h3>
                                     <h3 key={result8.result.id}>id: {result8.result.id}</h3>
                                 </div>
                             )
                         }                                       
         
        then after within this [id] folder make another folder name : update
        within update folder make file name page.js:
                        
               within this page.js:
                       
                       "use client"
                       import { useEffect, useState } from "react"
                       
                       export default function UpdateData({params}) {
                           const [name, setname] = useState('')
                           const [age, setage] = useState('')
                           const [email, setemail] = useState('')
                       
                           let id = params.id
                       
                           useEffect(()=>{
                             filldata()
                           },[])
                       
                           async function getData(){
                               let data = await fetch(`http://localhost:3000/api/staticdata/${id}`)
                               data = await data.json()
                               return data;
                           }
                           
                           async function PutData(){
                               let data = await fetch(`http://localhost:3000/api/staticdata/${id}/`,{
                                   method:"PUT",
                                   body:JSON.stringify({name,email,age})
                               })
                               data = await data.json()
                               console.log(data)
                       
                               if(data.success){
                                   alert("data updated successfully")
                               } else{
                                   alert("data is not updating , all field are required, ")
                               }
                       
                               
                              
                           }
                               async function filldata(){
                                   let result = await getData();
                                   
                                   setname(result.result.name)
                                   setemail(result.result.email)
                                   setage(result.result.age)
                                   
                               }
                            
                           
                           return (
                               <div className="flex flex-col gap-8">
                                   <h1>thid is updation page</h1>
                                   <input className="bg-gray-900 border border-black text-white font-bold placeholder:text-white p-2 m-4 rounded-2xl " type="text" placeholder="enter your name"
                                       value={name}
                                       onChange={(e) => setname(e.target.value)}
                                   />
                                   <input className="bg-gray-900 border border-black text-white font-bold placeholder:text-white p-2 m-4 rounded-2xl " type="email" placeholder="enter your email"
                                       value={email}
                                       onChange={(e) => setemail(e.target.value)}
                                   />
                                   <input className="bg-gray-900 border border-black text-white font-bold placeholder:text-white p-2 m-4 rounded-2xl " type="age" placeholder="enter your age"
                                       value={age}
                                       onChange={(e) => setage(e.target.value)}
                                   />
                                   <button onClick={PutData} className="bg-green-700 m-4 text-white p-3 text-2xl rounded-2xl font-bold">update user</button>
                       
                               </div>
                           )
                       }

# make DELETE APIs:

       you need to create this api within static apis
             
                    export function DELETE(request,content){
                 let id = content.params.id
                 
                 if(id){
                     return NextResponse.json({result:"user deleted", success:true},{status:200})
                 } else{
                     return NextResponse.json({result:"interna error, please try after some time later", success:false},{status:404})
                 }
             }                       
        
# Integerate DELETE APIs:

               make componenet for delete button 
               within this component:

                 "use client"
                  export default function DeleteData(props){
                      
                      const deleteuser = async () => {
                          let result = await fetch("http://localhost:3000/api/staticdata/21"+props.id,{
                              method:"delete"
                          })
                          result = await result.json()
                          console.log(result)
                          if(result.success){
                              alert("true")
                          }
                      }
                      return(
                          <div>
                              <button onClick={deleteuser}>Delete</button>
                          </div>
                      )
                  }        

                 <DeleteData id={item.id}/>

# Call all API routes:
      what does mean by catch all routes:
      ::: whenever a user enter any parameter in url then the user will be get a result of his parameter and i can do anything with this parameter but, user will never get 404 page.

      make route;
           firstly make folder within api folder name [...cathroute]
           within [...catchroute] folder make file name route.js
           within route.js:
               
               import { NextResponse } from "next/server";
               
               export async function GET(request,content){
                   
                   return  NextResponse.json({result:content.params.catchroute},{status:200})
               }