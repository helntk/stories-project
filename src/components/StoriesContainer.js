import React from 'react'

import Storie from './Storie';

import {uploadStorie} from '../redux/actions/actions';
import {connect} from 'react-redux';

class StoriesContainer extends React.Component {
    state ={
        selectedFile: ''
    }

    selectFile = event =>{
        this.setState({
           selectedFile: event.target.files[0]


        })

    }
   
    handleUpload = (e) =>{
        e.preventDefault();
        console.log(this.state.selectedFile)
        const data = new FormData()
        data.append('file', this.state.selectedFile)
        this.props.uploadStorie(data)


        console.log(this.props.userStories)
    }
    

    render(){ 
        

         return (
        <div className='stories-container'>
            <Storie storie={`data:image/jpg;base64,${this.props.stories.userStories} `} />
            

        </div>
    )
    }
}
const mapStateToProps = state =>{
  return{
      auth: state.auth,
      stories: state.stories
  }
}
export default connect(mapStateToProps, {uploadStorie})(StoriesContainer);