"use client";
import React, { useEffect, useState } from 'react';

import { 
  FileText, 
  Download, 
  Clock, 
  CheckCircle,
  XCircle,
  PlusCircle, 
  LogOut, 
  BookOpen,
  BarChart3,
  MessageSquare,
  User,
  Save,
  X,
  Upload,
  Image as ImageIcon,
  Trash2
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '@/components/ui/button';
import RenderNewsView from './RenderNewsView';
import DigitalLibrary from './DigitalLibrary';
import RenderDownloadsView from './RenderDownloadsView';
const voucher_codes = require("voucher-code-generator");

const RenderContent = ({ activeView , setActiveView,setShowNewArticleForm,stats=[]}:any): React.ReactNode => {
    switch (activeView) {
      case 'downloads':
        return <RenderDownloadsView downloads={[]} />;
      case 'news':
        return <RenderNewsView />;
      
      default:
        return (
          <div className="space-y-8">
            {/* Stats Grid */}

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  
                 
                  
                  <Button 
                    onClick={() => {
                      setActiveView('news');
                      setShowNewArticleForm(true);
                    }} 
                    className='border-none cursor-pointer text-black shadow-md hover:shadow-sm h-20 bg-white hover:text-red-800 hover:bg-white'
                  >
                    <div className="text-center">
                      <PlusCircle className="w-6 h-6 mx-auto mb-2" />
                      <span>Submit Article</span>
                    </div>
                  </Button>

                  <Button 
                    onClick={() => setActiveView('downloads')} 
                    variant="outline" 
                    className='border-none cursor-pointer shadow-md hover:shadow-sm h-20 bg-white hover:text-red-800 hover:bg-white'
                  >
                    <div className="text-center ">
                      <Download className="w-6 h-6 mx-auto mb-2" />
                      <span>View Downloads</span>
                    </div>
                  </Button>
                </div>
              </CardContent>
            </Card>

          
          </div>
        );
    }
  };

export default RenderContent;