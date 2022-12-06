import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TopBar } from './Components/TopBar/Tobar';
import { Navbar } from './Components/Navbar/Navbar';
import { DestinationCarousel } from './Components/DestinationCarousel/DestinationCarousel';
import { DestinationCard } from './Components/DestinationCard/DestinationCard';
import { MainContainer } from './Components/MainContainer/MainContainer';
import { Typography } from './Components/Title/Typography';

const LOREM_IPSUM = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rutrum pellentesque risus vitae varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rutrum pellentesque risus vitae varius. Loremm ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rutrum pellentesque risus vitae varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rutrum pellentesque risus vitae varius. Lorem ipsumaa dolor sit amet, consectetur adipiscing elit. Pellentesque rutrum pellentesque risus vitae varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

function App() {
  return (
    <>
      <TopBar />
      <MainContainer>
        <Navbar />
        <Typography type='h1' label='Welcome!' />
        <Typography type="p" label={LOREM_IPSUM} />
        <Typography type="h3" label="Choose your travel path" />
        <DestinationCarousel>
          <DestinationCard img="img1" title="Destination Name" subTitle="One line description" price="$ 1,000"/>
          <DestinationCard img="img2" title="Destination Name" subTitle="One line description" price="$ 1,000"/>
          <DestinationCard img="img3" title="Destination Name" subTitle="One line description" price="$ 1,000"/>
        </DestinationCarousel>
      </MainContainer>
    </>
  );
}

export default App;