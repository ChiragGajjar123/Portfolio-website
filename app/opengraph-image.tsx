import { ImageResponse } from 'next/og'

export const alt = 'Chirag Gajjar — Software Engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      padding: '72px',
      background: 'linear-gradient(135deg, #f8faff 0%, #eef4ff 55%, #ffffff 100%)',
      color: '#202124',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '54px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '76px', height: '76px', borderRadius: '20px', background: '#4285f4', color: '#ffffff', fontSize: '27px', fontWeight: 700 }}>CG</div>
          <div style={{ display: 'flex', flexDirection: 'column', fontSize: '24px', fontWeight: 700 }}>
            Chirag Gajjar
            <span style={{ marginTop: '5px', color: '#5f6368', fontSize: '17px', fontWeight: 400 }}>Software Engineer · Gandhinagar, India</span>
          </div>
        </div>
        <div style={{ display: 'flex', fontSize: '58px', lineHeight: 1.1, fontWeight: 700, letterSpacing: '-2px' }}>Building scalable web systems</div>
        <div style={{ display: 'flex', marginTop: '20px', color: '#5f6368', fontSize: '27px' }}>7+ years across modern web, cloud, and high-concurrency systems</div>
        <div style={{ display: 'flex', gap: '14px', marginTop: '40px' }}>
          {[
            ['Angular', '#d93025'], ['React & Next.js', '#1a73e8'], ['Node.js & Go', '#1e8e3e'], ['AWS', '#ea8600']
          ].map(([label, color]) => <span key={label} style={{ display: 'flex', padding: '12px 18px', border: `1px solid ${color}`, borderRadius: '999px', color, fontSize: '19px', fontWeight: 600 }}>{label}</span>)}
        </div>
        <div style={{ display: 'flex', width: '100%', height: '6px', marginTop: '48px', borderRadius: '999px', background: 'linear-gradient(90deg, #4285f4 0%, #ea4335 33%, #fbbc04 66%, #34a853 100%)' }} />
      </div>
    </div>,
    size
  )
}
