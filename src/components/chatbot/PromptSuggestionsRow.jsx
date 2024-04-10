const PromptSuggestionRow = ({ onPromptClick, prompts }) => {
  return (
    <div className="flex flex-row flex-wrap gap-2 w-full pb-4">
      {prompts.map((prompt, index) => (
        <button
          key={`suggestion-${index}`}
          onClick={() => onPromptClick(prompt)}
          className="btn btn-secondary btn-xs sm:btn-sm md:btn-md lg:btn-md
          rounded-lg whitespace-normal break-words max-w-full text-left"
        >{prompt}
        </button>
      ))}
    </div>
  );
};

export default PromptSuggestionRow;