import '../css/Preview.css';

const Preview = (props) => {
  return (
    <div id="preview" dangerouslySetInnerHTML={{ __html: props.rendered }}></div>
  )
};

export default Preview;