import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CaseSelection from './components/CaseSelection';
import SizeSelection from './components/SizeSelection';
import BandSelection from './components/BandSelection';
import CollectionSwitching from './components/CollectionSwitching';
import PriceDisplay from './components/PriceDisplay';
import SaveShare from './components/SaveShare';
import WatchPreview from './components/WatchPreview';
import './styles/App.css';

const App = () => {
  const [cases, setCases] = useState([]);
  const [sizes] = useState([42, 46]);
  const [bands, setBands] = useState([]);
  const [collections, setCollections] = useState([]);
  const [selectedCase, setSelectedCase] = useState(null);
  const [selectedSize, setSelectedSize] = useState(42);
  const [selectedBand, setSelectedBand] = useState(null);
  const [selectedCollection, setSelectedCollection] = useState(null);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    // Fetch data from API
    axios.get('/api/cases').then(response => setCases(response.data));
    axios.get('/api/bands').then(response => setBands(response.data));
    axios.get('/api/collections').then(response => setCollections(response.data));
  }, []);

  useEffect(() => {
    // Calculate price based on selections
    let totalPrice = 0;
    if (selectedCase) totalPrice += selectedCase.price;
    if (selectedBand) totalPrice += selectedBand.price;
    setPrice(totalPrice);
  }, [selectedCase, selectedBand]);

  return (
    <div className="app">
      <h1>Apple Watch Studio</h1>
      <CollectionSwitching
        collections={collections}
        selectedCollection={selectedCollection}
        onSelectCollection={setSelectedCollection}
      />
      <CaseSelection
        cases={cases}
        selectedCase={selectedCase}
        onSelectCase={setSelectedCase}
      />
      <SizeSelection
        sizes={sizes}
        selectedSize={selectedSize}
        onSelectSize={setSelectedSize}
      />
      <BandSelection
        bands={bands}
        selectedBand={selectedBand}
        onSelectBand={setSelectedBand}
      />
      <WatchPreview
        selectedCase={selectedCase}
        selectedSize={selectedSize}
        selectedBand={selectedBand}
      />
      <PriceDisplay price={price} />
      <SaveShare />
    </div>
  );
};

export default App;
