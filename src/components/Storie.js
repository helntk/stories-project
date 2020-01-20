import React from 'react'
import Gravatar from 'react-gravatar';

export default function Storie({handleUpload, selectFile, avatar, storie}) {
    return (
        <div className='storie'>
            <Gravatar className='avatar' email={avatar} />
              

            <form>
             <input type='file' onChange={selectFile} name='file' />     
             <button type='submit' className='btn-primary' style={{padding : '1rem'}} onClick={handleUpload}>Upload storie</button>
           </form>  
      
           <img alt='storie' src={storie} />

      
        </div>
    )
}
