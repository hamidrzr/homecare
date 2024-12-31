import React from 'react';

const ManagementCard = ({ title, description, icon }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
    <div className="text-blue-500 mb-4 text-4xl">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Management = () => {
  const strategies = [
    { title: 'Medication Adherence', description: 'Ensuring proper use of inhalers and other prescribed medications.', icon: '💊' },
    { title: 'Trigger Avoidance', description: 'Identifying and minimizing exposure to asthma triggers in the home.', icon: '🏠' },
    { title: 'Peak Flow Monitoring', description: 'Regular monitoring of lung function using a peak flow meter.', icon: '📊' },
    { title: 'Action Plan', description: 'Developing and following a personalized asthma action plan.', icon: '📝' },
  ];

  return (
    <section id="management" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-600">Asthma Management Strategies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {strategies.map((strategy, index) => (
            <ManagementCard key={index} {...strategy} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Management;
