export default function Home() {
  return (
    <main style={{ padding: '20px', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <h1>Welcome to Request Delivery</h1>
      <p>This project is integrated with Vercel Speed Insights.</p>
      
      <section>
        <h2>Getting Started</h2>
        <p>
          Speed Insights is now enabled on this project. The performance metrics 
          will be collected and displayed in your Vercel dashboard.
        </p>
        
        <h3>Next Steps</h3>
        <ol>
          <li>Deploy this project to Vercel</li>
          <li>Enable Speed Insights in your Vercel project settings</li>
          <li>View metrics in the Speed Insights dashboard tab</li>
        </ol>
      </section>

      <footer style={{ marginTop: '40px', color: '#666', fontSize: '14px' }}>
        <p>Powered by Vercel Speed Insights</p>
      </footer>
    </main>
  );
}
