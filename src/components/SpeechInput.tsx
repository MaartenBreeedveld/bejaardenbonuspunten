import React, { useState } from 'react';
import { Input } from 'semantic-ui-react';
import SpeechApi from '../SpeechApi';


export const SpeechInput: React.FC = () => {
  return <Input onChange={(e) => { SpeechApi.say(e.target.value) }}></Input>
}