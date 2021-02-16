import { useState } from 'react';


function App() {
  return (
    <div>
      <Folder name={'Desktop folder'}>
        <Folder name='Music'>
          <File name='felizes_los_4.mp3'/>
          <File name='woz.mp3' />
        </Folder>
          <File name='cats.gif'/>
          <File name='doges.gif'/>
      </Folder>

      <Folder name={'rails folder'}/>
      <Folder name={'python folder'}/>

    </div>
  );
}

const Folder = (props) => {
  const [ isOpen, setIsOpen ] = useState(false);
  const {name, children } = props;
  const direction = isOpen ? 'down' : 'right';

  const handleClick = () => {
    // isOpen ? setIsOpen(false) : setIsOpen(true)
    setIsOpen(!isOpen);
  }

  return <div>
        <span onClick={handleClick}>
          <i className='blue folder icon'></i>
          <i className={`caret ${direction} icon`}></i>
        </span>
        {name}
        <div style={{ marginLeft: '17px' }}>
          {isOpen ? children : null}
        </div>
      </div>
};

const File = (props) => {
  const { name } = props;
  const fileExtension = name.split('.')[1];

  const fileIcons = {
    mp3: 'music',
    gif: 'file image'
  }

  return <div>
  <i className={`${fileIcons[fileExtension]} icon`}></i>
  {props.name}
  </div>
}

export default App;
