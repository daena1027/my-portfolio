export default function Sea() {
  return (
    <>
      <div style={{ marginTop: '-4rem' }} />
      <section
        id="sea"
        className="min-h-screen flex items-center justify-center pt-16"
        style={{
          marginTop: '-4rem',
          background: 'linear-gradient(to bottom, #2563eb 0%, #1e40af 50%, #1e3a8a 100%)',
          // #2563eb = blue-600
          // #1e40af = blue-800 (midpoint for smooth blending)
          // #1e3a8a = blue-900
        }}
      >
        <h2 className="text-5xl font-bold text-white">Sea Section</h2>
      </section>
    </>
  );
}
