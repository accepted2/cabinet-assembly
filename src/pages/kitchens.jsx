import KitchensBanner from "@/sections/KitchensBanner";
import Kitchens from "@/sections/Kitchens";

export const metadata = {
  title: 'kitchen'
}

export default function () {
  return (
    <>
      <KitchensBanner />
      <Kitchens />

    </>
  )
}