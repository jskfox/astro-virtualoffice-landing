
declare global {
  interface Window {
    opera?: string | object | any;
  }
}

function useIsMobile(): boolean {
  if (typeof window !== 'undefined') {
    const isMobile = /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent || navigator.vendor || window.opera);
    if (isMobile) {
      return true;
    }
  }
  return false;
  
} 

export default useIsMobile() 
