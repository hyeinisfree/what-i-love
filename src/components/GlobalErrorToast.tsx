"use client";

import { useUIStore } from "@/store/uiStore";
import { useEffect } from "react";

export const GlobalErrorToast = () => {
  const { error, clearError } = useUIStore();

  useEffect(() => {
    if (error) {
      // 5초 후에 자동으로 에러 메시지 숨기기
      const timer = setTimeout(() => {
        clearError();
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [error, clearError]);

  if (!error) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: "red",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <span>{error}</span>
      <button onClick={clearError} style={{ background: "none", border: "none", color: "white", cursor: "pointer" }}>
        &times;
      </button>
    </div>
  );
};
