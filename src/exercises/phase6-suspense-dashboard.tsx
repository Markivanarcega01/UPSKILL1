// A pretend "heavy" component — imagine this is 200kb of charts.
// Note: it's a DEFAULT export. React.lazy needs that.

export default function Dashboard() {
  return (
    <div style={{ padding: 16, border: '1px solid #ccc' }}>
      <h2>📊 Dashboard</h2>
      <p>Heavy charts would render here.</p>
    </div>
  );
}
