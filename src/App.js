import React from 'react';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'
import { H1, H2, H3, P } from './styles';
import Hero from './components/Home/Hero';
import PLPPreview from './components/Home/PLPPreview';



const Wrapper = styled.div`
  margin-right: auto;
  margin-left:  auto;

  max-width: 960px;

  padding-right: 10px;
  padding-left:  10px;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hero/>
        <Wrapper>
          <PLPPreview />
        </Wrapper>
      </header>
    </div>
  );
}

library.add(faAngleDoubleDown);

export default App;
