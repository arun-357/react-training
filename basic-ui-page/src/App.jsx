import CoreConcept from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx'
import { Header } from './components/Header.jsx';

function App() {
    return (
    <>
      <Header />
      <main>
        <CoreConcept />
        <Examples />
      </main>
    </>
  );
}

export default App;
