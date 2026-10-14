import React from 'react';
import {Composition} from 'remotion';
import {HenriPromo} from './video';
export const Root:React.FC=()=> <Composition id="HenriPromo" component={HenriPromo} durationInFrames={1500} fps={30} width={1920} height={1080}/>;
