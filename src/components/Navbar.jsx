
import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import avatar from '../data/avatar.jpg';
import { Cart, Chat, Notification, UserProfile } from '../components/Index';
import { useStateContext } from '../contexts/ContextProvider';


const Navbar = () => {

  const {activeMenu,setActiveMenu,isClicked,setIsClicked,handleClick,screenSize, setScreenSize , currentColor}=useStateContext();

  useEffect(()=> {

    const handleResize=()=> setScreenSize(window.innerWidth);

      window.addEventListener("resize" , handleResize);

      handleResize();


      return () =>  window.removeEventListener("resize" , handleResize);
      
  }, []);

  useEffect(()=> {
    if(screenSize <= 900){
      setActiveMenu(false);
    }

    else{
      setActiveMenu(true)
    }
  },[screenSize])



  const NavButton=({title, customFunc,icon,color,dotColor})=>( 

    <TooltipComponent content={title} position="BottomCenter">
      <button type='button' onClick={customFunc} style={{color}} className="relative text-xl rounded-full p-3 hover:bg-light-gray">

        <span style={{background: dotColor}} className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2' />
          {icon}
      </button>
    </TooltipComponent>

  )

  return (
    <div className='flex justify-betweenm left-60 p-2 md:mx-6 relative'>

      <NavButton title="Menu" customFunc={()=> setActiveMenu((prevActiveMenu) => !prevActiveMenu)} color={currentColor} icon={<AiOutlineMenu />} />

      <div className="flex ">

      <NavButton title="Cart" color={currentColor} icon={<FiShoppingCart />} />

      <NavButton title="Chat" dotColor="#03C9D7" color={currentColor} icon={<BsChatLeft />} />


     

      {isClicked.cart && <Cart />}
      {isClicked.chat && <Chat />}
      {isClicked.notification && <Notification />}
      {isClicked.userProfile && <UserProfile />}





      </div>

      </div>
  )
}

export default Navbar
