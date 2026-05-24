import styles from "./SearchBar.module.scss";

interface SearchBarProps {
  city: string;
  onCityChange: (value: string) => void;
  onSearch: () => void;
}

export const SearchBar = ({ city, onCityChange, onSearch }: SearchBarProps) => {
  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        placeholder="Digite o nome da Cidade..."
        value={city}
        onChange={(e) => onCityChange(e.target.value)}
      />

      <button onChange={onSearch}>Buscar</button>
    </div>
  );
};
