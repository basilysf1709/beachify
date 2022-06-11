import axios from 'axios'
import React from 'react'
import './Plans.css'

const Plans = () => {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState<any[]>([])
  const [add, setAdd] = React.useState<any>(true);
  const [edit, setEdit] = React.useState<any>(true);
  const [del, setDel] = React.useState<any>(true);
  const [delState, setDelState] = React.useState<any>(0);
  const [name, setName] = React.useState<any>("");
  const [points, setPoints] = React.useState<any>(0);
  const [category, setCategory] = React.useState<any>("");
  const [plan, setPlan] = React.useState<any>("");

  const changeAdd = () => {
    if(add === false) {
      setAdd(true)
    } else {
      setAdd(false)
      setEdit(true)
      setDel(true)
    }
  }
  const changeEdit = () => {
    if(edit === false) {
      setEdit(true)
    } else {
      setEdit(false)
      setAdd(true)
      setDel(true)
    }
  }
  const changeDel = () => {
    if(del === false) {
      setDel(true)
    } else {
      setDel(false)
      setAdd(true)
      setEdit(true)
    }
  }

  React.useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const {data : response} = await axios.get('http://localhost:5500/users')
        console.log(response)
        setData(response);
      } catch (error) {
        let errorMessage = "Failed";
        if (error instanceof Error) {
          errorMessage = error.message;
        }
        console.log(errorMessage);
      }
      setLoading(false)
    }

    fetchData();
  }, [])

  const deleteData = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const d: any = await axios.delete(`http://localhost:5500/users/${data[parseInt(delState) - 1]._id}`)
      console.log(d);
      window.location.reload();
    } 
    catch (error ) {
      let errorMessage = "Failed";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      console.log(errorMessage);
    }
  }
  
  const addData = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const planData = {
        name: name,
        plan: plan,
        priority: points,
        category: category,
      }
      const d: any = await axios.post('http://localhost:5500/users', planData)
      window.location.reload();
      console.log(d)
    } catch (error) {
      let errorMessage = "Failed";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      console.log(errorMessage);
    }
  }

  const editData = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const planData = {
        plan: plan,
        priority: parseInt(points),
        category: category
      }
      const d: any = await axios.patch(`http://localhost:5500/users/${data[parseInt(delState) - 1]._id}`, planData)
      window.location.reload();
      console.log(d)
    } catch (error) {
      let errorMessage = "Failed";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      console.log(errorMessage);
    }
  }

  return (
    <div className="plans-container">
      {loading && <div>Loading</div>}
      <div className="table-container">
        <table className="styled-table">
          <thead>
              <tr>
                  <th>Category</th>
                  <th>Name</th>
                  <th>Plan</th>
                  <th>Points</th>
                  <th>Year</th>
              </tr>
          </thead>
          <tbody>
              {!loading && (data.map(item => (<tr key={item._id}>
                <td>{item.category}</td>
                <td>{item.name.split(" ")[0]}</td>
                <td>{item.plan.split(" ")[0]}</td>
                <td>{item.priority}</td>
                <td>{item.subscribeDate.slice(0,4)}</td>
              </tr>)))}
          </tbody>
      </table>
      </div>
      <div className="button-plans-container">
        <button onClick={changeAdd} className="add-button">
          Add
        </button>
        <button  onClick={changeEdit} className="edit-button">
          Edit
        </button>
        <button  onClick={changeDel} className="delete-button">
          Delete
        </button>
      </div>
      {!add && 
        <form className="form-container" onSubmit={addData}>
          <label className="label-container" htmlFor="category">Category:</label>
          <input  onChange={(e: React.ChangeEvent<HTMLInputElement> ) => {
            setName(e.target.value)
          }} className="input-container" type="text" id="category" name="category" />
          <label className="label-container" htmlFor="name">Name:</label>
          <input onChange={(e: React.ChangeEvent<HTMLInputElement> ) => {
            setCategory(e.target.value)
          }} className="input-container" type="text" id="name" name="name" />
          <label className="label-container" htmlFor="plan">Plan:</label>
          <input onChange={(e: React.ChangeEvent<HTMLInputElement> ) => {
            setPlan(e.target.value)
          }} className="input-container" type="text" id="plan" name="plan" />
          <label className="label-container" htmlFor="points">Points:</label>
          <input  onChange={(e: React.ChangeEvent<HTMLInputElement> ) => {
            setPoints(e.target.value)
          }} className="input-container" type="text" id="points" name="points" />
          <input className="submit-button" type="submit" value="Submit" />
        </form> 
      }
      {!edit && 
      <form className="form-container" onSubmit={editData}>
        <label className="label-container" htmlFor="Id">Id:</label>
        <input onChange={(e: React.ChangeEvent<HTMLInputElement> ) => {
          setDelState(e.target.value)
        }} className="input-container" type="text" id="plan" name="plan" />
        <label className="label-container" htmlFor="plan">Plan:</label>
        <input onChange={(e: React.ChangeEvent<HTMLInputElement> ) => {
          setPlan(e.target.value)
        }} className="input-container" type="text" id="plan" name="plan" />
        <label className="label-container" htmlFor="points">Points:</label>
        <input  onChange={(e: React.ChangeEvent<HTMLInputElement> ) => {
          setPoints(e.target.value)
        }} className="input-container" type="text" id="points" name="points" />
        <label className="label-container" htmlFor="category">Category:</label>
        <input  onChange={(e: React.ChangeEvent<HTMLInputElement> ) => {
          setCategory(e.target.value)
        }} className="input-container" type="text" id="category" name="category" />
        <input className="submit-button" type="submit" value="Edit" />
      </form>
      }
      {!del && 
        <form className="form-container" onSubmit={deleteData}>
          <label className="label-container" htmlFor="category">Number:</label>
          <input className="input-container" type="text" id="number" name="number" onChange={(e: React.ChangeEvent<HTMLInputElement> ) => {
            setDelState(e.target.value)
          }}/>
          <input className="submit-button" type="submit" value="Delete" />
        </form>
      }
    </div>
  )
}

export default Plans