import { Device } from "../types/global";
export async function fetchDevices() { 
    const response = await fetch("https://api.restful-api.dev/objects"); 
    if (!response.ok) { 
    throw new Error("Failed to fetch devices"); 
    } 
    return response.json(); 
  } 

export async function postDevice(data:Device){
    const response = await fetch('https://api.restful-api.dev/objects', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data),
    });
    if(!response.ok){
      throw new Error('No')
    }
    return response.json();
}

export async function updateDevice(data:Device){
  const response = await fetch("https://api.restful-api.dev/objects/" + data.id,{
    method: "PATCH",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data),
  })
  if(!response.ok){
    throw new Error('No')
  }
  return response.json();
}

export async function deleteDevice(data:Device){
  const response = await fetch("https://api.restful-api.dev/objects/" + data.id,{
    method:"DELETE",
  })
  if(!response.ok){
    throw new Error('No')
  }
  return response.json();
}