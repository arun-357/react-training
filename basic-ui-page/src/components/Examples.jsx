import { useState } from "react";

import { EXAMPLES } from "../data";
import { TabButton } from "./Header";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples () {
      const [selectedTopic, setSelectedTopic] = useState();
      function handleClick(content) {
            setSelectedTopic(content);
      }

      let tabContent = <p>Please select a topic.</p>

      if (selectedTopic) {
            tabContent = (
                  <div id="tab-content">
                        <h3>{EXAMPLES[selectedTopic].title}</h3>
                        <p>{EXAMPLES[selectedTopic].description}</p>
                        <pre>
                              <code>
                                    {EXAMPLES[selectedTopic].code}
                              </code>
                        </pre>
                  </div>
            )
      }
      return (
      <Section id='examples'>
            <Tabs buttons={
                  <>
                        <TabButton isSelected={selectedTopic === 'components'} onClick={() => {handleClick("components")}}> Components </TabButton>
                        <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => {handleClick("jsx")}}> Jsx </TabButton>
                        <TabButton isSelected={selectedTopic === 'props'} onClick={() => {handleClick("props")}}> Props </TabButton>
                        <TabButton isSelected={selectedTopic === 'state'} onClick={() => {handleClick("state")}}> State </TabButton>
                  </>
            }>Examples</Tabs>
          {tabContent}
      </Section>
      )
}