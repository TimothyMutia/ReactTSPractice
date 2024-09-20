import { useTheme } from '../Contexts/ThemeContext'
import './styles.css'
import { useQuery } from '@tanstack/react-query';
import { Device, fetchDevices } from '../Api/deviceApi';
import Add_Device_Form from '../Components/Add_Device_Form';

const Devices = () => {
  const { theme } = useTheme();
  const { data, isPending, isError, isSuccess} = useQuery({
    queryKey: ['devices'],
    queryFn: fetchDevices,
  })

    return (
    <div className={theme === 'light' ? 'Devices' : 'Devices dark'} style={{gap:"20px"}}>
      <Add_Device_Form/>
      <h2> List of Devices </h2>
        <div className='deviceContainer'> 
          {isPending ? (
            <div> Loading... </div>
          ): (<span></span>)}
          {isError ? (
            <div> Error!!!... </div>
          ): (<span></span>)}
          {isSuccess ? (
            <div>
              {data?.map((item:Device) => ( 
                <div key={item.id} style={{ display: "flex", flexDirection: "row", justifyContent: "spacebetween", alignItems: "center", padding: "16px", border: "1px solid #ccc", borderRadius: "5px" }}> 
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "start", width:"100%" }}> 
                    <p style={{ fontWeight: "bold", margin: "0 0 0.5rem 0" }}>   
                    {item.name} 
                    </p> 
                    <p style={{ margin: 0, fontSize: "0.85rem" }}> 
                    {item.data?.color} 
                    </p> 
                  </div> 
                  <div style={{width:"100%", alignSelf:"baseline"}}> 
                    <p style={{fontWeight:"bold", margin: "0 0 0.5rem 0" }}> 
                    {item.data?.price && `$${item.data.price}`} 
                    </p> 
                  </div>
                  <div style={{display:'flex', flexDirection:'column', alignItems:'flex-start', justifyContent:'flex-start'}}>
                    Dropdown  
                  </div> 
                </div> 
              ))}
            </div>
          ): (<span></span>)}
            
        </div> 
    
    </div>
  )
}

export default Devices