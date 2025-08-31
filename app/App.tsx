
import Navbar from "./components/Navbar"
import Entry from "./components/Entry"

// Import images as static assets to help when building/deploying
// import MountFuji from "/public/images/mount-fuji.jpg"

// load the data straight into a JS object to use
import journalData from "/data"

//exmaple passing in full objects
export default function App() {
  // Map the incoming data to entry jsx elements
  const journalElements = journalData.map(
    (entry) => {
      return (
        <Entry 
            key={entry.id}
            entry={entry}
        />
      )
    }
  )

  return (
    <>
      <Navbar />
      <main className="entries-container" >
        {journalElements}
      </main>
    </>
  )
}

//exmaple passing in spreading an objects
// export default function App() {
//   // Map the incoming data to entry jsx elements
//   const journalElements = journalData.map(
//     (entry) => {
//       return (
//         <Entry 
//             key={entry.id}
//             // Pass in props as a spread from the entry data
//             // This can obscure the shape of the data in the element
//             // being called
//             {...entry}
//         />
//       )
//     }
//   )

//   return (
//     <>
//       <Navbar />
//       <main className="entries-container" >
//         {journalElements}
//       </main>
//     </>
//   )
// }


/**
 * Challenge:
 * - import the array of data from data.js
 * - map over the array to create an <Entry /> component
 *   for every item in the data array.
 * - display the array of Entry components in place of the current
 *   hard-coded <Entry /> instance.
 */

// export default function App() {
  
//   // Map the incoming data to entry jsx elements
//   const journalElements = journalData.map(
//     (entry) => {
//       return (
//         <Entry 
//           // image={
//           //     {
//           //       src: entry.img.src,
//           //       alt: entry.img.alt
//           //     }
//           //   }
//             image={entry.img} // can do this rather than above as objects match
//             country={entry.country}
//             googleMapsLink={entry.googleMapsLink}
//             title={entry.title}
//             dates={entry.dates}
//             info={entry.text}
//             // For React to track items in a list of elements
//             // each item MUST have a unique key assigned to "key" prop
//             // Need this to add/remove items fro mthe element list
//             // In this example we have IDs for this!
//             key={entry.id}
//         />
//       )
//     }
//   )
//   return (
//     <>
//       <Navbar />
//       <main className="entries-container" >
//         {journalElements}
//       </main>
//     </>
//   )
// }




 /* Challenge: pass props to the Entry component to display
 * its data. See the `data.md` file for each prop name and its
 * value.
 * 
 * Then on the Entry component, receive and display the values
 * for those props. In the end, the page should look the same
 * as it does now, but without all the hard-coded data in the
 * component
 */



// export default function App() {
//   console.log("Simon")
//   return (
//     <>
//       <Navbar />
//       <main className="entries-container" >
//         <Entry 
//           image={
//             {
//               src: MountFuji,
//               alt:"Mount Fuji"
//             }
//           }
//           country="Japan"
//           googleMapsLink="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
//           title="Mount Fuji"
//           dates="12 Jan, 2021 - 24 Jan, 2021"
//           info="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
//         />
//       </main>
//     </>
//   )
// }

