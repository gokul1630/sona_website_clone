import { Card, CardContent } from '@material-ui/core'
import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.min.css'
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
import IndustryAcademia from './Home/IndustryAcademia'
import PostCard from './Home/PostCard'

SwiperCore.use([Navigation, Pagination, Autoplay])
function Home() {
  const SwiperComponent = memo(({ data, children }) => (
    <Swiper
      observeParents
      observer
      loop
      autoplay
      navigation
      slidesPerView={1}
      spaceBetween={20}
    >
      {data.map(({ title, about, link }) => (
        <SwiperSlide key={title}>
          {React.cloneElement(children, { title, about, link })}
        </SwiperSlide>
      ))}
    </Swiper>
  ))
  return (
    <div className="container-fluid">
      <Swiper
        loop
        navigation
        pagination
        autoplay
        parallax
        slidesPerView={1}
        spaceBetween={20}
      >
        {images?.map(({ original, originalAlt }) => (
          <SwiperSlide key={original}>
            <img
              width={'100%'}
              height={'100%'}
              src={original}
              alt={originalAlt}
            />
          </SwiperSlide>
        ))}
      </Swiper>
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
              <SwiperComponent data={achievements}>
                <PostCard />
              </SwiperComponent>
            </div>
            <div
              className="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <SwiperComponent data={news}>
                <PostCard />
              </SwiperComponent>
            </div>

            <div
              className="tab-pane fade"
              id="pills-contact"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
            >
              <SwiperComponent data={events}>
                <PostCard />
              </SwiperComponent>
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
                title="Svsita Inhalant Powder"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
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
