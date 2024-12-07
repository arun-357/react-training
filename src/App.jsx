import { CORE_CONCEPTS } from './data';
import { Header, CoreConcepts, TabButton } from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts {...CORE_CONCEPTS[0]} />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton> Components </TabButton>
            <TabButton> Jsx </TabButton>
            <TabButton> Props </TabButton>
            <TabButton> State </TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
