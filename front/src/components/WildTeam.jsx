import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Container from '@material-ui/core/Container';

function WildTeam() {
  return (
    <div>
      <Navbar />
      <Container
        maxWidth="lg"
        style={{
          backgroundColor: '#d7ffed82',
          textAlign: 'center',
          padding: '30px 30px 0 30px',
          marginTop: 30,
        }}
      >
        <div>WildTeam</div>

        <Footer />
      </Container>
    </div>
  );
}

export default WildTeam;
