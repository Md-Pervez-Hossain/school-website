import config from "@/config";


export const fetchPhotosData = async (query) => {
  const res = await fetch(`${config.apiBaseUrl}/photo-gallery?${query}`, {
    cache: "no-store",
  });
  return res.json();
}

export const fetchTeachersPhotos = async (query) => {
  try {
    const res = await fetch(`${config.apiBaseUrl}/teachers?${query}`, {
      cache: "no-store",
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export const fetchChairmanSection = async () => {
  try {
    const res = await fetch(`${config.apiBaseUrl}/chairman-section`, {
      cache: "no-store",
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export const fetchShiftSection = async () => {
  try {
    const res = await fetch(`${config.apiBaseUrl}/shift`, {
      cache: "no-store",
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export const fetchEventsSection = async () => {
  try {
    const res = await fetch(`${config.apiBaseUrl}/events`, {
      cache: "no-store",
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export const fetchAboutInfo = async () => {
  try {
    const res = await fetch(`${config.apiBaseUrl}/about`, {
      cache: "no-store",
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export const fetchFooterContactInfo = async () => {
  try {
    const res = await fetch(`${config.apiBaseUrl}/footer-contact`, {
      cache: "no-store",
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export const fetchSocialMediaInfo = async () => {
  try {
    const res = await fetch(`${config.apiBaseUrl}/social`, {
      cache: "no-store",
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export const fetchNoticeInfo = async () => {
  try {
    const res = await fetch(`${config.apiBaseUrl}/notices/all`, {
      cache: "no-store",
    });
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

export const fetchInformation = async () => {
  try {
    const res = await fetch(`${config.apiBaseUrl}/information`, {
      cache: "no-store",
    });
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

export const fetchHeroSection = async () => {
  try {
    const res = await fetch(`${config.apiBaseUrl}/hero-section`, {
      cache: "no-store",
    });
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

export const postContact = async (values) => {
  try {
    const res = await fetch(
      `${config.apiBaseUrl}/contact`,
      {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "content-type": "application/json",
        },
      }
    );
    const result = await res.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}
