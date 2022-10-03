import React from 'react';
import logo from '../../assets/img/logo.png';
import { CartWidget } from '../CartWidget/CartWidget';
import { styles } from './Navbar.style';

const Navbar = ({ companyName }) => {

    const categories = [
        {name:"Sweet cheese", id:0, url:"#"},
        {name:"Cokie Haze", id:1, url:"#"},
        {name:"Lemon shining", id:2, url:"#"},
        {name:"Sweet Pure CBD", id:3, url:"#"},
    ]; 

    return (
        <header style={styles.header}>
            <img src={logo} alt={companyName} title={companyName} style={styles.logo}/>
            <h1 style={styles.title}>{companyName}</h1>
            <nav>
                {
                    categories.map((category)=>{
                        return <a href={category.url} style={styles.menu}>{category.name}</a>
                    })
                }
            </nav>
            <CartWidget />
        </header>
    )
}

export default Navbar