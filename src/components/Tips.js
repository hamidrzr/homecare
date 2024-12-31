import React from 'react';

const TipCard = ({ tip }) => (
  <div className="bg-white p-4 rounded-lg shadow-md">
    <p className="text-gray-700">{tip}</p>
  </div>
);

const Tips = () => {
  const asthmaHomeTips = [
    "Keep your home clean and dust-free",
    "Use hypoallergenic bedding",
    "Maintain proper humidity levels",
    "Avoid smoking and second-hand smoke",
    "Use air purifiers in key areas",
    "Keep pets out of the bedroom",
    "Regular exercise as recommended by your doctor",
    "Practice relaxation techniques to manage stress",
  ];

  return (
    <section id="tips" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-600">Home Care Tips for Asthma Patients</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {asthmaHomeTips.map((tip, index) => (
            <TipCard key={index} tip={tip} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tips;
