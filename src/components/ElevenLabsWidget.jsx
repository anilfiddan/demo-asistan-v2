import { useEffect, useRef } from 'react'

export default function ElevenLabsWidget({ agentId }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const id = 'elevenlabs-convai-script'
    if (!document.getElementById(id)) {
      const script = document.createElement('script')
      script.id = id
      script.src = 'https://unpkg.com/@elevenlabs/convai-widget-embed'
      script.async = true
      document.body.appendChild(script)
    }

    const widget = document.createElement('elevenlabs-convai')
    widget.setAttribute('agent-id', agentId)
    containerRef.current?.appendChild(widget)

    return () => {
      widget.remove()
    }
  }, [agentId])

  return <div ref={containerRef} style={{ width: '100%', display: 'flex', justifyContent: 'center' }} />
}
