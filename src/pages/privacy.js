import React from 'react';

import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Header from '../components/Header';
import EmailForm from '../components/EmailForm';
import SlideShow from '../components/SlideShow';

var settings = {
  images: [
    { url: require('../assets/images/bg01.jpg'), position: 'center' },
    { url: require('../assets/images/bg02.jpg'), position: 'center' },
    { url: require('../assets/images/bg03.jpg'), position: 'center' },
  ],
  // Delay.
  delay: 6000,
};

const PrivacyPage = () => (
	<Layout>
	<div style= "text-align: center">
		Updated April 7, 2021 <br/> 
		
		Privacy Policy for Breinto 


	</div>

    <SlideShow settings={settings} />
    </Layout>
);

export default PrivacyPage;