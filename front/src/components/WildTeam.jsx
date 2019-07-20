import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Container from '@material-ui/core/Container';
import Axios from 'axios';
import Wilders from './Wilders';
import { Row, Col } from 'reactstrap';

class WildTeam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataUsers: [],
    };
  }

  componentDidMount() {
    Axios.get('http://localhost:4000/users')
      .then((res) => {
        this.setState({
          dataUsers: res.data,
        });
      })
      .catch((e) => console.log(e));
  }

  render() {
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
          <Row>
            {this.state.dataUsers.map((user, index) => (
              <Col xs={12} md={6} lg={4} style={{ paddingBottom: 40 }}>
                <Wilders {...user} />
              </Col>
            ))}
          </Row>

          <Footer />
        </Container>
      </div>
    );
  }
}

export default WildTeam;
