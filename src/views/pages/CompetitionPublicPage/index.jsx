import React, { useEffect, useState } from 'react';
import { getDataByPath } from 'services/data.service';
import CompetitionPublicBody from './components/CompetitionPublicBody';
import CompetitionPublicHeader from './components/CompetitionPublicHeader';
import CompetitionPublicNavbar from './components/CompetitionPublicNavbar';

export default function CompetitionPublic() {
  const [competitionFavorite, setCompetitionFavorite] = useState(null);

  async function loadDataListCompetition(currentPage) {
    if (currentPage) {
      const path = 'api/v1/competitions/guest';
      const data = `pageSize=4&currentPage=${currentPage}`;
      const res = await getDataByPath(`${path}`, '', data);
      console.log(res);
      if (res !== null && res !== undefined && (res.status === 200 || res.status === 204)) {
        let newData = [];
        if (res.data.items && res.data.items.length > 0) {
          newData = res.data.items;
        }
        setCompetitionFavorite(newData);
      }
    }
  }

  useEffect(() => {
    if (competitionFavorite === null) {
      loadDataListCompetition(1);
    }
  }, []);

  return (
    <>
      <CompetitionPublicNavbar />
      <CompetitionPublicHeader />
      <CompetitionPublicBody competitionFavorite={competitionFavorite} />
    </>
  );
}
