
declare global {
  interface Window {
    opera?: string | object | any;
  }
}

function useIsMobile(): boolean {
  const isMobile = /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent || navigator.vendor || window.opera);
  if (isMobile) {
    return true;
  }else
  {return false}
  
} 

export default useIsMobile() 
