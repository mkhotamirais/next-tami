"use server";

const url = "https://www.googleapis.com/youtube/v3/channels";
const apiKey = process.env.YOUTUBE_API_KEY as string;
const channelId = "UCkXmLjEr95LVtGuIm3l2dPg";

export const getData = async () => {
  try {
    const res = await fetch(`${url}?key=${apiKey}&id=${channelId}&part=snippet`);
    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
