import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import ProjectsOverview from './components/ProjectOverview/ProjectOverview';

const Home = () => {

  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Helle Fruergaard | Portfolio";
  }, []);

  useEffect(() => {
    const scrollToId = location.state?.scrollTo;
    if (!scrollToId) return;

    const tryScroll = () => {
      const el = document.getElementById(scrollToId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        navigate(".", { replace: true, state: {} }); // Clear state after scroll
      } else {
        setTimeout(tryScroll, 50); // Retry after short delay
      }
    };

    tryScroll();
  }, [location, navigate]);
  return (
    <Layout
      heroTitle="Turning ideas into interactive products."
      heroSubtitle="Helle Fruergaard | Web Developer"
      buttons={[
        { type: 'link', text: 'Learn more', path: '/about' },
      ]}
    >
      <div className='index-container'>
        <ProjectsOverview />
    

      </div>

    </Layout>
  );
};

export default Home;