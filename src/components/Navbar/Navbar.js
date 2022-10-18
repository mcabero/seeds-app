import React from 'react';
import logo from '../../assets/img/logo.png';
import { CartWidget } from '../CartWidget/CartWidget';
import { styles } from './Navbar.style';
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    const categories = [
        {name:"electronics", id:0, url: "/categoria/electronics" },
        {name:"jewelery", id:1, url: "/categoria/jewelery" },
        {name:"men's clothing", id:2, url: "/categoria/men's clothing" },
        {name:"women's clothing", id:3, url: "/categoria/women's clothing" },
    ]; 

    return (
        <header style={styles.header}>
            <Link to="/">
                <img src={logo} style={styles.logo}/>
            </Link>
            <h1 style={styles.title}>Seeds online</h1>
            <nav>
                {
                    categories.map((category)=>{
                        return (<NavLink key={category.id} to={category.url} style={styles.menu}>{category.name}</NavLink>)
                    })
                }
            </nav>
            <Link to="/cart">
                <CartWidget />
            </Link>
        </header>
    )
}

export default Navbar;