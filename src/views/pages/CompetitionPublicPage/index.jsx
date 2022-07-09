import React from 'react';
import CompetitionPublicBody from './components/CompetitionPublicBody';
import CompetitionPublicHeader from './components/CompetitionPublicHeader';
import CompetitionPublicNavbar from './components/CompetitionPublicNavbar';

export default function CompetitionPublic() {
  return (
    <>
      <CompetitionPublicNavbar />
      <CompetitionPublicHeader />
      <CompetitionPublicBody />
    </>
  );
}
