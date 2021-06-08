import { useState, useEffect, useRef } from "react";



function App() {
  const hash = new URL(document.URL).hash;
  if(!hash){
    window.location.hash = '#tags=red,blue,purple';
  }
  
  const hashToArr = (hash) => hash?.split("=")[1]?.split(',')?.map((color,i) => ({id: i, color: color}));
  const [tags, setTags] = useState(hashToArr(hash));
  const colorField = useRef(null);


  const addColor = (e) => {
    tags.push({id: tags.length, color: colorField.current.value});
    let colors = tags.map(color => color.color.toLowerCase());
    window.location.hash = `${window.location.hash.split('=')[0]}=${[...colors]}`;
  }

  const removeColor = (e) => {
    let filteredColors = tags.filter(tag => tag.id !== +e.target.id);
    let colors = filteredColors.map(color => color.color.toLowerCase());
    window.location.hash = `${window.location.hash.split('=')[0]}=${[...colors]}`;
  }

  useEffect(()=> {
    window.addEventListener("hashchange", e => setTags(hashToArr(window.location.hash)) );  
  }, [hash]);



  return (
    <div className="App">
      
      <h1>Test - Frontend</h1>
      

      <div className="form-group">
        <label htmlFor="color" className="form-label mt-4">Color</label>
        <input ref={colorField} style={{ marginBottom: "5px"}} type="text" className="form-control" id="color"  placeholder="Enter color" />  
        <button onClick={addColor} type="button" className="btn btn-success">Add Color</button>
      </div>

      <hr />
      
      <ul className="list-group">
        {tags?.map((tag,i) => {
          return tag && 
            <li onClick={removeColor} className="list-group-item d-flex justify-content-between align-items-center" key={tag.id} id={tag.id}>
              {decodeURI(tag.color.substring(0,1).toUpperCase() + tag.color.substring(1))}
            </li>
          })
        }
      </ul>

    </div>
  );
}

export default App;
