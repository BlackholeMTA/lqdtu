import React,{useState, useEffect} from 'react'
import PropTypes from 'prop-types'

function Thumb(props) {
  const {file} = props;
  const [thumb, setThumb] = useState('');

  useEffect(() => {
    if(file){
      let reader = new FileReader();
      reader.onloadend = () => {
        setThumb(reader.result)
      }
      reader.readAsDataURL(file);
    }

  }, [file]);

  return (
    <img src={thumb} style = {{height: '200px'}}
      alt="img"
      className="img-thumbnail mb-2"/>
  )
}

Thumb.propTypes = {
  file: PropTypes.object
}

export default Thumb;
