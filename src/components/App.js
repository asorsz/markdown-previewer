import '../css/App.css';

import { useEffect, useState } from 'react';
import { defaultMarkdown } from './DefaultMarkdown';
import marked from 'marked';
import Banner from './Banner';
import Editor from './Editor';
import Preview from './Preview';

marked.setOptions({
  gfm: true,
  breaks: true,
})

const App = () => {
  const [sideBySide, setSideBySide] = useState(true);
  const [markdown, setMarkdown] = useState(defaultMarkdown);
  const [rendered, setRendered] = useState(marked(defaultMarkdown))

  useEffect(() => {
    setRendered(marked(markdown))
  },[markdown])

  return (
    <>
      <Banner sideBySide={sideBySide} setSideBySide={setSideBySide} />
      <main className={sideBySide ? 'side-by-side' : ''}>
        <Editor markdown={markdown} handleChange={setMarkdown} />
        <Preview rendered={rendered} />
      </main>
    </>
  );
};

export default App;
