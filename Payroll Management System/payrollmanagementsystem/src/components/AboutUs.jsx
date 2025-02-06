import React from 'react'
import "./style.css"

function AboutUS() {
  return (
    <div className='container'>
       <h1>About Us</h1>
       <div className='details_of_team'>
          <h4>We are a group of six people doing this project as part of the Advance Topics in Management Course under the guidance of Prof.Yong Zheng</h4>
       </div>
       <div>
          <h2>Team Members</h2>
       </div>
       <div className='team_members'>
          <div className='ajay'>
            <div>
              <h1>Ajay Kumar Mashapari</h1>
              <h1>Email : amashapari@hawk.iit.edu</h1>
            </div>
          </div>
          <div className='aparna'>
            <div>
              <h1>Aparna Kolluru</h1>
              <h1>Email :aparna@hawk.iit.edu</h1>
            </div>
          </div>
          <div className='priyanka'>
            <div>
              <h1>Priyanka Rao</h1>
              <h1>Email :priyanka@hawk.iit.edu</h1>
            </div>
          </div>
          <div className='sreekhar'>
            <div>
              <h1>Sreekhar Jakku</h1>
              <h1>Email : sreekhar@hawk.iit.edu</h1>
            </div>
          </div>
          <div className='Varshitha'>
            <div>
              <h1>Varshitha Palakonda</h1>
              <h1>Email : vpalakonda@hawk.iit.edu</h1>
            </div>
          </div>
          <div className='vinay'>
            <div>
              <h1>Vinay Kambhampati</h1>
              <h1>Email : vkambhampati@hawk.iit.edu</h1>
            </div>
          </div>
       </div>
    </div>
  )
}

export default AboutUS;