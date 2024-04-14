import axios from "axios"

export const api = axios.create({
	baseURL: "http://localhost:9192"
})

// export const getHeader = () => {
// 	const token = localStorage.getItem("token")
// 	return {
// 		Authorization: `Bearer ${token}`,
// 		"Content-Type": "application/json"
// 	}
// }

/* This function adds a new room room to the database */
export async function addRoom(photo, roomType, roomPrice) {
	const formData = new FormData()
	formData.append("photo", photo)
	formData.append("roomType", roomType)
	formData.append("roomPrice", roomPrice)

	const response = await api.post("/rooms/add/new-room", formData)
	if (response.status === 201) {
		return true
	} else {
		return false
	}
}

/* This function gets all room types from thee database */
// export async function getRoomTypes() {
// 	try {
// 		const response = await api.get("/rooms/room/types")
// 		return response.data
// 	} catch (error) {
// 		throw new Error("Error fetching room types")
// 	}
// }
export async function getRoomTypes() {
	try {
	  const response = await api.get("/rooms/room/types");
	  if (response.status === 200) {
		return response.data;
	  } else {
		throw new Error("Error fetching room types: Invalid response status");
	  }
	} catch (error) {
	  console.error("Error fetching room types:", error);
	  throw new Error("Error fetching room types: Network error");
	}
  }
//   This functions gets all rooms from the database
  export async function getAllRooms(){
	try{
		const result = await api.get("/rooms/all-rooms")
		return result.data
	}catch(error){
		throw new Error("Error Fetching rooms")

	}
  }