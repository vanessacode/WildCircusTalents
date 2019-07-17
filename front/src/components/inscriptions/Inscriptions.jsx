import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Container from '@material-ui/core/Container';
import InscriptionsForm from './InscriptionsForm';
import InscriptorsTable from './InscriptorsTable';

function Inscriptions() {
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
        <h2>The Casting</h2>
        <h3>
          The casting is open to receive the next talents of Wild Circus
          Biarritz.
        </h3>
        <p>Register and we will contact you.</p>
        <InscriptionsForm />

        <InscriptorsTable />

        <Footer />
      </Container>
    </div>
  );
}

export default Inscriptions;
