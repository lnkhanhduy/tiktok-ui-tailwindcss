import { useRef, useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import Popper from '../../components/Popper';
import AccountItem from '../../components/AccountItem';
import { useDebounce } from '../../hooks';
import * as searchServices from '../../services/searchServices';

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);

  const debounced = useDebounce(searchValue, 500);

  const inputRef = useRef();

  useEffect(() => {
    if (!debounced.trim()) {
      setSearchResult([]);
      return;
    }

    const fetchAPI = async () => {
      setLoading(true);

      const result = await searchServices.search(debounced);

      setSearchResult(result);
      setLoading(false);
    };

    fetchAPI();
  }, [debounced]);

  const handleClear = () => {
    setSearchValue('');
    setSearchResult([]);
    inputRef.current.focus();
  };

  const handleHideResult = () => {
    setShowResult(false);
  };

  const handleChange = (e) => {
    const searchValue = e.target.value;

    if (!searchValue.startsWith(' ')) {
      setSearchValue(searchValue);
    }
  };

  return (
    <HeadlessTippy
      interactive
      appendTo={() => document.body}
      visible={showResult && searchResult.length > 0}
      render={(attrs) => (
        <div className="w-[361px]" tabIndex="-1" {...attrs}>
          <Popper>
            <h4 className="text-[14px] font-[600] text-[rgb(22,24,35,0.5)] py-[5px] px-[12px]">Accounts</h4>
            {searchResult.map((result) => (
              <AccountItem key={result.id} data={result} />
            ))}
          </Popper>
        </div>
      )}
      onClickOutside={handleHideResult}
    >
      <div className="w-[361px] h-[48px] bg-header-search rounded-[92px] flex relative border-[1.5px] border-transparent focus-within:border-solid focus-within:border-header-border-within">
        <input
          ref={inputRef}
          value={searchValue}
          className="header-input text-[#828282] py-3 px-4 bg-transparent outline-none flex-1"
          type="text"
          placeholder="Search accounts or videos"
          onChange={handleChange}
          onFocus={() => setShowResult(true)}
        />
        {!!searchValue && !loading && (
          <button className="text-header-text-color mr-3" onClick={handleClear}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}

        {loading && (
          <FontAwesomeIcon
            icon={faSpinner}
            className="absolute right-[52px] top-1/2 text-header-text-color mr-3 animate-spin-search"
          />
        )}

        <button
          className="header-search_btn w-[50px] h-full rounded-r-[92px] text-[18px] text-header-text-color hover:bg-header-search-hover after:absolute after:top-[9px] after:w-[1px] after:right-[50px] after:h-[30px] after:bg-header-search-line hover::bg-red-500"
          onMouseDown={(e) => e.preventDefault()}
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </HeadlessTippy>
  );
}

export default Search;
