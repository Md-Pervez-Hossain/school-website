export const fetchPhotosData = async (query) => {
  try {
    const res = await fetch(`https://5d45-27-147-163-201.ngrok-free.app/api/photo-gallery?${query}`, {
      cache: "no-store",
      headers: {
        "ngrok-skip-browser-warning": "no more"
      }
    })
    return res.json();
  } catch (error) {
    console.log(error);
  }
}
export const fetchTeachersPhotos = async (query) => {
  try {
    const res = await fetch(`https://5d45-27-147-163-201.ngrok-free.app/api/teachers?${query}`, {
      cache: "no-store",
      headers: {
        "ngrok-skip-browser-warning": "no more"
      }
    })
    return res.json();
  } catch (error) {
    console.log(error);
  }
}
export const fetchChairmanSection = async () => {
  try {
    const res = await fetch(`https://5d45-27-147-163-201.ngrok-free.app/api/chairman-section`, {
      cache: "no-store",
      headers: {
        "ngrok-skip-browser-warning": "no more"
      }
    })
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export const fetchShiftSection = async () => {
  try {
    const res = await fetch(`https://5d45-27-147-163-201.ngrok-free.app/api/shift`, {
      cache: "no-store",
      headers: {
        "ngrok-skip-browser-warning": "no more"
      }
    })
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export const fetchEventsSection = async () => {
  try {
    const res = await fetch(`https://5d45-27-147-163-201.ngrok-free.app/api/events`, {
      cache: "no-store",
      headers: {
        "ngrok-skip-browser-warning": "no more"
      }
    })
    return res.json();
  } catch (error) {
    console.log(error);
  }
}
export const fetchAboutInfo = async () => {
  try {
    const res = await fetch(`https://5d45-27-147-163-201.ngrok-free.app/api/about`, {
      cache: "no-store",
      headers: {
        "ngrok-skip-browser-warning": "no more"
      }
    })
    return res.json();
  } catch (error) {
    console.log(error);
  }
}
export const fetchFooterContactInfo = async () => {
  try {
    const res = await fetch(`https://5d45-27-147-163-201.ngrok-free.app/api/footer-contact`, {
      cache: "no-store",
      headers: {
        "ngrok-skip-browser-warning": "no more"
      }
    })
    return res.json();
  } catch (error) {
    console.log(error);
  }
}
export const fetchSocialMediaInfo = async () => {
  try {
    const res = await fetch(`https://5d45-27-147-163-201.ngrok-free.app/api/social`, {
      cache: "no-store",
      headers: {
        "ngrok-skip-browser-warning": "no more"
      }
    })
    return res.json();
  } catch (error) {
    console.log(error);
  }
}
export const fetchNoticeInfo = async () => {
  try {
    const res = await fetch(`https://5d45-27-147-163-201.ngrok-free.app/api/notices/all`, {
      cache: "no-store",
      headers: {
        "ngrok-skip-browser-warning": "no more"
      }
    })
    console.log("Hello bla bla");
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}