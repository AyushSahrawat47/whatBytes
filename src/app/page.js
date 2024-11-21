import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import MiddleSection from "./components/skillTest"

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-12">
        <div className="col-span-2 max-md:col-span-4 max-sm:col-span-12"><Sidebar/></div>
        <div className="col-span-10 max-md:col-span-8 max-sm:col-span-12"><MiddleSection/></div>
      </div>
      

    </>
  );
}
