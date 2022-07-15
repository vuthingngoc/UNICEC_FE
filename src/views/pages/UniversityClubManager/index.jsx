import UniversityHeader from 'components/Headers/UnicersityHeader';
import { statusCode } from 'constants/status.constants';
import React, { useEffect, useState } from 'react';
import { getDataByPath } from 'services/data.service';
import UniversityClubBody from './components/UniversityClubBody';

export default function UniversityClubManager() {
  const [clubs, setClubs] = useState(null);

  async function loadListClub(accessToken, universityID, search, currentPage) {
    if ((accessToken, universityID)) {
      const path = 'api/v1/clubs/search';
      const data = `universityId=${universityID}&name=${search}&status=true&currentPage=${currentPage}&pageSize=10`;
      const res = await getDataByPath(path, accessToken, data);
      console.log(res);
      if (res && res.status === statusCode.success) {
        if (res.data && res.data.items && res.data.items.length > 0) {
          setClubs(res.data.items);
        } else {
          setClubs([]);
        }
      }
    }
  }

  useEffect(() => {
    if (localStorage && localStorage.getItem('accessToken')) {
      const accessToken = localStorage.getItem('accessToken');
      const universityID = localStorage.getItem('universityID');
      if (clubs === null) {
        loadListClub(accessToken, universityID, '', 1);
      }
    }
  }, []);

  return (
    <>
      <UniversityHeader />
      <UniversityClubBody clubs={clubs} loadListClub={loadListClub} />
    </>
  );
}
