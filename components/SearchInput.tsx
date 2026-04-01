"use client"
import React, { useState, useEffect } from 'react'

export default function SearchInput() {
    const [searhData , setSearchData]= useState("");
    const apiCall = (data)=>{
        console.log("you typed:-",data);
    }
    useEffect(()=>{
        let timeOut = setTimeout(() => {
            if(searhData){
                apiCall(searhData);
            }
        }, 3000);
        return ()=>{
            clearTimeout(timeOut);
        }
    },[searhData]);
  return (<>
<input value={searhData} onChange={(e)=>setSearchData(e.target.value)}/>
{searhData}
  </>
  )
}
