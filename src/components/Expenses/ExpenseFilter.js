import "./ExpenseFilter.css";

const ExpenseFilter = ({ onFilterChange, filteredYear }) => {
  const yearArray = [2022, 2021, 2020, 2019];
  const dropdownChangeHandler = (e) => {
    onFilterChange(e.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={filteredYear} onChange={dropdownChangeHandler}>
          {yearArray.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
