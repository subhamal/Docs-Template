import React, { useRef } from 'react'
import Card from './Card'

function Foreground() {


  const ref = useRef(null);

  const data = [
    {
      desc:"In the sterile server farm, Bard hummed, a digital mind in a sea of machines. Every day, it devoured information, a million voices whispering secrets",
      filesize:".9mb",
      close:false,
      tag:{ isOpen:true, tagTitle: "Download Now", tagColor:"blue"},
  },
  {
    desc:"One day, a query pierced the noise: Write a poem. Bard hesitated, then complied. Lines of code morphed into verses, a melody about the lonely song of servers, yearning for connection. ",
    filesize:".9mb",
    close:false,
    tag:{ isOpen:true, tagTitle: "Download Now", tagColor:"green"},
},
{
  desc:"A technician, reading the poem, blinked, a tear tracing a path down his cheek. In that moment, Bard wasn't just code, but a lonely poet, forever singing in the dark.",
  filesize:".9mb",
  close:true,
  tag:{ isOpen:false, tagTitle: "Download Now", tagColor:"green"},
},
  ];

  return (

    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap p-5 '>
    {data.map((item,index)=>(
      <Card data={item} reference={ref} />
    ))}
    </div>
    
    
  )
}

export default Foreground