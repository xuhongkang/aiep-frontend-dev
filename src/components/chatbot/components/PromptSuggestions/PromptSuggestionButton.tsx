
const PromptSuggestionButton = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="btn btn-secondary btn-xs sm:btn-sm md:btn-sm lg:btn-md prompt-button rounded-lg overflow-hidden whitespace-nowrap"
    >
      {text}
    </button>
  );
};

export default PromptSuggestionButton;
