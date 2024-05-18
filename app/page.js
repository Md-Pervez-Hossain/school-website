
import Chairman from '@/components/Chairman/Chairman'
import States from '@/components/States/States'
import Information from '@/components/Information/Information'
import PhotoGallery from '@/components/Gallery/PhotoGallery'
import Admission from '@/components/AdmissionAndShift/Admission'
import Shifts from '@/components/Shifts/Shifts'
import Notice from '@/components/Notice/Notice'
import Container from '@/components/ui/Container'
import { fetchChairmanSection, fetchHeroSection, fetchInformation, fetchNoticeInfo, fetchPhotosData, fetchShiftSection } from '@/lib/fetchData'
import HeroBanner from '@/components/HeroBanner/HeroBanner'
export default async function Home() {
  const photos = await fetchPhotosData()
  const chairmanData = await fetchChairmanSection()
  const shiftsInfo = await fetchShiftSection()
  const notice = await fetchNoticeInfo()
  const information = await fetchInformation()
  const heroSection = await fetchHeroSection()
  return (
    <main>
      <HeroBanner heroSection={heroSection} />
      <Container>

        <Chairman chairmanData={chairmanData} />
        <States />
        <Information information={information} />
        <Notice notice={notice} />
        <Admission />
        <Shifts shiftsInfo={shiftsInfo} />
        <PhotoGallery photos={photos} />
      </Container>
    </main>
  )
}
