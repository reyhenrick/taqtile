import logo from './logo.svg';
import './App.css';
import React from 'react';
import {createMuiTheme, ThemeProvider, makeStyles} from '@material-ui/core/styles'
import NavBar from './components/NavBar';
import Grid from './components/Grid';
import {Typography} from '@material-ui/core';
import Footer from './components/Footer';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Henrick from "./henrick.jpg"

import MenuBook from '@material-ui/icons/MenuBook';
import People from '@material-ui/icons/People';
import Stars from '@material-ui/icons/Stars';
import RecordVoiceOver from '@material-ui/icons/RecordVoiceOver';

const styles = makeStyles({
  media: {
    height: 300,
    display: "flex", 
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    width: 300,
    borderRadius: 5,
    marginTop: "2.5rem",
  },
  
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center"
  },
  bigSpace: {
    marginTop: "2.5rem",
  },
  littleSpace:{
    marginTop: "2.5rem",
  },
  grid:{
    display: "flex", 
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
})

const theme = createMuiTheme({  
  palette: {
    primary: {
      main:"#2e1667",
    },
    secondary: {
      main:"#c7d8ed",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 2000,
      fontSize: 28,
      lineHeight: '2rem',
      },
    h5: {
      fontWeight: 1000,
      lineHeight: '2rem',
    },
    h6: {
      fontWeight: 800,
      lineHeight: '2rem',
      paddingBottom: "2.5rem",
    },

  },
});

function App() {
  const classes = styles();
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <NavBar/>

      <CardMedia
        className={classes.media}
        image="https://bl6pap003files.storage.live.com/y4mauT1bm5fDDtRcjEJV7pvNL7F5QH-4TG40Ga0_x--UeI1SR8qWoOiJjvUndBRJ3298ixwYYi0YDF8TtqoHLICdUoUBn8GuTHl1O5VYQGJZj5JjDVecQ8zxalDe0BFCZ2v6Q8PQslt0GUBwwwxHbA6BzOt3BkS8-GBZZAszbSNfA4kjsJOG4pVk3781e4rc6M4alMQEZ5lhTLPsSpuQd8RDA/henrick.jpg?psid=1&width=640&height=640&cropMode=center"
      />

      <div className={classes.wrapper}>
        <Typography variant="h4" className={classes.bigSpace} color="primary">
          REYNALDO HENRICK PAULO CLEMENTE
        </Typography>
        
        <Typography variant="h6" className={classes.littleSpace} color="primary">
          21 anos
          <br/>
          Vila Prudente - São Paulo, SP
          <br/>
          Família de pai, mãe, irmão, irmã e 2 gatos
        </Typography>
      </div>

      <div className={`${classes.grid} $classes.bigSpace`}>
        <Grid icon={<MenuBook style={{fill: "#35A7A4", height: "80", width: "auto"}}/>} title="Poeta amador" />
        <Grid icon={<People style={{fill: "#34804A", height: "80", width: "auto"}}/>} title="Comunicação e respeito" />
        <Grid icon={<Stars style={{fill: "#D44E44", height: "80", width: "auto"}}/>} title="Ética e integridade" />
      </div>

      <div className={classes.wrapper}>
        <Typography variant="h7" className={classes.bigSpace} color="black">
          <br/>
          <br/>
          Portfolio em React como projeto final do entregável para o treinamento do Instituto Taqtile.
          <br/>   
        </Typography>
      </div>


      </ThemeProvider>
    </div>
  );
}

export default App;