import WardrobeBanner from "@/sections/WardrobesBanner";
import Wardrobes from "@/sections/Wardrobes";

export const metadata = {
  title: 'wardrobes'
}

export default function () {
  return (
    <>
      <WardrobeBanner />
      <Wardrobes />
    </>
  )
}