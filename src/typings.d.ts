export {};

declare global {
  interface Window {
    CSS?: {
      supports: Function
    }
  }
}