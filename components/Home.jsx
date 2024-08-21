import React, { useState } from 'react'
import Dashboard from './Dashboard';
import Analytics from './Analytics';
import CreateQuiz from './CreateQuiz';
import LeftNavbar from './LeftNavbar';
import '../style/DashboardStyle.css'
import QaQuizAnalysis from './QaQuizAnalysis';
import PollQuizAnalysis from './PollQuizAnalysis';
function Home() {
  const [selectedPage, setSelectedPage] = useState('dashboard');
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  const handleQuizClose = () => {
    setIsQuizOpen(false);
    setSelectedPage('dashboard'); 
  };  
  React.useEffect(() => {
    if (selectedPage === 'create-quiz') {
      setIsQuizOpen(true);
    }
  }, [selectedPage]);
  const renderContent = () => {
    console.log(`Rendering: ${selectedPage}`);
    switch (selectedPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'analytics':
        return <PollQuizAnalysis quiznumber={'Quiz 2'} date={'04 sept 2024'} impressions={167} />
        // <PollQuizAnalysis quiznumber={'Quiz 2'} date={'04 sept 2024'} impressions={167} />
        //  <Analytics />;
      case 'create-quiz':
        return isQuizOpen ? <CreateQuiz isOpen={isQuizOpen} onClose={handleQuizClose} /> : null;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className='home-container'>
      <LeftNavbar selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
      {/* <div className='right-screen'>
      {
        selectedPage==='create-quiz'&&(  
         <CreateQuiz isOpen={isQuizOpen} onClose={handleQuizClose} />
        )
      }
      </div> */}
        <div className="right-screen">
        {renderContent()}
      </div>
    </div>
  )
} 

export default Home
