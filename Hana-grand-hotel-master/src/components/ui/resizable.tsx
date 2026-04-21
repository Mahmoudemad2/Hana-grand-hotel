"use client";

export function ResizablePanelGroup({ children }: any) {
  return <div className="flex w-full">{children}</div>;
}

export function ResizablePanel({ children }: any) {
  return <div className="flex-1">{children}</div>;
}

export function ResizableHandle() {
  return <div className="w-1 bg-gray-300 cursor-col-resize" />;
}