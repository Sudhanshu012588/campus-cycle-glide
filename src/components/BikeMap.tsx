
import React, { useState } from 'react';
import { Search, MapPin, Bike, Battery, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Mock data for bike stations
const bikeStations = [
  {
    id: 1,
    name: "Main Building",
    location: "In front of Main Building",
    coordinates: { lat: 34.0522, lng: -118.2437 },
    bikes: 8,
    available: true
  },
  {
    id: 2,
    name: "Leacture Hall Complex",
    location: "In front of Lalitgiri Lecture Hall",
    coordinates: { lat: 34.0548, lng: -118.2428 },
    bikes: 5,
    available: true
  },
  {
    id: 3,
    name: "MHR",
    location: "In front of Mahanadi Hall",
    coordinates: { lat: 34.0535, lng: -118.2410 },
    bikes: 3,
    available: true
  },
  {
    id: 4,
    name: "GHR",
    location: "In front of Ganga Hall",
    coordinates: { lat: 34.0510, lng: -118.2450 },
    bikes: 0,
    available: false
  },
  
  {
    id: 5,
    name: "RHR",
    location: "In front of RHR",
    coordinates: { lat: 34.0530, lng: -118.2460 },
    bikes: 6,
    available: true
  },
  
  {
    id: 6,
    name: "SMS",
    location: "In SMS Parking Lot",
    coordinates: { lat: 34.0530, lng: -118.2460 },
    bikes: 6,
    available: true
  },
  {
    id: 7,
    name: "Gymkhana",
    location: "In front of Gymkhana",
    coordinates: { lat: 34.0530, lng: -118.2460 },
    bikes: 6,
    available: true
  }
];

const BikeMap = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStation, setSelectedStation] = useState<number | null>(null);

  const filteredStations = bikeStations.filter(station => 
    station.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    station.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="map" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Find a Cycle Near You</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our electric cycles are available at multiple stations across campus.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Map and Search */}
          <div className="lg:w-2/3 bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Search Box */}
            <div className="p-4 border-b">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for a station or location..."
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cycle-green-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-100 h-96 relative">
              <div className="absolute inset-0 flex items-center justify-center flex-col p-6 text-center">
                <MapPin className="h-12 w-12 text-cycle-green-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Interactive Map Coming Soon</h3>
                <p className="text-gray-600">
                  Our interactive map will show real-time bike locations and availability.
                </p>
                <p className="mt-4 text-sm text-gray-500">For now, please use the station list to find your nearest cycle.</p>
              </div>

              {/* Map Markers - just visual elements for now */}
              <div className="absolute left-1/4 top-1/3">
                <div className="w-5 h-5 bg-cycle-green-500 rounded-full animate-pulse-slow"></div>
              </div>
              <div className="absolute left-2/3 top-1/2">
                <div className="w-5 h-5 bg-cycle-green-500 rounded-full animate-pulse-slow"></div>
              </div>
              <div className="absolute left-1/2 top-1/4">
                <div className="w-5 h-5 bg-cycle-green-500 rounded-full animate-pulse-slow"></div>
              </div>
              <div className="absolute left-3/4 top-2/3">
                <div className="w-5 h-5 bg-cycle-green-500 rounded-full animate-pulse-slow"></div>
              </div>
              <div className="absolute left-1/3 top-3/4">
                <div className="w-5 h-5 bg-cycle-green-500 rounded-full animate-pulse-slow"></div>
              </div>
            </div>
          </div>

          {/* Station List */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-4 bg-cycle-green-50 border-b">
                <h3 className="font-bold flex items-center">
                  <Bike className="mr-2 text-cycle-green-600" />
                  Available Stations
                </h3>
              </div>
              <div className="divide-y max-h-96 overflow-y-auto">
                {filteredStations.length > 0 ? (
                  filteredStations.map(station => (
                    <div 
                      key={station.id} 
                      className={`p-4 hover:bg-gray-50 cursor-pointer transition-colors ${selectedStation === station.id ? 'bg-cycle-green-50' : ''}`}
                      onClick={() => setSelectedStation(station.id)}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold">{station.name}</h4>
                        <span className={`text-xs px-2 py-1 rounded-full ${station.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                          {station.available ? 'Available' : 'No Bikes'}
                        </span>
                      </div>
                      <p className="text-gray-500 text-sm flex items-center mb-2">
                        <MapPin className="h-3 w-3 mr-1" /> {station.location}
                      </p>
                      <div className="flex items-center space-x-4 mt-2 text-sm">
                        <span className="flex items-center">
                          <Bike className="h-4 w-4 mr-1 text-gray-500" />
                          <span className="text-gray-700">{station.bikes} bikes</span>
                        </span>
                        <span className="flex items-center">
                          <Battery className="h-4 w-4 mr-1 text-gray-500" />
                          <span className="text-gray-700">Fully Charged</span>
                        </span>
                      </div>
                      
                      {selectedStation === station.id && (
                        <div className="mt-4 pt-3 border-t">
                          <Button 
                            disabled={!station.available}
                            className={`w-full ${!station.available ? 'bg-gray-300' : 'bg-cycle-green-600 hover:bg-cycle-green-700'}`}
                          >
                            {station.available ? 'Reserve a Bike' : 'No Bikes Available'}
                          </Button>
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="p-8 text-center text-gray-500">
                    <MapPin className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                    <p>No stations found matching "{searchQuery}"</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BikeMap;
