"use client";

import { BookOpen, Calendar, Download, Lock, LogIn, Users, X } from 'lucide-react';
import React, { useState } from 'react';
import { Card } from '../ui/card';
import Link from 'next/link';
import { Button } from '../ui/button';
import DigitalLibrary from '../Dashboard/DigitalLibrary';
import { signIn, useSession } from 'next-auth/react';

const PlatformFeatures = () => {
    const [isNewsletterModalOpen, setIsNewsletterModalOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');
     const [digitalLibrary, setDigitalLibrary] = useState(false);
     const {data: session, status} = useSession();

    const handleNewsletterSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage('');

        // Simulate API call
        setTimeout(() => {
            setSubmitMessage('Thank you for subscribing! Check your email for confirmation.');
            setEmail('');
            setIsSubmitting(false);
            
            // Close modal after 2 seconds
            setTimeout(() => {
                setIsNewsletterModalOpen(false);
                setSubmitMessage('');
            }, 2000);
        }, 1000);
    };
    if (digitalLibrary && status === 'authenticated') {
      return <DigitalLibrary setOpen={setDigitalLibrary}/>
    }

    return (
        <>
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">What's Available on Our Digital Platform</h2>
                <p className="text-gray-600 mt-2">Sign in to access these exclusive features</p>
            </div>
          
            <div className="flex flex-col md:flex-row justify-center gap-6">
                <Card className="text-center p-6 opacity-75" onClick={() => {
                  if (status === 'authenticated') {
                    setDigitalLibrary(true);
                  }
                  else{
                    signIn();
                  }
                }}>
                    <div className="p-3 bg-red-100 rounded-lg mx-auto w-fit mb-4">
                        <BookOpen className="w-8 h-8 text-red-800" />
                    </div>
                    <h3 className="font-semibold mb-2">Digital Library</h3>
                    <p className="text-sm text-gray-600">Download study materials, exam papers, and educational resources</p>
                   {
                    status === 'unauthenticated' ? (
                       <Lock className="w-4 h-4 text-gray-400 mx-auto mt-2" />
                    ) : (
                      <></>
                    )
                   }
                </Card>

                <Card 
                    className="text-center p-6 opacity-75 cursor-pointer hover:opacity-100 transition-opacity"
                    onClick={() => setIsNewsletterModalOpen(true)}
                >
                    <div className="p-3 bg-red-100 rounded-lg mx-auto w-fit mb-4">
                        <Download className="w-8 h-8 text-red-800" />
                    </div>
                    <h3 className="font-semibold mb-2">Newsletters</h3>
                    <p className="text-sm text-gray-600">Access monthly newsletters and submit content for publication</p>
                    
                </Card>
            </div>

            <div className="text-center mt-8">
              {
                status === 'unauthenticated' ? (
                  <Link href="/login" className="hover:disabled">
                    <Button size="lg" className="bg-red-800 hover:bg-red-900 text-gray-100 cursor-pointer">
                        <LogIn className="w-5 h-5 mr-2" />
                        Sign In to Access Platform
                    </Button>
                </Link>
                ) : (
                  <></>
                )
              }
                
            </div>

            {/* Newsletter Modal */}
            {isNewsletterModalOpen && (
                <div className="fixed inset-0 bg-red-800/90 bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
                        <button
                            onClick={() => setIsNewsletterModalOpen(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <div className="p-3 bg-red-100 rounded-lg mx-auto w-fit mb-4">
                            <Download className="w-8 h-8 text-red-800" />
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
                            Subscribe to Our Newsletter
                        </h2>
                        <p className="text-gray-600 mb-6 text-center">
                            Stay updated with monthly newsletters and educational content
                        </p>

                        <form onSubmit={handleNewsletterSubmit}>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            {submitMessage && (
                                <div className="mb-4 p-3 bg-green-100 text-green-800 rounded-lg text-sm">
                                    {submitMessage}
                                </div>
                            )}

                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-red-800 hover:bg-red-900 text-white"
                            >
                                {isSubmitting ? 'Subscribing...' : 'Subscribe Now'}
                            </Button>
                        </form>

                        <p className="text-xs text-gray-500 mt-4 text-center">
                            You can unsubscribe at any time. We respect your privacy.
                        </p>
                    </div>
                </div>
            )}
        </>
    );
};

export default PlatformFeatures;