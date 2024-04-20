export const fetchPhotosData = async (query) => {
  try {
    const res = await fetch(`https://schoolapi.silicornya.net/api/photo-gallery?${query}`, {
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
    const res = await fetch(`https://schoolapi.silicornya.net/api/teachers?${query}`, {
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
    const res = await fetch(`https://schoolapi.silicornya.net/api/chairman-section`, {
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
    const res = await fetch(`https://schoolapi.silicornya.net/api/shift`, {
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
    const res = await fetch(`https://schoolapi.silicornya.net/api/events`, {
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
    const res = await fetch(`https://schoolapi.silicornya.net/api/about`, {
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
    const res = await fetch(`https://schoolapi.silicornya.net/api/footer-contact`, {
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
    const res = await fetch(`https://schoolapi.silicornya.net/api/social`, {
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
    const res = await fetch(`https://schoolapi.silicornya.net/api/notices/all`, {
      cache: "no-store",
      headers: {
        "ngrok-skip-browser-warning": "no more"
      }
    })

    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

export const fetchInformation = async () => {
  try {
    const res = await fetch(`https://schoolapi.silicornya.net/api/information`, {
      cache: "no-store",
      headers: {
        "ngrok-skip-browser-warning": "no more"
      }
    })
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}