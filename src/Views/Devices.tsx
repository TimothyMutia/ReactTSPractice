import { useTheme } from '../Contexts/ThemeContext'
import './styles.css'
import { useQuery } from '@tanstack/react-query';
import {fetchDevices} from '../Api/deviceApi';
import { Device } from '../types/global';
import Add_Device_Form from '../Components/Add_Device_Form';
import Item from '../Components/Item';

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
          {isPending ? 
            <div> Loading... </div>
          : <span></span>}
          {isError ? 
            <div> Error!!!... </div>
          : <span></span>}
          {isSuccess ? 
            <div>
              {data?.map((device:Device) => ( 
                <Item device={device}/>
              ))}
            </div>
          : <span></span>}
            
        </div> 
    
    </div>
  )
}

export default Devices