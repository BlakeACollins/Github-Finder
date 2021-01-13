import React, {Fragment} from 'react'
import spinner from './spinner.gif'

const Spinner = () => {
    return (
        <Fragment>
        <div>
            <img src={spinner} alt='Loading....' style={{ width: '200px', margin: 'auto', dispaly:'block'}} />
        </div>
        </Fragment>
    )
}
export default Spinner