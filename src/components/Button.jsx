import React from 'react'
// node module 

import PropTypes from 'prop-types'

const ButtonPrimary = ({  
    href,
    target='_self',
    label,
    icon,
    classes}) => {
   
  if (href){
    return(
        <a 
        href={href}
        target={target}
        className={'btn btn-primary ' + classes}
        >
            {label}
            {icon ?
            <span className='material-symbols-rounded' aria-hidden="true">
                {icon}
            </span>:undefined
            }
        </a>
    )
  }else{
    return (
        <button  className={'btn btn-primary ' + classes}>
            <span>{label}</span>
              {icon ?
            <span className='material-symbols-rounded' aria-hidden="true">
                {icon}
            </span>:undefined
            }
        </button>
    )
  }    
  
  return (
    <div>ButtonPrimary</div>
  )
}

ButtonPrimary.propTypes ={
    label:PropTypes.string.isRequired,
    href: PropTypes.string,
    target:PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string
}

export {
    ButtonPrimary
}