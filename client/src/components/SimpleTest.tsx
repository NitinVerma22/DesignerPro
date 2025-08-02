export function SimpleTest() {
  return (
    <div style={{
      padding: '20px',
      textAlign: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1>🎉 React App Working!</h1>
      <p>आपका React application सफलतापूर्वक load हो गया है!</p>
      <p>Your React application has loaded successfully!</p>
      
      <div style={{
        background: 'rgba(255,255,255,0.1)',
        padding: '20px',
        borderRadius: '10px',
        margin: '20px auto',
        maxWidth: '600px'
      }}>
        <h2>✅ Status: All Systems Working</h2>
        <ul style={{listStyle: 'none', padding: 0}}>
          <li>✅ Node.js Server</li>
          <li>✅ Vite Development Server</li>
          <li>✅ React Components</li>
          <li>✅ TypeScript Compilation</li>
          <li>✅ CSS Styling</li>
        </ul>
      </div>
      
      <button 
        onClick={() => window.location.reload()}
        style={{
          background: '#ff6b6b',
          color: 'white',
          padding: '12px 24px',
          border: 'none',
          borderRadius: '25px',
          cursor: 'pointer',
          fontSize: '16px',
          margin: '10px'
        }}
      >
        🔄 Reload Page
      </button>
    </div>
  );
}