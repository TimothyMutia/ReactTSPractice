export interface Device { 
  id?: number;
  name?: string; 
    data?: { 
      color?: string; 
      price?: number; 
    }; 
  } 

export async function fetchDevices() {

    const response = await fetch(("https://api.restful-api.dev/objects"));
    if(!response.ok){
        throw new Error('Failed to do it');
    }
  return response.json();
}

export async function postDevice(data:Device){
    const response = await fetch("https://api.restful-api.dev/objects", {
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
  const response = await fetch("https://api.restful-api.dev/objects/${data.id}",{
    method: "PATCH",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data),
  })
  if(!response.ok){
    throw new Error('No')
  }
  return response.json();
}