import React from 'react';

function AboutUs() {
  return (
    <>
      <h1 style={{ color: 'red', textAlign: 'center' }}>About Us</h1>
      <p style={{ color: 'black', lineHeight: '1.6', margin: '20px 0' }}>
        Welcome to <strong>[Your Company Name]</strong>!<br /><br />
        At <strong>[Your Company Name]</strong>, we believe in the power of <em>[your core values, e.g., innovation, quality, sustainability]</em>. Founded in <strong>[Year]</strong> by <strong>[Founder's Name or Team]</strong>, our mission is to <em>[briefly state your mission, e.g., provide exceptional products/services that enhance your life]</em>.<br /><br />
        With a passion for <em>[industry or field]</em>, we strive to create solutions that not only meet but exceed the expectations of our customers. Our dedicated team of experts works tirelessly to bring you the best in <em>[specific offerings, e.g., technology, design, service]</em>, ensuring that every experience with us is memorable.
      </p >
      <h2 style={{ color: 'darkblue' }}>Our Journey</h2>
      <p style={{ lineHeight: '1.6', color:'black' }}>
        From our humble beginnings in <em>[location or story of how it started]</em> to becoming a leader in <em>[industry]</em>, we’ve always prioritized our customers. Our journey is marked by <em>[mention any key milestones, awards, or achievements]</em> that reflect our commitment to excellence.
      </p>
      <h2 style={{ color: 'darkblue' }}>Our Vision</h2>
      <p style={{ color:'black'}} >
        We envision a future where <em>[describe your vision, e.g., every home is equipped with innovative solutions, every person has access to quality products]</em>. We are dedicated to making this vision a reality through continuous improvement and sustainable practices.
      </p>
      <h2 style={{ color: 'darkblue' }}>Our Commitment</h2>
      <ul style={{ margin: '10px 0', paddingLeft: '20px' }}>
        <li><strong>Quality:</strong> Every product is crafted with precision and care.</li>
        <li><strong>Customer Satisfaction:</strong> Your happiness is our priority.</li>
        <li><strong>Innovation:</strong> We constantly seek new ways to improve and evolve.</li>
        <li><strong>Community:</strong> We give back and support our local community.</li>
      </ul>
      <p style={{ lineHeight: '1.6' }}>
        Thank you for being part of our journey. We invite you to explore our offerings and join us in making a positive impact in the world. Together, we can achieve great things!
      </p>
    </>
  );
}

export default AboutUs;
