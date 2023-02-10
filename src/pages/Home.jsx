import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'


const Home = () => {
  return (
    <div>
        <Main />
        {/* <Row title="Up Comming" fetchURL={requests.requestUpcoming} /> */}
        <Row rowID="1" title="Popular" fetchURL={requests.requestPopular} />
        <Row rowID="2" title="Trending" fetchURL={requests.requestTrending} />
        <Row rowID="3" title="To Rated" fetchURL={requests.requestTopRated} />
        {/* <Row title="Latest" fetchURL={requests.requestLatest} /> */}


    </div>
  )
}

export default Home