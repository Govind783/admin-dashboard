import React from 'react';
import './index.css';
import App from './App';
import { ContextProvider } from './contexts/ContextProvider';
import {createRoot} from "react-dom/client";


const container=document.getElementById("root");
const root =createRoot(container);
root.render( <ContextProvider> <App /> </ContextProvider> )

