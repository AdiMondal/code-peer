import React, {useState} from 'react'
import { v4 as uuidv4} from 'uuid';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  
  const navigate = useNavigate();
  const [roomID , setRoomID] = useState(''); 
  const [username , setUserName] = useState('');
  const createNewRoom = (e) => {
    e.preventDefault();
    const id = uuidv4();
    setRoomID(id);
    toast.success('Created a new room');
  };

  const joinRoom = () =>{
    if(!roomID || !username){
      toast.error('Room ID & username is required');
      return;
    }

    //Redirect
    navigate(`/editor/${roomID}`, {
      state:{
        username,
      },
    },)
  };

  const handleInputEnter = (e) => {
    if(e.code === 'Enter'){
       joinRoom();
    }
  };

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
               onKeyUp={handleInputEnter}
             />
              <input 
               type='text'
               className='inputBox'
               placeholder='USER NAME'
               onChange={(e)=> setUserName(e.target.value)}
               value={username}
               onKeyUp={handleInputEnter}
             />
             <button className='btn joinBtn' onClick={joinRoom}>Join</button>
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


