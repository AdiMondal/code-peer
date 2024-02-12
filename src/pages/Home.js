import React, {useState} from 'react'
import { v4 as uuidv4} from 'uuid';

const Home = () => {

  const [roomID , setRoomID] = useState(''); 
  const [username , setUserName] = useState('');
  const createNewRoom = (e) => {
     e.preventDefault();
     const id = uuidv4();
     setRoomID(id);
  }

  return (
    <div className='homePageWrapper'>
        <div className='formWrapper'>
          <img className="homePageLogo" src = "/code-peer.png" alt='code-peer-logo' />
          <h4 className='mainLabel'>Paste invitation room ID</h4>
          <div className='inputGroup'>
             <input 
               type='text'
               className='inputBox'
               placeholder='ROOM ID'
               onChange={(e)=> setRoomID(e.target.value)}
               value={roomID}
             />
              <input 
               type='text'
               className='inputBox'
               placeholder='USER NAME'
               onChange={(e)=> setUserName(e.target.value)}
               value={username}
             />
             <button className='btn joinBtn'>Join</button>
             <span className='createInfo'>
                If you don't have an invite then &nbsp;
                <a  onClick={createNewRoom} href="" className='createNewBtn'>
                  new room
                </a>
             </span>
          </div>
        </div>
        <footer>
          <h4>Built with 💖 by {''}
            <a href='https://github.com/AdiMondal'>Adi Mondal</a>
         </h4>
        </footer>
    </div>
  )
}

export default Home;


