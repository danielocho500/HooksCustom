import React from 'react'

export const Small = React.memo(({value}) => {

    console.log('mostrandome');
    return (
        <small>
            {value}
        </small>
    )
})
