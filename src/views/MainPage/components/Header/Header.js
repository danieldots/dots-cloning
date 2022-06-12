import React from "react";
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { HeaderContent, HeaderLink, HeaderLinkItem, HeaderStyle, HeaderLogo } from "./Header.style";



const Header = () => {
  const headerItems = [
    { id: 'home', text: '홈', href: '/' },
    { id: 'main-class', text: '신청 가능 수업', href: '/' },
    { id: 'pre-class', text: '이 수업 원해요!', href: '/' },
    // {
    //     id: "introduce-admission",
    //     text: "입학 안내",
    //     href: "/introduce-admission",
    // },
    // { id: 'class', text: '클래스', href: '/class' },
  ]
    return (
      <>      
        <HeaderStyle>
        <HeaderContent>
          <HeaderLogo className="App-logo" src={require("/Users/danielkim/Desktop/dots-cloning/src/assets/svg/dotsLogo.svg").default} />
          <HeaderLink>
            {headerItems.map((item) => (
              <HeaderLinkItem key={item.text}>
                {item.text}
              </HeaderLinkItem>
            ))}
          </HeaderLink>
        
        </HeaderContent>
      </HeaderStyle>
      </>
    );
};

export default Header