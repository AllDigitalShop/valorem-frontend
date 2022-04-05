import React from 'react';
import PropTypes from 'prop-types';
import AngleDown from '../icons/AngleDown';
import delay from '../../lib/delay';

import StyledSelect from './index.css.js';

class Select extends React.Component {
  state = {
    value: '',
    showDropdown: false,
  };

  handleSelectOption = (option) => {
    this.setState({ value: option, showDropdown: false });
  };

  getSelectedOption = () => {
    const { options } = this.props;
    const { value } = this.state;
    return options?.find((option) => option.value === value);
  };

  handleToggleSelect = (event) => {
    delay(() => {
      this.setState(({ showDropdown }) => {
        return {
          showDropdown: !showDropdown,
        };
      });
    }, 200);
  };

  render() {
    const { options, placeholder } = this.props;
    const { showDropdown } = this.state;
    const selectedOption = this.getSelectedOption();

    return (
      <StyledSelect>
        <div
          tabIndex="0"
          className={`select-input ${showDropdown ? 'open' : ''}`}
          onFocus={this.handleToggleSelect}
          onClick={this.handleToggleSelect}
        >
          {selectedOption?.logo && <img src={selectedOption.logo} alt={selectedOption.label} />}
          {selectedOption?.label || placeholder || 'Select an option...'}
          <AngleDown />
        </div>
        {options?.length > 0 && showDropdown && (<div className="select-options">
          <ul>
            {options?.map((option) => {
              return (
                <li
                  tabIndex="0"
                  key={option.value}
                  onKeyDown={(event) => {
                    if (event.keyCode === 13) {
                      this.handleSelectOption(option.value);
                    }
                  }}
                  onClick={() => this.handleSelectOption(option.value)}
                >
                  {option?.logo && <img src={option.logo} alt={option.label} />} {option.label}
                </li>
              );
            })}
          </ul>
        </div>)}
      </StyledSelect>
    );
  }
}

Select.propTypes = {
  // prop: PropTypes.string.isRequired,
};

export default Select;
