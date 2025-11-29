import { Trophy } from 'lucide-react';
import React from 'react';
const achievements = [
    {
      year: "2021",
      bachelors: "119",
      diplomas: "50",
      higherCertificate:"13",
      distinctions:"82",
      bachelorsPer: "65,5",
      diplomasPer: "27,5",
      higherCertificatePer:"7,1",
      distinctionsPer:"-"
    },
    {
      year: "2022",
      bachelors: "103",
      diplomas: "35",
      higherCertificate:"5",
      distinctions:"135",
      bachelorsPer: "72",
      diplomasPer: "24,6",
      higherCertificatePer:"3,5",
      distinctionsPer:"-"
    },
    {
      year: "2023",
      bachelorsPer: "70,35",
      diplomasPer: "20.93",
      higherCertificatePer:"8.72",
      distinctions:"145",
      bachelors: "121",
      diplomas: "36",
      higherCertificate:"15",
      distinctionsPer:"-",
    },
    {
      year: "2024",
      bachelorsPer: "70,35",
      diplomasPer: "20.93",
      higherCertificatePer:"8.72",
      distinctions:"145",
      bachelors: "121",
      diplomas: "36",
      higherCertificate:"15",
      distinctionsPer:"-",
    }
  ];
const Achievement = () => {
    return (
        <>
            <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center justify-center">
              <Trophy className="w-8 h-8 mr-3 text-red-800" />
              Our Achievements
            </h2>
            <p className="text-gray-600 mt-2">Celebrating excellence in academics</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
            {achievements.map((achievement, index) => (
              <table key={index} className="hover:shadow-lg transition-shadow rounded bg-red-800">
                <caption className="text-2xl font-bold text-gray-900 p-3">
                  Matric results class of {achievement.year}
                </caption>
                <thead className="">
                  <tr className = "text-white ">
                    <th className='p-4'>Description</th>
                    <th></th>
                    <th>Percentage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-white pb-4">
                    <th className='p-4'></th>
                    <th>No</th>
                    <th>%</th>  
                  </tr>
                  <tr className="ligt-custom-pink pb-4">
                    <th className='p-4'>Bachelors</th>
                    <th>{achievement.bachelors}</th>
                    <th>{achievement.bachelorsPer}</th>  
                  </tr>
                  <tr className="dark-custom-pink pb-4">
                    <th className='p-4'>Diplomas</th>
                    <th>{achievement.diplomas}</th>
                    <th>{achievement.diplomasPer}</th>  
                  </tr>
                  <tr className="ligt-custom-pink pb-4">
                    <th className='p-4'>Hight Certificate</th>
                    <th>{achievement.higherCertificate}</th>
                    <th>{achievement.higherCertificatePer}</th>  
                  </tr>
                  <tr className="dark-custom-pink pb-4">
                    <th className='p-4'>Distinctions</th>
                    <th>{achievement.distinctions}</th>
                    <th >{achievement.distinctionsPer}</th>  
                  </tr>
                </tbody>
              </table>
            ))}
          </div>
        </>
    );
}

export default Achievement;
