import React from "react";

const KhachHangIF = () => {
  return (
    <div style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '90vw',
      height: '550px',
      maxWidth: '400px',
      backgroundColor: '#f8f9fa',
      border: '1px solid #ccc',
      padding: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      zIndex: 1000,
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#0149CD',
      }}>
        <h2>Thêm khách hàng</h2>
      </div>

      <div style={{
        width: '100%',
        height: '550px',
        backgroundColor: '#7fff00',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '10px',
        padding: '10px',
        boxSizing: 'border-box',
      }}>
        <div>
        <input style={{ height:'20px', backgroundColor: '#fff', padding: '10px', border: '1px solid #ccc',margin:'10px' }}>
          {/* Ô thông tin 1 */}
        </input>
        <input style={{ height:'20px',backgroundColor: '#fff', padding: '10px', border: '1px solid #ccc',margin:'10px' }}>
          {/* Ô thông tin 2 */}
        </input>

        </div>
      </div>
    </div>
  );
}

export default KhachHangIF;
