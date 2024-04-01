import ChairmanMessage from '@/components/About/ChairmanMessage/ChairmanMessage';
import TeachersPhoto from '@/components/About/TeachersPhoto/TeachersPhoto';
import PhotoGallery from '@/components/Gallery/PhotoGallery';
import Container from '@/components/ui/Container';
import { fetchChairmanSection } from '@/lib/fetchData';
import React from 'react';

const AboutPage = async () => {


  return (
    <div>
      <ChairmanMessage />
      <TeachersPhoto />
      <Container>
        <PhotoGallery />
      </Container>
    </div>
  );
};

export default AboutPage; <h2>About Page</h2>