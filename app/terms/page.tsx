import React from 'react';
import Navbar from '../components/navbar/page';
import Footer from '../components/footer/footer';
import TermsOfService from '../components/privacy/terms';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Terms and Conditions | Orbies",
  description: "Read the Terms and Conditions of Orbies.in. By using our services, you agree to these terms.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col font-sans relative">
      <Navbar />
      <div className="w-full">
        <TermsOfService />
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </main>
  );
}
