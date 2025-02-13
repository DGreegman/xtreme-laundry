'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Create a loading component
const LoadingMap = () => (
  <div className="h-[400px] flex items-center justify-center bg-gray-100">
    <p>Loading map...</p>
  </div>
);

// Dynamically import the map component with no SSR
const Map = dynamic(
  () => import('./Map'), // We'll create this component separately
  { 
    ssr: false,
    loading: LoadingMap 
  }
);

const LocationMap = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Find Us</h2>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <Map />
        </div>
        <div className="mt-8 text-center">
          <p className="text-lg text-gray-600">
            123 Clean Street, Laundry City, LC 12345
          </p>
          <p className="text-blue-600 mt-2">
            Open Monday - Saturday: 7AM - 9PM | Sunday: 8AM - 6PM
          </p>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;