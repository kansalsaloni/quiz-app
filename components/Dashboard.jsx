import React from 'react'
import '../style/DashboardStyle.css';
import '../App.css'
import DashboardQuizCard from '../shared/DashboardQuizCard';
import TrendingQuizContainer from '../shared/TrendingQuizContainer';
function Dashboard() {
  const quizzes = [
    { title: 'Quiz1', description: '04 sept 2024',impression:'664' },
    { title: 'Quiz1', description: '04 sept 2024',impression:664 },
    { title: 'Quiz1', description: '04 sept 2024',impression:664 },
    { title: 'Quiz1', description: '04 sept 2024',impression:664 },
    { title: 'Quiz1', description: '04 sept 2024',impression:664 },
    { title: 'Quiz1', description: '04 sept 2024',impression:664 },
    { title: 'Quiz1', description: '04 sept 2024',impression:664 },
    { title: 'Quiz1', description: '04 sept 2024',impression:664 },
    { title: 'Quiz1', description: '04 sept 2024',impression:664 },
    { title: 'Quiz1', description: '04 sept 2024',impression:664 },
    { title: 'Quiz1', description: '04 sept 2024',impression:664 },
    { title: 'Quiz1', description: '04 sept 2024',impression:664 },
    { title: 'Quiz1', description: '04 sept 2024',impression:664 },
    { title: 'Quiz1', description: '04 sept 2024',impression:664 },
    { title: 'Quiz1', description: '04 sept 2024',impression:664 },
    { title: 'Quiz1', description: '04 sept 2024',impression:664 },
    { title: 'Quiz1', description: '04 sept 2024',impression:664 },
    { title: 'Quiz1', description: '04 sept 2024',impression:664 },
    { title: 'Quiz1', description: '04 sept 2024',impression:664 },
    { title: 'Quiz1', description: '04 sept 2024',impression:664 },
    { title: 'Quiz1', description: '04 sept 2024',impression:664 },
    { title: 'Quiz1', description: '04 sept 2024',impression:664 },
    { title: 'Quiz1', description: '04 sept 2024',impression:664 },
    { title: 'Quiz1', description: '04 sept 2024',impression:664 },
    { title: 'Quiz1', description: '04 sept 2024',impression:664 },
    { title: 'Quiz1', description: '04 sept 2024',impression:664 },
    { title: 'Quiz1', description: '04 sept 2024',impression:664 },
    { title: 'Quiz1', description: '04 sept 2024',impression:664 },


    // Add more quizzes as needed
  ];
  return (
    <div className='dashboard-container'>
      <div className='dashboard-top-container'>
        <DashboardQuizCard numberValue={12}
        title={'Quiz Created'}
        color="#FF5D01"
        />
          <DashboardQuizCard numberValue={10}
        title={'Questions Created'}
         color='#60B84B'
        />
          <DashboardQuizCard numberValue={989}
        title={'Total Impressions'}
        color="#5076FF" 
        />
      </div>
      <h4 className='title' style={{textAlign:'left'}}>Trending Quizs</h4>
      <div className="trending-quiz-list">
        {quizzes.map((quiz, index) => (
          <TrendingQuizContainer key={index} title={quiz.title} description={quiz.description} impression={quiz.impression} />
        ))}
      </div>
    </div>
    
  )
}

export default Dashboard;
