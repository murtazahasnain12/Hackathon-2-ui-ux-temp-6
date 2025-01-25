import React from 'react'
import Image from 'next/image';




const features = [
    {
      icon: '/images/trophy.png',
      title: 'High Quality',
      description: 'crafted from top materials'
    },
    {
      icon: '/images/tick.png',
      title: 'Warranty Protection',
      description: 'Over 2 years'
    },
    {
      icon: '/images/gift.png',
      title: 'Free Shipping',
      description: 'Order over 150 $'
    },
    {
      icon: '/images/support.png',
      title: '24 / 7 Support',
      description: 'Dedicated support'
    }
  ]

export default function Delivery() {
  return (
    <div>
      
       <div className="w-full bg-[#FAF3EA] mx-auto px-4 py-16 my-6 pl-6 lg:pl-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                {features.map((feature) => (
                  <div 
                    key={feature.title} 
                    className="flex items-center gap-4 pl-8 md:pl-0"
                  >
                    <div className="mb-4">
                      <Image
                        src={feature.icon}
                        alt={feature.title}
                        width={60}
                        height={60}
                        quality={100}
                      />
                    </div>
                    <div className='flex flex-col'>
                    <h3 className="text-[#333333] text-xl font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-[#666666] text-base">
                      {feature.description}
                    </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

    </div>
  )
}
