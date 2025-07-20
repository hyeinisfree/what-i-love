"use client";

import { useUIStore } from "@/store/uiStore";

export const GlobalLoadingSpinner = () => {
  const isLoading = useUIStore((state) => state.isLoading);

  if (!isLoading) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
        color: "white",
        fontSize: "2rem",
      }}
    >
      Loading...
    </div>
  );
};
