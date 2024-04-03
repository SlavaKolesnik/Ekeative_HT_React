import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './styles.css';
import Main from './components/Main';
import RenderedPalette from './components/RenderedPalette';
import "./normalizes.css";
import "./resets.css";

// пропишіть команду "npm install react-transition-group" щоб встановити компонент що відповідає за анімації
function App() {
  
    const [showMain, setShowMain] = useState(true);
    const [number, setNumber] = useState(null);

    const toggleComponent = (num) => {
        setShowMain(!showMain);
        setNumber(num);
    };

    return (
        <div>
            <CSSTransition
                in={showMain}
                timeout={1000}
                classNames="page"
                unmountOnExit
            >
                <Main toggleComponent={toggleComponent} />
            </CSSTransition>
            <CSSTransition
                in={!showMain}
                timeout={300}
                classNames="page"
                unmountOnExit
            >
                <RenderedPalette toggleComponent={toggleComponent} number={number}/>
            </CSSTransition>
        </div>
    );
}

export default App;
