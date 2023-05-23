import ThemeContext from "./mycontext"
import SubComp from "./subcomp"
function MyComp()
{
   return (<div>
          <ThemeContext.Provider value='light'>
            <SubComp/>
          </ThemeContext.Provider>
          </div>
   )
}

export default MyComp