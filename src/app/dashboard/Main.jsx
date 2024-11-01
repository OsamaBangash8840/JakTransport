import Header from './Header';
import Data from './Data';
import Vehicle from '@/app/assests/totalvehicle.svg'
import Drivers from '@/app/assests/Drivers.svg'
import Customers from '@/app/assests/Customers.svg'
import Trips from '@/app/assests/trips.svg'
import Image from 'next/image';
import Comparisons from '@/app/assests/comparisons.svg';
import Projects from '@/app/assests/Projects.svg';
import Sales from '@/app/assests/Sales-Figure.svg';


export default function Home() {

  const dataItems = [
    {
      title: "Total Vehicle's",
      value: '40',
      percentage: '10%',
      difference: '+150$',
      image: Vehicle,
    },
    {
      title: 'Total Drivers',
      value: '84',
      percentage: '+10%',
      difference: '+150$',
      image: Drivers,
    },
    {
      title: 'Total Customers',
      value: '6,784',
      percentage: '+10%',
      difference: '+150$',
      image: Customers,
    },
    {
      title: 'Today’s Trips',
      value: '74',
      percentage: '+10%',
      difference: '+150$',
      image: Trips,
    },
  ];


  return (
    <div className="flex">
      <main className="flex-1 p-6 bg-white font-outfit">
        <Header />
        <h2 className='text-[33px] font-medium leading-[30px] mb-10 mt-8'>Dashboard</h2>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 font-outfit">
          {dataItems.map((item, index) => (
            <Data
              key={index}
              title={item.title}
              value={item.value}
              percentage={item.percentage}
              difference={item.difference}
              image={item.image}
            />
          ))}
        </section>

        <section className="grid grid-cols-1 md:grid-cols-[70%_30%] gap-4">
          <div className="bg-white ">
            <Image
              src={Comparisons}
              alt='Comparisons'
            />
          </div>
          <div className="bg-white mt-1">
            <Image
              src={Projects}
              alt='Projects'
            />
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-[65%_35%] gap-4">
          <div className="bg-white ">
            <Image
              src={Sales}
              alt='Sales Figure'
            />
          </div>
          <div className="bg-white rounded-lg shadow  lg:h-[297px] mt-12">
            <h2 className="text-lg font-medium  p-6 pl-8">Reminders</h2>
            <p className='text-[16] p-6 pl-8 ' style={{color:"#575757"}}>No reminder here</p>
            <p className='border-b-2 border-black ' style={{ opacity: '20%' }}> </p>
            <div className='flex justify-end '>
              <button className="mt-[80px] mr-16 bg-blue-600  text-white px-4 py-2 rounded-lg">Add Reminder</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
