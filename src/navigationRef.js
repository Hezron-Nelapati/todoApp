import React from 'react'

export const navigator = React.createRef(); 

export const navigate = (name, params) => {
   navigator.current?.navigate(name, params);
}