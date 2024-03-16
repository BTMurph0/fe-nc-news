function TopicFilter({topic, setTopic}) {
  return (
    <header>


      <label htmlFor="topics">
          Select a topic:
          <select value={topic} 
          onChange={e => setTopic(e.target.value)} name="topic" id="topic">
            <option value="">All</option>
            <option value="coding">Coding</option>
            <option value="cooking">Cooking</option>
            <option value="football">Football</option>
          </select>
        </label>
    </header>

    
  );
}

export default TopicFilter;