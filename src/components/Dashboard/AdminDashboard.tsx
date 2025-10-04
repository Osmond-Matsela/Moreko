"use client";
import React, { useState } from 'react';

import { 
  FileText, 
  Download, 

  BarChart3,
 
} from 'lucide-react';

import { Button } from '@/components/ui/button';

import styles from "@/components/styles/DashboardStyles.module.css";
import DashNavBar from './DashboardNav';

import { useDatabase } from '@/context/Database';
import { useSession } from 'next-auth/react';

import RenderContent from './RenderContent';




const AdminDashboard = () => {
  const {posts} = useDatabase();
  const {data: session } = useSession();

  const [activeView, setActiveView] = useState<string>('dashboard');
  const [showNewArticleForm, setShowNewArticleForm] = useState<boolean>(false);
  
 
  return (
    <div className={`${styles.styles} `}>
      {/* Header */}
      <DashNavBar />  

      <div className={`max-w-screen mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16 `}>
        {/* Navigation */}
        <nav className={`invisible-scrollbar flex overflow-x-auto h-15 gap-2 mb-8`} >
          <Button
            variant={activeView === 'dashboard' ? 'default' : 'outline'}
            onClick={() => setActiveView('dashboard')}
            className={activeView === 'dashboard' ? 'bg-red-800 hover:bg-red-900 text-white' : 'border-none cursor-pointer shadow-md hover:shadow-sm'}
          >
            <BarChart3 className="w-4 h-4 mr-2" />
            Dashboard
          </Button>
         
          <Button
            variant={activeView === 'news' ? 'default' : 'outline'}
            onClick={() => setActiveView('news')}
            className={activeView === 'news' ? 'bg-red-800 hover:bg-red-900 text-white' : 'border-none cursor-pointer shadow-md hover:shadow-sm'}
          >
            <FileText className="w-4 h-4 mr-2" />
            My Articles
          </Button>
          <Button
            variant={activeView === 'downloads' ? 'default' : 'outline'}
            onClick={() => setActiveView('downloads')}
            className={activeView === 'downloads' ? 'bg-red-800 hover:bg-red-900 text-white' : 'border-none cursor-pointer shadow-md hover:shadow-sm'}
          >
            <Download className="w-4 h-4 mr-2" />
            Downloads
          </Button>
        </nav>
        <h2 className="text-3xl  font-bold text-gray-900 mb-4">
          Welcome {session?.user?.name}
        </h2>
        {/* Main Content */}
        <RenderContent activeView={activeView} setActiveView={setActiveView} setShowNewArticleForm={setShowNewArticleForm}/>
      </div>
    </div>
  );
};

export default AdminDashboard;