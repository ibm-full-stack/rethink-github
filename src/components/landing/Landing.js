import React, { Component } from 'react';

import PageContent from './PageContent';
import NavBar from './NavBar';
import Content from './Content';
import CreateYourProfile from './CreateYourProfile';

import './../css/common.css';


const Landing = () => {
  <PageContent>
    <NavBar />
    <Content>
      <div className='container-lg'>
        <CreateYourProfile />
      </div>
    </Content>
  </PageContent>
}

export default Landing;
