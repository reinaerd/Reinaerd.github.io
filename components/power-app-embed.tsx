"use client"

import { useEffect, useRef } from "react"

interface PowerAppEmbedProps {
  appId: string
  height?: string
  width?: string
}

export function PowerAppEmbed({ appId, height = "600px", width = "100%" }: PowerAppEmbedProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    // This is a placeholder for the actual Power Apps embed code
    // In a real implementation, you would use the Microsoft Power Apps SDK
    // or the embed code provided by the Power Apps portal
    const iframe = iframeRef.current
    if (iframe) {
      iframe.src = `https://apps.powerapps.com/play/${appId}?source=iframe`
    }
  }, [appId])

  return (
    <div
      className="power-app-container rounded-lg overflow-hidden border border-purple-100 dark:border-purple-900/50 shadow-lg"
      style={{ height, width }}
    >
      <iframe
        ref={iframeRef}
        title="Power App"
        allowFullScreen
        style={{ border: "none", width: "100%", height: "100%" }}
      />
      <p className="mt-2 text-xs text-foreground/60">
        Note: You may need to sign in with your Microsoft account to view this Power App.
      </p>
    </div>
  )
}
