import { useState, useEffect } from 'react';

export const useSuggestions = () => {
  const [name, setName] = useState('');
  const [suggestion, setSuggestion] = useState('');
  const [suggestionsList, setSuggestionsList] = useState(() => {
    const savedSuggestions = localStorage.getItem('suggestions');
    return savedSuggestions ? JSON.parse(savedSuggestions) : [];
  });

  useEffect(() => {
    localStorage.setItem('suggestions', JSON.stringify(suggestionsList));
  }, [suggestionsList]);

  const handleAddSuggestion = () => {
    if (name && suggestion) {
      const newSuggestion = { name, suggestion, likes: 0 };
      setSuggestionsList([...suggestionsList, newSuggestion]);
      setName('');
      setSuggestion('');
    }
  };

  const handleLike = (index) => {
    const updatedSuggestionsList = [...suggestionsList];
    updatedSuggestionsList[index].likes += 1;
    setSuggestionsList(updatedSuggestionsList);
  };

  return {
    name,
    suggestion,
    suggestionsList,
    setName,
    setSuggestion,
    handleAddSuggestion,
    handleLike,
  };
};
