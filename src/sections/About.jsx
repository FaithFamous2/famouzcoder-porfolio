import { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('olowookerefaith@famouzcoder.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  const N = 300;
  const gData = [...Array(N).keys()].map(() => ({
    lat: (Math.random() - 0.5) * 180,
    lng: (Math.random() - 0.5) * 360,
    size: Math.random() / 3,
    color: ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)]
  }));
  const locations = [
    { lat: 40, lng: -100, color: ['white', 'blue'] },  // Random point
    { lat: 51.5074, lng: -0.1278, color: ['blue', 'green'] },  // London
    { lat: 35.6762, lng: 139.6503, color: ['green', 'red'] },  // Tokyo
    { lat: 40.7128, lng: -74.0060, color: ['white', 'cyan'] },  // New York
    { lat: 48.8566, lng: 2.3522, color: ['yellow', 'blue'] },  // Paris
    { lat: 34.0522, lng: -118.2437, color: ['purple', 'blue'] },  // Los Angeles
    { lat: -33.8688, lng: 151.2093, color: ['pink', 'white'] },  // Sydney
    { lat: 55.7558, lng: 37.6173, color: ['blue', 'yellow'] },  // Moscow
    { lat: 52.5200, lng: 13.4050, color: ['red', 'blue'] },  // Berlin
    { lat: 39.9042, lng: 116.4074, color: ['green', 'orange'] },  // Beijing
    { lat: -23.5505, lng: -46.6333, color: ['orange', 'blue'] },  // São Paulo
    { lat: 19.4326, lng: -99.1332, color: ['red', 'green'] },  // Mexico City
    { lat: 1.3521, lng: 103.8198, color: ['cyan', 'red'] },  // Singapore
    { lat: -26.2041, lng: 28.0473, color: ['blue', 'purple'] },  // Johannesburg
    { lat: 28.6139, lng: 77.2090, color: ['yellow', 'green'] },  // Delhi
    { lat: 37.7749, lng: -122.4194, color: ['orange', 'pink'] },  // San Francisco
    { lat: 45.4654, lng: 9.1859, color: ['purple', 'yellow'] },  // Milan
    { lat: 41.9028, lng: 12.4964, color: ['blue', 'orange'] },  // Rome
    { lat: 25.276987, lng: 55.296249, color: ['red', 'white'] },  // Dubai
    { lat: 35.6895, lng: 139.6917, color: ['green', 'blue'] },  // Tokyo
    { lat: 13.7563, lng: 100.5018, color: ['yellow', 'purple'] },  // Bangkok
    { lat: 31.2304, lng: 121.4737, color: ['blue', 'red'] },  // Shanghai
    { lat: -34.6037, lng: -58.3816, color: ['orange', 'blue'] },  // Buenos Aires
    { lat: 40.4168, lng: -3.7038, color: ['cyan', 'yellow'] },  // Madrid
    { lat: 41.3851, lng: 2.1734, color: ['purple', 'green'] },  // Barcelona
    { lat: 59.3293, lng: 18.0686, color: ['pink', 'blue'] },  // Stockholm
    { lat: 60.1699, lng: 24.9384, color: ['red', 'orange'] },  // Helsinki
    { lat: 39.9334, lng: 32.8597, color: ['white', 'blue'] },  // Ankara
    { lat: 19.0760, lng: 72.8777, color: ['blue', 'green'] },  // Mumbai
    { lat: 50.1109, lng: 8.6821, color: ['red', 'orange'] },  // Frankfurt
  ];

  const arcsData = locations.map(location => ({
    startLat: 6.5244, startLng: 3.3792, endLat: location.lat, endLng: location.lng, color: location.color
  }));


  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hi, I’m Faith AKA Famouzcoder</p>
              <p className="grid-subtext">
              With 5 years of experience, I have refined my expertise in both frontend and backend development, specializing in building dynamic and responsive websites.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid5.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
              I have developed a strong proficiency in a wide range of programming languages, frameworks, and development tools, enabling me to design and build highly robust, efficient, and scalable applications. This diverse expertise allows me to tailor solutions to meet the unique needs of any project while ensuring long-term maintainability and performance.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
             <Globe
            height={326}
            width={326}
            backgroundColor="rgba(0, 0, 0, 0)"
            backgroundImageOpacity={0.5}
            showAtmosphere
            showGraticules
            atmosphereColor="rgba(255, 255, 255, 0.4)"
            atmosphereAltitude={0.2}  // Slight atmospheric glow
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
            pointsData={gData}
            pointAltitude={0.05}  // Points slightly raised above the globe
            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
            pointColor={() => 'orange'}  // Glowing points
            pointRadius={0.1}  // Small, noticeable points
            labelsData={[
                { lat: 6.5244, lng: 3.3792, text: 'Lagos, Nigeria', color: 'white', size: 20 }
            ]}
            labelDotRadius={0.2}  // Add small dot beneath labels
            labelSize={1.5}  // Increase size of labels
            labelAltitude={0.01}  // Labels are slightly raised above the surface
            arcsData={arcsData}


            arcDashLength={0.3}  // Dashed line effect for arcs
            arcDashGap={1}  // Distance between dashes
            arcDashInitialGap={() => Math.random()}  // Vary the gap between dashes
            arcDashAnimateTime={2000}  // Animating the dash for flow effect
            enablePointerInteraction={true}  // Allow interaction
            showGlobe={true}  // Make the globe visible
            />

            </div>
            <div>
              <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
              <p className="grid-subtext">I&apos;m based in Lagos, Nigeria and open to remote work worldwide.</p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
              I have a deep passion for solving complex problems and bringing ideas to life through code. Programming goes beyond being just a profession for me — it&apos;s a true calling. I thrive on exploring emerging technologies and continuously sharpening my skills to stay at the forefront of innovation.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">olowookerefaith@famouzcoder.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
