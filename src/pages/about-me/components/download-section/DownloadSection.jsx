import React from 'react';
import './Download.section.scss'; 

const DownloadSection = () => {
  return (
    <div className="download-section">
      <Link
        className="download-section__button"
        href="/myPortfolio/images/Helle-Fruergaard-Resume.pdf"
        download="Helle_Fruergaard_Resume"
      >
        Download Resume (pdf)
      </ Link> 
    </div>
  );
};

export default DownloadSection;
