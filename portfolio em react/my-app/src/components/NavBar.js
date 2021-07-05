import React from 'react'
import CustomBtn from './CustomBtn'
import logo from '../logo.png'
import logoMobile from '../logoMobile.png'
import {Toolbar, Typography} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles"; 

const styles = makeStyles({
    bar:{
        backgroundColor: "#fff",
        ['@media (max-width:780px)']: { 
           flexDirection: "column"
          }
    },
    logo: {
        width: "15%", 
        ['@media (max-width:780px)']: { 
           display: "none"
           }
    },
    logoMobile:{
        paddingBottom: "2.5rem",
        width: "50%",
        display: "none", 
        ['@media (max-width:780px)']: { 
            display: "inline-block"
            }
    },
    menuItem: {
        paddingTop: "2rem",
        cursor: "pointer", 
        flexGrow: 1,
        "&:hover": {
            color:  "#19242D"
        },
        ['@media (max-width:780px)']: { 
            paddingBottom: "0.5rem"    }
    }
})

function NavBar() {
    const classes = styles()
    return (
            <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>   
                <img src={logo} className={classes.logo}/> 
                <img src={logoMobile} className={classes.logoMobile}/> 
                <Typography variant="h6" className={classes.menuItem}>
                   Sobre mim
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Educação
                </Typography>
                <a href="https://www.taqtile.com.br/">
                    <CustomBtn txt="Taqtile"/>
                </a>
            </Toolbar>
    )
}

export default NavBar