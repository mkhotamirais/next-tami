import SidebarTitleDesktop from "@/components/layouts/SidebarTitleDesktop";
import React from "react";
import { getData } from "./action";
import Image from "next/image";

export default async function YoutubePage() {
  const data = await getData();
  const item = data?.items?.[0];
  const profileImg = item?.snippet?.thumbnails?.default?.url;

  return (
    <div>
      <SidebarTitleDesktop />
      <Image src={profileImg} alt="profile" width={100} height={100} priority />
    </div>
  );
}
