import ChairmanMessage from '@/components/About/ChairmanMessage/ChairmanMessage';
import TeachersPhoto from '@/components/About/TeachersPhoto/TeachersPhoto';
import Chairman from '@/components/Chairman/Chairman';
import PhotoGallery from '@/components/Gallery/PhotoGallery';
import Container from '@/components/ui/Container';
import { fetchChairmanSection } from '@/lib/fetchData';
import React from 'react';

const AboutPage = async () => {
  const chairmanData = await fetchChairmanSection()

  return (
    <div>

      <Container>
        <Chairman chairmanData={chairmanData} />
        <TeachersPhoto />
        <PhotoGallery />
      </Container>
    </div>
  );
};

export default AboutPage; <h2>About Page</h2>