import React from 'react';
import Col from 'react-materialize/lib/Col';
import Container from 'react-materialize/lib/Container';
import Row from 'react-materialize/lib/Row';
import Section from 'react-materialize/lib/Section';
import { connect } from 'react-redux';
import { firestoreConnect, isLoaded } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { eventsSelector, profileSelector, usersSelector } from '../../selectors';
import SplashScreen from '../utils/SplashScreen';
import Dashboard from './Dashboard';
import MyEvents from './MyEvents';

const HomePage = ({users, events, profile}) => {
  if (!isLoaded(users) || !isLoaded(events)) return <SplashScreen/>;
  if (!profile.isProfileComplete) return <Redirect to="/NewUser"/>;
  return ( 
    <div className="App">
      <Container>
        <Section>
          <Row>
            <Col s={8}>
              <Dashboard/>
            </Col>
            <Col s={4}>
              <MyEvents/>
            </Col>
          </Row>
        </Section>
      </Container>
    </div>
  );
}

const enhance = compose(
  firestoreConnect([{
    collection: "events",
  }, {
    collection: "users",
  }]),
  connect(state => ({
    profile: profileSelector(state),
    users: usersSelector(state),
    events: eventsSelector(state),
  }))
)

export default enhance(HomePage);