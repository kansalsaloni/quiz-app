import React, { useState } from 'react'
import Dashboard from './Dashboard';
import Analytics from './Analytics';
import CreateQuiz from './CreateQuiz';
import LeftNavbar from './LeftNavbar';
import QaQuiz from './QaQuiz';

import '../style/DashboardStyle.css'
import QuizLinkShare from './QuizLinkShare';
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
        return <Analytics />;
      case 'create-quiz':
        return <CreateQuiz />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div >
      <LeftNavbar selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
      <div className='right-screen'>
      {
        selectedPage==='create-quiz'?
      <QuizLinkShare />
        // <CreateQuiz isOpen={isQuizOpen} onClose={handleQuizClose} />
        :<p>hi</p>
      }
      </div>
    </div>
  )
} 

export default Home
