import Academic from '@/components/Academic/Academic';
import PhotoGallery from '@/components/Gallery/PhotoGallery';
import NoticeBoard from '@/components/Notice/NoticeBoard/NoticeBoard';
import Container from '@/components/ui/Container';
import { fetchNoticeInfo, fetchPhotosData } from '@/lib/fetchData';
import React from 'react';

const AcademicPage = async () => {
  const photos = await fetchPhotosData()
  const notice = await fetchNoticeInfo()
  return (
    <div>
      <Academic />
      <Container>
        <NoticeBoard notice={notice} />
        <PhotoGallery photos={photos} />
      </Container>

    </div>
  );
};

export default AcademicPage;