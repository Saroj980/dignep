"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function MedXPrivacyRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/privacy?tab=medx');
  }, [router]);

  return (
    <div style={{
      minHeight: "60vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "100px 20px",
      textAlign: "center"
    }}>
      <p style={{fontSize: "18px", color: "var(--navy-dark)", fontWeight: "600"}}>
        Redirecting to MedX by Dignep Privacy Policy...
      </p>
    </div>
  );
}
