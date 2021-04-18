import React from 'react';
import Title from "./components/Title";
import Form from "./components/Form";
import Camera_Button from "./components/Camera_Button";
import Submit_Button from "./components/Submit_Button";
import './App.css';

import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'


function App() {
  return (
    <div>
      <Title />
      <Camera_Button />
      <Form />
      <Submit_Button />

      <AmplifySignOut />


    </div>
  );
}

export default withAuthenticator(App);
