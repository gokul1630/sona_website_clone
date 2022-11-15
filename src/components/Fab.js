import { Fab } from '@material-ui/core'
import React from 'react'

function FabButton(props) {
  return (
    <Fab
      style={{
        float: 'right',
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#1E4276',
        color: 'white',
        zIndex: 10,
      }}
      variant="extended"
    >
      <strong>Apply Now</strong>
    </Fab>
  )
}

export default FabButton
