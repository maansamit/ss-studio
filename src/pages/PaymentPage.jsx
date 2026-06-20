import React, { useState } from 'react';

const PaymentPage = () => {
  const [email, setEmail] = useState('');
  const [utr, setUtr] = useState('');
  const [plan, setPlan] = useState('Monthly');

  const handleSubmit = (e) => {
    e.preventDefault();
    // यहाँ अभी के लिए सिर्फ एक Alert है
    alert(`Thank you! Your payment details for ${plan} plan have been received. We will contact you soon.`);
    setEmail('');
    setUtr('');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto', textAlign: 'center', color: '#f8fafc', fontFamily: 'sans-serif' }}>
      <h1>Premium Subscription</h1>
      
      <select onChange={(e) => setPlan(e.target.value)} style={{marginBottom: '15px', padding: '10px', width: '100%'}}>
        <option value="Monthly">Monthly - ₹10</option>
        <option value="Yearly">Yearly - ₹100</option>
      </select>

      <img src="/qr.png" alt="Payment QR" style={{ width: '250px', display: 'block', margin: 'auto', marginBottom: '20px' }} />

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input 
          type="email" placeholder="Enter your App Email ID" required 
          value={email} onChange={(e) => setEmail(e.target.value)}
          style={{ padding: '10px' }}
        />
        <input 
          type="text" placeholder="Enter UTR/Transaction Number" required 
          value={utr} onChange={(e) => setUtr(e.target.value)}
          style={{ padding: '10px' }}
        />
        <button type="submit" style={{ padding: '12px', background: '#fb923c', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
          Submit Payment Details
        </button>
      </form>
    </div>
  );
};

export default PaymentPage;