import { useState } from "react";


export const Form = () => {
const [formData,setForm] = useState({
    name:"",
    accept_card:"",
    vote:"",
    reviews:"",
    cost:"",
    ratings:"",
    image:""
})
const handleChange=(el)=>{
    
    setForm({
        ...formData,
        [el.target.id]:el.target.value
    })
}
const addForm=(e)=>{
    e.preventDefault();
    fetch("http://localhost:8080/restaurant", {
        method: "Post",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
    console.log(formData)
}

  return (
    <form> 
      <input className="input" onChange={handleChange} id="name" type="text" placeholder="Enter Name"/>
      <select onChange={handleChange} name="" id="accept_card">
          <option value="">Choose one</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
      </select>
      <input className="input" onChange={handleChange} id="vote" type="number"  placeholder="Total votes"/>
      <input className="input" onChange={handleChange} id="reviews" type="number" placeholder="Total reviews"/>
      <input className="input" onChange={handleChange} id="cost" type="number" placeholder="Cost for one"/>
      <input className="input" onChange={handleChange} id="ratings" type="number" placeholder="Ratings"/>
      <input className="input" onChange={handleChange} id="image" type="text" placeholder="Image url"/>
      <input className="input" onClick={addForm} id="" type="submit" name="" />
    </form>
  );
};