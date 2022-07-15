import React, { useEffect, useState } from 'react';
import { getDataByPath } from 'services/data.service';
import CompetitionPublicBody from './components/CompetitionPublicBody';
import CompetitionPublicHeader from './components/CompetitionPublicHeader';
import CompetitionPublicNavbar from './components/CompetitionPublicNavbar';

export default function CompetitionPublic() {
  const [competitionFavorite, setCompetitionFavorite] = useState(null);

  async function loadDataListCompetitionSponsorFavor(currentPage) {
    if (currentPage) {
      const path = 'api/v1/competitions/guest';
      const data = `pageSize=4&currentPage=${currentPage}&sponsor=true&mostView=true&nearlyDate=false`;
      const res = await getDataByPath(`${path}`, '', data);
      console.log(res);
      if (res && (res.status === 200 || res.status === 204)) {
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
      loadDataListCompetitionSponsorFavor(1);
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
