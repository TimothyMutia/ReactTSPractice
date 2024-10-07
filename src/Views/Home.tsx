
import { useTheme } from '../Contexts/ThemeContext'

const Home = () => {
  const {theme} = useTheme();
  return (
    <div className={theme === 'light' ? 'light' : 'dark'}>
      <div id='Hero-Container' className='h-full w-screen flex flex-col bg-white z-0 dark:bg-dark gap-50px '>
        <div id='hero' className="h-screen w-screen bg-hero bg-center bg-cover flex z-10 justify-center items-center border-b-[40px] border-solid border-light-orange -my-6">
          <div id='heading' className='w-96 h-40 rounded-3xl bg-grey flex justify-center items-center text-center filetr-initial'>
            <h1 className='text-6xl text-light-blue font-New-Amsterdam'>Fire this ship</h1>
          </div>
        </div>
        <div className='w-full h-full flex flex-col align-center'>
          <div className='font-Rhodium-Libre flex flex-col gap-10 font-normal text-center px-10 py-24 box-border'>
            <div className='flex flex-col gap-2'>
              <h1 className='text-4xl text-light-orange font-New-Amsterdam'>Lorem Ipsum Master</h1>
              <h2 className='text-3xl text-light-blue font-New-Amsterdam'>I love Lorem Ipsum</h2>
            </div>
            <div>
              <p className='text-xl text-brown dark:text-dark-blue text-justify tracking-normal'>
                Lorem Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Temporibus, quasi. Explicabo 
                aspernatur excepturi autem nihil molestiae! 
                Similique accusamus totam ullam deserunt placeat,
                alias, adipisci nisi impedit, animi veritatis autem provident.
                Lorem Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Temporibus, quasi. Explicabo 
                aspernatur excepturi autem nihil molestiae! 
                Similique accusamus totam ullam deserunt placeat,
                alias, adipisci nisi impedit, animi veritatis autem provident.
                Lorem Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Temporibus, quasi. Explicabo 
                aspernatur excepturi autem nihil molestiae! 
                Similique accusamus totam ullam deserunt placeat,
                alias, adipisci nisi impedit, animi veritatis autem provident.
                Lorem Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Temporibus, quasi. Explicabo 
                aspernatur excepturi autem nihil molestiae! 
                Similique accusamus totam ullam deserunt placeat,
                alias, adipisci nisi impedit, animi veritatis autem provident.
                Lorem Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Temporibus, quasi. Explicabo 
                aspernatur excepturi autem nihil molestiae! 
                Similique accusamus totam ullam deserunt placeat,
                alias, adipisci nisi impedit, animi veritatis autem provident.
                Lorem Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Temporibus, quasi. Explicabo 
                aspernatur excepturi autem nihil molestiae! 
                Similique accusamus totam ullam deserunt placeat,
                alias, adipisci nisi impedit, animi veritatis autem provident.
                Lorem Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Temporibus, quasi. Explicabo 
                aspernatur excepturi autem nihil molestiae! 
                Similique accusamus totam ullam deserunt placeat,
                alias, adipisci nisi impedit, animi veritatis autem provident.
                Lorem Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Temporibus, quasi. Explicabo 
                aspernatur excepturi autem nihil molestiae! 
                Similique accusamus totam ullam deserunt placeat,
                alias, adipisci nisi impedit, animi veritatis autem provident.
                Lorem Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Temporibus, quasi. Explicabo 
                aspernatur excepturi autem nihil molestiae! 
                Similique accusamus totam ullam deserunt placeat,
                alias, adipisci nisi impedit, animi veritatis autem provident.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home