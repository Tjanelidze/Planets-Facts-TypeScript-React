import React from 'react';
import { planetDataInterface } from '../interface/planetDataInterface';
import { useParams } from 'react-router-dom';

export default function FourCardsComponent({ planets }: planetDataInterface) {
  const { planetName } = useParams();
  const filteredPlanet = planets.find((planet) => planet.name === planetName);
  return <aside>FourCardsComponent</aside>;
}
