// "use client"

// import React from 'react';
// import { ArrowUpRight } from 'lucide-react';
// import Link from 'next/link';

// const BeAGenie = ({ className = "" }) => {
//   return (
//     <Link href="/be-a-genie">
//       <div
//         className="group relative p-1"
//         style={{
//           borderRadius: "60px",
//           background: 'linear-gradient(0deg, #1F9CD6, #822EF9)',
//           padding: '2px',
//         }}
//       >
//         <div
//           className='p-2 pl-4 flex gap-3 justify-center items-center text-[#111928] bg-white cursor-pointer'
//           style={{
//             borderRadius: "60px",
//           }}
//         >
//           <p className='text-sm ps-slim font-[500]'>Be a Genie</p>
//           <div className={`relative ml-1 mt-[.3rem] h-5 w-5 overflow-hidden text-black ${className}`}>
//             <div className="absolute transition-all duration-200 group-hover:-translate-y-[14px] group-hover:translate-x-3">
//               <ArrowUpRight className="h-4 w-4" />
//               <ArrowUpRight className="h-4 w-4 -translate-x-3 -translate-y-0.5" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </Link>
//   );
// }

// export default BeAGenie;