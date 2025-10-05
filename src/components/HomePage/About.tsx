import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { GraduationCap, MapPin } from 'lucide-react';
 const schoolInfo = {
    address: "Moreko Secondary School, R579, Phokwane, 1061",
    phone: "+27 (15) 491-3233",
    email: "administration@moreko.co.za",
    established: "1987",
    motto: "Hard Work Conquers All",
    principal: "Mrs. EM Mkhabele"
  };
const About = () => {
    return (
        <>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">About Moreko High School</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="w-6 h-6 mr-3 text-red-800" />
                  School Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900">Address</h3>
                  <p className="text-gray-600">{schoolInfo.address}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Contact</h3>
                  <p className="text-gray-600">Phone: {schoolInfo.phone}</p>
                  <p className="text-gray-600">Email: {schoolInfo.email}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Principal</h3>
                  <p className="text-gray-600">{schoolInfo.principal}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Established</h3>
                  <p className="text-gray-600">{schoolInfo.established}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <GraduationCap className="w-6 h-6 mr-3 text-red-800" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                At Moreko High School, we strive to be a centre of excellence where every learner feels inspired, supported, and empowered to thrive. 
                We are committed to creating a nurturing environment led by dedicated teachers, strong leadership, and an engaged community — all working together to achieve quality learning and teaching for every child. 
                Through growth, accountability, and inclusivity, we aim to shape responsible, confident citizens ready to contribute to a peaceful and prosperous South Africa.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Moreko High was established in 1987 by the late Principal Nkosi NJ with just five learners and two educators. Through his dedication — recruiting students and even buying oranges to encourage attendance — the school quickly grew into a full class and laid the foundation for the thriving learning community we have today.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Since its founding, Moreko High has been a proud cornerstone of education in our community — fostering a lasting culture of learning, respect, and achievement.
              </p>

              </CardContent>
            </Card>
          </div>
        </>
    );
}

export default About;
