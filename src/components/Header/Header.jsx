import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (<header className={s.header}>
            <img src="https://content3.jdmagicbox.com/comp/delhi/k1/011pxx11.xx11.170818153136.j1k1/catalogue/drunken-monkey-green-park-delhi-coffee-shops-mt575.jpg"></img>

        <div className={s.loginBlock}>
       {props.isAuth ? props.login : <NavLink to = {'/login'}>Login</NavLink>}
    </div>
  
    </header>
  
  );
};

export default Header;
