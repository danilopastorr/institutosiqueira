import { useEffect } from "react";
import "./styles.css";
import { rawHtml } from "./rawHtml";
import { legacyScript } from "./legacy";

export default function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.textContent = legacyScript;
    script.dataset.legacyInstituto = "true";
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: rawHtml }} />;
}
