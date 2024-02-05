"use client"
import NextImagePractice from "@/components/level5/index";
import Fetch from "@/components/level5/fetch";
import Axios from "@/components/level5/axios";
import DisplayLocalApiData from "@/components/level5/apiFromExpress";
import FileUpload from "@/components/level6/fileUpload";
const NextImage = () => {


  return (

    <>

      <NextImagePractice />
      <Fetch />
      <Axios />
      <DisplayLocalApiData />
      <FileUpload />


    </>
  )
}

export default NextImage;