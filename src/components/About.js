import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Home/Footer';
function About() {
  return (
    <div className='container-fluid'>
      <div className='head'>
        <img
          className='img-fluid'
          src='https://www.sonatech.ac.in/about-sona/images/sona-college.jpg'
          alt='sona-about'
        />
        <div className='bottom-nav'>
          <ol className='breadcrumb'>
            <li className='breadcrumb-item'>
              <Link to='/'>Home</Link>
            </li>
            <li className='breadcrumb-item active'>About Us</li>
          </ol>
        </div>
        <div className='about-text'>
          <h1 className='text-center' id='about-text'>
            About us
          </h1>
        </div>
      </div>
      <div className='skew1' />
      <div className='cont'>
        <div className='vision'>
          <h3 className='text-center' id='vision-text'>
            Vision
          </h3>
          <Card className='card'>
            <CardContent>
              <p>
                To become an institute of great repute, in the fields of
                Science, Engineering, Technology and Management studies, by
                offering a full range of programmes of global standard to foster
                research, and to transform the students into globally competent
                personalities.
              </p>
              <p>
                To become an institute of great repute, in the fields of
                Science, Engineering, Technology and Management studies, by
                offering a full range of programmes of global standard to foster
                research, and to transform the students into globally competent
                personalities.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className='mission'>
          <h3 className='text-center' id='mission-text'>
            Mission
          </h3>

          <Card className='card'>
            <CardContent>
              <p>
                Sona College of Technology is a private engineering institution
                that offers engineering degree programmes at under graduate
                level and post graduate level, computer applications and
                management studies at post graduate level and doctoral
                programmes in the areas of engineering and science and
                humanities.
              </p>
              <p>
                The college aims to provide a full-fledged education, to produce
                graduates with competency to excel in the organizations they
                serve and to cater to the needs of the community as a whole. Our
                mission for next three years will be
              </p>
            </CardContent>
          </Card>
        </div>

        <div className='coreValues'>
          <h3 className='text-center' id='corevalues-text'>
            Core Values
          </h3>
          <Card className='card'>
            <CardContent>
              <ul>
                <li>Industry interaction</li>
                <li>Green campus</li>
                <li>Community development</li>
                <li>Global vision</li>
                <li>Student centric learning environment</li>
                <li>Transparency</li>
                <li>Synergy through team work</li>
                <li>Commitment to excellence</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className='skew2' />
      <br />
      <Footer />
    </div>
  );
}

export default About;
