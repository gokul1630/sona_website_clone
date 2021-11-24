import { Card, CardContent } from '@material-ui/core'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/themes/splide-default.min.css'
import React from 'react'
import { Link } from 'react-router-dom'
import achievements from '../data/Achievements.json'
import links from '../data/AnnouncementLinks.json'
import CampusLifeData from '../data/CampusLifeData.json'
import events from '../data/Events.json'
import happeningData from '../data/HappeningSona.json'
import images from '../data/ImageLinks.json'
import imagesLink from '../data/IndustryAcademia.json'
import news from '../data/News.json'
import AnnouncementPost from './Home/AnnouncementPost'
import CampusLife from './Home/CampusLife'
import Footer from './Home/Footer'
import Gallery from './Home/Gallery'
import IndustryAcademia from './Home/IndustryAcademia'
import PostCard from './Home/PostCard'

function Home(props) {
  return (
    <div className="container-fluid">
      <Gallery link={images} />
      <br />
      <div className="skew1"></div>
      <div className="cont">
        <div className="announcement">
          <Card className="card card-content">
            <h3 className="text-center" id="announcement-text">
              Announcement
            </h3>
            <CardContent>
              <ul>
                {links.map((item) => (
                  <AnnouncementPost
                    link={item.link}
                    content={item.content}
                    key={item.link}
                  />
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
        <div className="notificationPanel">
          <ul className="nav nav-pills mb-1" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active btn"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                Achievements
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link btn"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                News
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link btn"
                id="pills-contact-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-contact"
                type="button"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                Events
              </button>
            </li>
          </ul>

          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade active show"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <Splide
                options={{
                  type: 'loop',
                  gap: '1rem',
                  autoplay: true,
                  pauseOnHover: false,
                  resetProgress: false,
                  arrows: 'slider',
                  perPage: 1,
                }}
              >
                {achievements.map((item) => (
                  <SplideSlide key={item.title}>
                    <PostCard
                      link={item.link}
                      title={item.title}
                      about={item.about}
                    />
                  </SplideSlide>
                ))}
              </Splide>
              {/* <PostCard data={data} /> */}
            </div>
            <div
              className="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <Splide
                options={{
                  type: 'loop',
                  gap: '1rem',
                  autoplay: true,
                  pauseOnHover: false,
                  resetProgress: false,
                  arrows: 'slider',
                  perPage: 1,
                }}
              >
                {news.map((item) => (
                  <SplideSlide key={item.title}>
                    <PostCard
                      link={item.link}
                      title={item.title}
                      about={item.about}
                    />
                  </SplideSlide>
                ))}
              </Splide>
              {/* <PostCard data={news} /> */}
            </div>

            <div
              className="tab-pane fade"
              id="pills-contact"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
            >
              <Splide
                options={{
                  type: 'loop',
                  gap: '1rem',
                  autoplay: true,
                  pauseOnHover: false,
                  resetProgress: false,
                  arrows: 'slider',
                  perPage: 1,
                }}
              >
                {events.map((item) => (
                  <SplideSlide key={item.title}>
                    <PostCard
                      link={item.link}
                      title={item.title}
                      about={item.about}
                    />
                  </SplideSlide>
                ))}
              </Splide>
              {/* <PostCard data={events} /> */}
            </div>
          </div>
        </div>
        <div className="social-links">
          <Card className="card">
            <h3>Sona Medical College of Naturopathy and Yoga</h3>
            <h4>Admissions Open 2021</h4>
            <button className="btn-apply">Apply Now</button>
            <CardContent>
              <h5>Svsita Inhalant Powder</h5>
              <iframe
                width="300"
                height="200"
                src="https://www.youtube-nocookie.com/embed/bpONNyFTkBQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen={true}
              />
              <br />
              <h6>
                For buying this product, <Link to="/">Click here</Link>
              </h6>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="skew2"></div>
      <br />
      <div className="skew1" />
      <div className="campus-life">
        <h5 className="campus-life-txt">
          Campus <span>Life</span>
        </h5>
        <h5 className="campus-life-head2-txt">
          The Arcadian environ @ Sona makes the College life the most memorable
          experience!
        </h5>
        <div className="campus-life-flex">
          {CampusLifeData.map((item) => (
            <CampusLife
              link={item.link}
              key={item.title}
              content={item.content}
              title={item.title}
            />
          ))}
        </div>
      </div>
      <div className="skew2" />
      <br />

      <h5 className="academia-text">
        Industry Academia <span>Collaboration</span>
      </h5>
      <div className="industry-academia">
        {imagesLink.map((item) => (
          <IndustryAcademia link={item.link} key={item.link} />
        ))}
      </div>
      <br />
      <div className="skew1" />
      <div className="campus-life">
        <h5 className="campus-life-txt">
          Happening @ <span>Sona</span>
        </h5>
        <h5 className="campus-life-head2-txt">
          Academic, Research and various intellectual activities ensure that the
          students celebrate learning @ SONA.
        </h5>
        <div className="campus-life-flex">
          {happeningData.map((item) => (
            <CampusLife
              link={item.link}
              key={item.title}
              content={item.content}
              title={item.title}
            />
          ))}
        </div>
      </div>
      <div className="skew2" />
      <br />
      <Footer />
    </div>
  )
}

export default Home
