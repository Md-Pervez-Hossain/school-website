
import Chairman from '@/components/Chairman/Chairman'
import States from '@/components/States/States'
import Information from '@/components/Information/Information'
import PhotoGallery from '@/components/Gallery/PhotoGallery'
import Admission from '@/components/AdmissionAndShift/Admission'
import Shifts from '@/components/Shifts/Shifts'
import Notice from '@/components/Notice/Notice'
import Container from '@/components/ui/Container'
import { fetchChairmanSection, fetchPhotosData } from '@/lib/fetchData'
export default async function Home() {

  const photos = await fetchPhotosData()
  const chairmanData = await fetchChairmanSection()
  return (
    <main>
      <Container>
        <Chairman chairmanData={chairmanData} />
        <States />
        <Information />
        <Notice />
        <Admission />
        <Shifts />
        <PhotoGallery photos={photos} />
      </Container>
    </main>
  )
}
