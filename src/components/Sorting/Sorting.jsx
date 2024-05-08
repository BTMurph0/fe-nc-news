import "./Sorting.css"

const Sort = ({ sort, order, setSort, setOrder }) => {
   
  
  return (
    <div className="sortingOrdering">
    
        <label htmlFor="sorting">
          Sort by:
          <select value={sort} 
          onChange={e => setSort(e.target.value)} name="sort_by" id="sortby">
            <option value="created_at">Created Date</option>
            <option value="comment_count">Comment Count</option>
            <option value="votes">Votes</option>
          </select>
        </label>

        <label htmlFor="order">
          Order by:
          <select value={order} 
          onChange={e => setOrder(e.target.value)} name="order" id="order">
            <option value="asc">Asc</option>
            <option value="desc">Desc</option>
          </select>
        </label>
        
      
    </div>
  );
};

export default Sort;
