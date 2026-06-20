import React, { useState } from 'react';
import { db } from '../firebaseConfig'; // Aapka firebase config file path
import { collection, addDoc } from 'firebase/firestore'; 

const PaymentPage = () => {
  const [email, setEmail] = useState('');
  const [utr, setUtr] = useState('');
  const [plan, setPlan] = useState('Monthly'); // Default plan

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Firebase mein "pending_payments" collection mein data save ho raha hai
      await addDoc(collection(db, "pending_payments"), {
        email: email,
        utr: utr,
        plan: plan,
        status: 'pending',
        timestamp: new Date()
      });
      alert("Details submitted! We will verify within 2 hours.");
    } catch (error) {
      alert("Error saving data: " + error.message);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto', textAlign: 'center' }}>
      <h1>Premium Subscription</h1>
      
      {/* Plan Selection */}
      <select onChange={(e) => setPlan(e.target.value)} style={{marginBottom: '10px'}}>
        <option value="Monthly">Monthly - ₹10</option>
        <option value="Yearly">Yearly - ₹100</option>
      </select>

      {/* QR Code */}
      <img src="/qr.png" alt="Payment QR" style={{ width: '250px', display: 'block', margin: 'auto' }} />

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' }}>
        <input type="email" placeholder="Enter App Email ID" required value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="text" placeholder="Enter UTR Number" required value={utr} onChange={(e) => setUtr(e.target.value)} />
        <button type="submit" style={{ padding: '10px', background: '#0b0f19', color: 'white', border: 'none' }}>Submit Details</button>
      </form>
    </div>
  );
};

export default PaymentPage;