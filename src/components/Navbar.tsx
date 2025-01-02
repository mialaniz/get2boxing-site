import React from 'react';
import Image from "next/image";
import {Box, Container, Grid, Heading, Section, Text} from "@radix-ui/themes";


export default function () {
  return (
    <div className="w-full h-13 bg-[#0d21a1]">
      <Image
      src={"/images/boxing-4.png"}
      width="150"
      height="150"
      alt="Hero"    
      /> 
    </div>
  )
}
