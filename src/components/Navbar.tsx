import React from 'react';
import Image from "next/image";
import {Box, Container, Grid, Heading, Section, Text} from "@radix-ui/themes";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Navbar() {
  return (
    <div className="w-full h-13 bg-[#0d21a1] flex items-center">
      <Image
      src={"/images/boxing-4.png"}
      width="150"
      height="150"
      alt="Hero"    
      />

        <div className="flex justify-center pl-[500px]">
          <Text className="text-lg">
            Store
          </Text>
        </div>


        <div className="flex justify-center pl-52">
          <Text className="text-lg">
            About
          </Text>
        </div>

        <div className="flex justify-center pl-52">
          <Text className="text-lg">
            Contact
          </Text>
        </div>

        <div className="flex justify-center pl-52">
          <ShoppingCartIcon style={{ color: 'red' }}/>
        </div>
    </div>
  )
}
