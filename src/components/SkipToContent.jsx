import "../styles/SkipToContent.css";

export function SkipToContent() {
  const handleSkip = (e) => {
    e.preventDefault();
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      mainContent.tabIndex = -1;
      mainContent.focus();
      mainContent.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a href="#main-content" className="skip-to-content" onClick={handleSkip}>
      Skip to main content
    </a>
  );
}

export default SkipToContent;
