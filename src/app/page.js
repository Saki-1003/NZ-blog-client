import Image from "next/image";
import NavBar from "@/components/NavBar";
import Header from "@/components/Header";
import ScrollReveal from "@/components/ScrollReveal";
import AnimationImages from "@/components/AnimationImages";

export default function Home() {
  const images = [
    { name: "Abel Tasman", path: "/image/Abel Tasman/IMG_4644.jpg" },
    { name: "The Catlins", path: "/image/Catlins/IMG_3768.jpg" },
    { name: "Lake Mackenzie", path: "/image/Routeburn/IMG_3997.jpg" },
    { name: "Mt. Aurther", path: "/image/Nelson/IMG_4845.jpg" },
    { name: "Earnslaw Burn", path: "/image/Earnslaw Burn/IMG_3658.jpg" },
    { name: "Mt. Cook", path: "/image/Mt Cook/IMG_3459.jpg" },
  ];

  return (
    <>
      <div className="flex">
        <NavBar />
        <div className="w-full">
          <Header />
          <div className="absolute top-1/3 left-2/4 -translate-x-1/2 z-10 text-5xl font-semibold font-mono text-white">
            <ScrollReveal move="top" delay="500" duration="2000">
              <h2>Discover your next adventure</h2>
            </ScrollReveal>
          </div>
          <div className="w-full h-[30rem] bg-[url('/image/bg1-IMG_4696.jpg')] bg-center bg-cover" />
          <p className="bg-slate-200 w-full text-center text-xl px-40 text-gray-700 font-mono p-14">
            New Zealand is home to many endemic plants and animals. Its unique
            isolated geographical features has formed numerous spectacular
            landscape. This small island never cease to attract travelers of any
            age from all walks of life around the world. The beauty of the
            country is just too good to pass up!
          </p>
        </div>
      </div>
      <section className="bg-[url('/image/bg_IMG_4084.jpg')] pt-10 pb-20 bg-cover bg-center bg-fixed relative">
        <AnimationImages images={images} />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
      </section>
    </>
  );
}
