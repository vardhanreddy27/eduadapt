import DownloadBadge from '@/components/DownloadBadge'
import Faqs from '@/components/Faqs'
import Features from '@/components/Features'
import Hero from '@/components/Hero'
import MarqueeDemo from '@/components/MarqueeDemo'
import Menu from '@/components/Menu'
import React from 'react'

function index() {
  return (
    <div>
      <Menu />
      <Hero />
      <Features />
      <MarqueeDemo />
      <Faqs />
      <DownloadBadge />
    </div>
  )
}

export default index
