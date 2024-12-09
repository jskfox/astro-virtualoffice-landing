import React, { useEffect } from "react";
const ChatwootWidget: React.FC = () => {  
//  const isMobile = useIsMobile;

  useEffect(() => {
    // Configuración de Chatwoot
    (window as any).chatwootSettings = {
      hideMessageBubble: false,
      position: "left", // Puede ser "left" o "right"
      locale: "es", // Idioma
      type: "expanded_bubble", // Opciones: "standard", "expanded_bubble"
      launcherTitle: "Chatea con nosotros"
    
    };
    console.log(import.meta.env.PUBLIC_CHATWOOT_URL);
    
      (function (d: Document, t: string) {
        const BASE_URL = import.meta.env.PUBLIC_CHATWOOT_URL;
        const g = d.createElement(t) as HTMLScriptElement;
        const s = d.getElementsByTagName(t)[0];
        g.src = `${BASE_URL}/packs/js/sdk.js`;
        g.defer = true;
        g.async = true;
        s.parentNode?.insertBefore(g, s);
  
        g.onload = () => {
          (window as any).chatwootSDK.run({
            websiteToken: import.meta.env.PUBLIC_CHATWOOT_TOKEN,
            baseUrl: BASE_URL,
          });
        };
      })(document, "script");
    
  }, []); // Dependencia vacía para ejecutar solo una vez al montar

  return null; // Sin UI para renderizar
};
export default ChatwootWidget;