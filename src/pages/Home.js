import React from 'react'


const Home = () => {
  return (
    <div className='homePageWrapper'>
        <div className='formWrapper'>
          <img src = "/code-peer.png" alt='code-peer-logo' />
          <h4 className='mainLabel'>Paste invitation room ID</h4>
          <div className='inputGroup'>
             <input 
               type='text'
               className='inputbox'
               placeholder='ROOM ID'
             />
              <input 
               type='text'
               className='inputbox'
               placeholder='USER NAME'
             />
             <button className='btn joinBtn'>Join</button>
             <span className='createInfo'>
                If you don't have an invite then &nbsp;
                <a href="" className='createNewBtn'>
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

