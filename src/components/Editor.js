import '../css/Editor.css';

const Editor = (props) => {
  return (
    <textarea id="editor" className="markdown" spellCheck="false" value={props.markdown} onChange={(e) => props.handleChange(e.target.value)}></textarea>
  )
};

export default Editor;