import React from 'react'
import Resume1 from './Resume1'
import Resume3 from './Resume3'
import Resume7 from './Resume7'
import Types_resume from './Types_resume'

export default function Basic() {
  return (
    <div>
        <div className='row'>
            <div>
                <Types_resume/>
            </div>
            <div className='text-center mt-5'>
                <h3>Basic Resume</h3>
            </div>
            <div>
           <Resume1/>
           <Resume3/>
           <Resume7/>
            </div>
        </div>
    </div>
  )
}
