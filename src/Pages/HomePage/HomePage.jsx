import React from 'react';
import avatar from "../../assets/images/avatar.png";
import WIPModal from '../../Components/WIPModal/WIPModal';

const HomePage = () => {
  return (
    <>
    <WIPModal />

    <div class="h-full flex justify-center items-center">
  <div class="bg-windowsgray max-w-[70%] max-h-[80%] absolute border-2 border-r-gray-500 border-b-gray-500 md:max-w-[50%]">
    <div class="flex justify-between bg-gradient-to-r from-windowsblue to-linearblue px-3 h-6 items-center">
            <p class="text-white">Welcome</p>
            <div class="bg-windowsgray flex items-center justify-center w-4 h-4 border border-r-gray-500 border-b-gray-500">
                <p class="font-bold">x</p>
            </div>
        </div>
        
        <div class="flex justify-center pt-3 md:p-5">
          <img src={avatar} alt="" class="w-32 rounded-full border-2 border-gray-300 shadow-lg md:w-52"/>
        </div>
        <div class="text-md p-3 md:px-20 md:text-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque quisquam neque quis commodi! Accusamus nemo dicta in, neque aliquam voluptatem sit rerum ullam. Non a quidem culpa ratione nobis fugiat?
        </div>
        <div class="flex justify-center items-center pb-4 space-x-3 relative bottom-0">
          <a href="#" class="border-2 border-r-gray-500 border-b-gray-500 w-5 h-5 flex justify-center items-center">{"<"}</a>
          <a href="#">1</a>
          <a href="#">2</a>
          <a href="#">3</a>
          <a href="#" class="border-2 border-r-gray-500 border-b-gray-500 w-5 h-5 flex justify-center items-center">{">"}</a>
        </div>
       
        </div>
</div>
    </>
    
  )
}

export default HomePage
