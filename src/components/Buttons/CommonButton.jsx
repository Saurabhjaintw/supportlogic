import React from 'react'
import { Icon } from '@material-ui/core';

export const CommonButton = ({ icon, title, onHandle, disabled }) => {
  return (
    <button onClick={()=>onHandle()} disabled={disabled}>
      <Icon icon={icon} />{title}
    </button>
  )
}
