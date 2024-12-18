"use client"
import React, { useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import searchIcon from "../../../../assets/searchIcon.svg";
import locationIcon from "../../../../assets/locationBlue.svg";

interface SearchBarProps {
  placeholder: string;
  suggestions: string[];
  onSelect: (selected: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, suggestions, onSelect }) => {
  const [query, setQuery] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value);

    if (value.length > 1) {
      const matches = suggestions.filter((s) =>
        s.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredSuggestions(matches);
      setIsDropdownOpen(matches.length > 0);
    } else {
      setFilteredSuggestions([]);
      setIsDropdownOpen(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    setIsDropdownOpen(false);
    onSelect(suggestion);
  };

  return (
    <div className={styles.searchbar}>
      <Image
        src={searchIcon}
        width={26}
        height={26}
        alt="search-icon"
        className={styles.searchIcon}
      />
      <Image
        src={locationIcon}
        width={26}
        height={26}
        alt="location-icon"
        className={styles.locationIcon}
      />
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={handleInputChange}
        className={styles.searchInput}
      />
      {isDropdownOpen && (
        <ul className={styles.suggestionsList}>
          {filteredSuggestions.map((suggestion, index) => (
            <li
              key={index}
              className={styles.suggestionItem}
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
