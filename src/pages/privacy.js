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
	<div>
		Updated April 7, 2021 <br/> <br/> 
		
		Privacy Policy for Breinto  <br/>  <br/> 

		At Breinto, accessible from breinto.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Breinto and how we use it through the website breinto.com, its mobile application, and m-site (hereinafter referred to as the “Platform”). <br/>  <br/> 

By visiting the Platform, providing your information or availing our product/service, you expressly agree to be bound by the terms and conditions of this Privacy Policy, the Terms of Use and the applicable service/product terms and conditions. If you do not agree, please do not access or use our Platform. <br/> <br/> 

If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us. <br/> <br/> 


1. Collection of Your Information <br/> <br/> 

When you use our Platform, we collect and store your information which is provided by you from time to time. In general, you can browse the Platform without telling us who you are or revealing any personal information about yourself. Once you give us your personal information, you are not anonymous to us. Where possible, we indicate which fields are required and which fields are optional. You always have the option to not provide information by choosing not to use a particular service, product or feature on the Platform. <br/> <br/> 

We may track your buying behaviour, preferences, and other information that you choose to provide on our Platform. We use this information to do internal research on our users demographics, interests, and behaviour to better understand, protect and serve our users. This information is compiled and analysed on an aggregated basis. This information may include the URL that you just came from (whether this URL is on our Platform or not), which URL you next go to (whether this URL is on our Platform or not), your computer browser information, and your IP address. <br/> <br/> 

We collect personal information (such as email address, delivery address, name, phone number, credit card/debit card and other payment instrument details) from you when you set up an account or transact with us. While you can browse some sections of our Platform without being a registered member, certain activities (such as placing an order or consuming our online content or services) do require registration. We do use your contact information to send you offers based on your previous orders and your interests. <br/> <br/> 

​

2. Use of Demographic / Profile Data / Your Information <br/> <br/> 

We use your personal information to provide the product and services you request. To the extent we use your personal information to market to you, we will provide you the ability to opt-out of such uses. We use your personal information to assist sellers and business partners in handling and fulfilling orders; enhancing customer experience; resolve disputes; troubleshoot problems; help promote a safe service; collect money; measure consumer interest in our products and services; inform you about online and offline offers, products, services, and updates; customize and enhance your experience; detect and protect us against error, fraud and other criminal activity; enforce our terms and conditions; and as otherwise described to you at the time of collection of information. <br/> <br/> 

In our efforts to continually improve our product and service offerings, we and our affiliates collect and analyse demographic and profile data about our users activity on our Platform. We identify and use your IP address to help diagnose problems with our server, and to administer our Platform. Your IP address is also used to help identify you and to gather broad demographic information. <br/> <br/> 

We will occasionally ask you to participate in optional surveys conducted either by us or through a third party market research agency. These surveys may ask you for personal information, contact information, date of birth, demographic information (like zip code, age, or income level), attributes such as your interests, household or lifestyle information, your purchasing behaviour or history, preferences, and other such information that you may choose to provide. The surveys may involve collection of voice data or video recordings, the participation of which would purely be voluntary in nature. We use this data to tailor your experience at our Platform, providing you with content that we think you might be interested in and to display content according to your preferences. <br/> <br/> 

​

3. Log Files <br/> <br/> 

Breinto follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users movement on the website, and gathering demographic information.  <br/> <br/> 

​

4. Cookies & Third Party Privacy Policies <br/> <br/> 

Breinto Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. <br/> <br/> 

You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers respective websites. What Are Cookies? <br/> <br/> 

 


5. Links to Other Sites <br/> <br/> 

Our Platform may provide links to other websites or application that may collect personal information about you. We are not responsible for the privacy practices or the content of those linked websites. <br/> <br/> 

​

6. Children’s Policy <br/> <br/> 

Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity. <br/> <br/> 

Breinto does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records. <br/> <br/> 


7. Changes to this Privacy Policy <br/> <br/> 

Please check our Privacy Policy periodically for changes. We may update this Privacy Policy to reflect changes to our information practices. We will alert you to significant changes by posting the date our policy got last updated, placing a notice on our Platform, or by sending you an email when we are required to do so by applicable law. <br/> 
<br/> 

8. Consent <br/> <br/> 

By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions. <br/> <br/> 


9. Queries <br/> <br/> 

If you have a query, issue, concern, or complaint in relation to collection or usage of your personal information under this Privacy Policy, please contact us at the contact information provided below. <br/> <br/> 

 

Email: info@breinto.com <br/> <br/> 

Phone: +91-9886020861 <br/> 


	</div>

    <SlideShow settings={settings} />
    </Layout>
);

export default PrivacyPage;