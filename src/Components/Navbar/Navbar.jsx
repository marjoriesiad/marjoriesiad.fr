import React from "react";
import startImg from "../../assets/images/start.png";
import aboutImg from "../../assets/images/a-propos.png";
import projetImg from "../../assets/images/projets.png";
import blogImg from "../../assets/images/blog.png";
import contactImg from "../../assets/images/contact.png";
import connexionImg from "../../assets/images/connexion.png";

const Navbar = () => {
  return (
    <>
       <div class="bg-windowsgray flex justify-between items-center py-7 h-10 w-screen fixed bottom-0">
    <div class="flex justify-center items-center m-2 space-x-2 cursor-pointer border-2 p-2 border-r-gray-500 border-b-gray-500">
      <img src={startImg} alt="" class="w-24"/>
    </div>

    <div class="p-2 px-3 mr-2 border-2 border-t-gray-500 border-r-white border-b-white border-l-gray-500 font-bold">
      15:26
    </div>
  </div>

    <div class="flex bg-windowsgray fixed left-1 w-56 min-h-12 h-96 bottom-14 text-xl border-2 border-r-gray-500 border-b-gray-500 z-10 " id="navbar-menu">
      <div class="bg-windowsblue h-95 w-10 mr-4 text-white">
        <p class="text-2xl font-bold w-[160px] -rotate-90 absolute -left-[28%] top-[70%]">
          Windows 98
        </p>
      </div>
      <div class="py-5">
        <div class="flex flex-col space-y-6 mt-5">
          <a href="#" class="flex gap-3"><img src={aboutImg} alt="" class="w-8 h-8"/>A Propos</a>
      <div class="border-2 border-b-gray-500 w-[95%]"></div>
      <a href="#" class="flex gap-3"><img src={projetImg} alt="" class="w-8 h-8"/>Projets</a>
      <a href="#" class="flex gap-3"><img src={blogImg} alt="" class="w-8 h-8"/>Blog</a>
      <a href="#" class="flex gap-3"> <img src={contactImg} alt="" class="w-8 h-8"/>Contact</a>
      <div class="border-2 border-b-gray-500 w-[95%]"></div>
      <a href="#" class="flex gap-3"><img src={connexionImg} alt="" class="w-8 h-8"/>Connexion</a>
        </div>
      </div>
    </div>
      
    </>
  );
};

export default Navbar;