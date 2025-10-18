import Hero from "@/sections/Hero";
import Categories from "@/sections/Categories";
import Benefits from "@/sections/Benefits";

export const metadata = {
  title: 'Home',
}

export default function () {
  return (
    <>
      <Hero />
      <Categories />
      <Benefits />
    </>
  )
}
