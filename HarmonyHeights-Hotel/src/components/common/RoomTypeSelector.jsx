import React, { useState } from 'react'
import { useEffect } from 'react'
import { getRoomTypes } from "../utils/ApiFunctions"

const RoomTypeSelector = ({handleRoomInputChange, newRoom}) => {
    const[roomTypes, setRoomTypes] = useState([""])
    const[showNewRoomTypeInput, setShowNewRoomTypeInpute] = useState(false)
    const[newRoomType, setNewRoomType] = useState("")

    useEffect(() => {
        getRoomTypes().then((data) =>{
            setRoomTypes(data)
        })
    },[])

    const handleNewRoomTypeInputChange = (e) =>{
        setNewRoomType(e.target.value);
    }

    const handleAddNewRoomType = () =>{
        if (newRoomType !== "") {
            setRoomTypes([...roomTypes, newRoomType])
            setNewRoomType("")
            setShowNewRoomTypeInpute(false)
        }
    }


  return (
    <>
    
    {roomTypes.length > 0 && (
        <div>
            <select id='roomType'
            name='roomType'
            value={newRoom.roomType}
            onChange={(e) => {
                if (e.target.value === "Add New") {
                    setShowNewRoomTypeInpute(true)
                }else{
                    handleRoomInputChange(e)
                }
            }}>
                <option value={""}>Select a room type</option>
                <option value={"Add New"}> Add New</option>
                {roomTypes.map((type, index) => (
                    <option key={index}
                    value={type}>
                        {type}
                    </option>
                    ))}
            </select>
            {showNewRoomTypeInput && (
                <div className='input-group'>
                    <input className='form-control'
                    type='text'
                    placeholder='Enter a new room type'
                    onChange={handleNewRoomTypeInputChange}/>

                    <button className='btn btn-hotel' type='button' onClick={handleAddNewRoomType}>
                        Add</button>
                    
                </div>
            )}

        </div>
    )}

    </>
  )
}

export default RoomTypeSelector
