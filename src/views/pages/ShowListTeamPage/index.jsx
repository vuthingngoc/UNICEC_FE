import SimpleHeader from 'components/Headers/SimpleHeader';
import React from 'react';
import ShowListTeamBody from './components/ShowListTeamBody';

export default function ShowListTeamPage() {
  return (
    <>
      <SimpleHeader name="Danh sách các đội dự thi" parentName="Cuộc thi và sự kiện" linkParent="/" />
      <ShowListTeamBody />
    </>
  );
}
