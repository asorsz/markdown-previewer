import { RiLayoutColumnFill, RiLayoutRowFill} from 'react-icons/ri';
import '../css/Banner.css'

const Banner = (props) => {
  return (
    <header>
      <h1>Markdown Previewer</h1>
      <div>
        <button className={props.sideBySide ? 'active' : ''} onClick={() => props.setSideBySide(true)}><RiLayoutColumnFill /></button>
        <button className={props.sideBySide ? '' : 'active'} onClick={() => props.setSideBySide(false)}><RiLayoutRowFill /></button>
      </div>
    </header>
  )
}

export default Banner;