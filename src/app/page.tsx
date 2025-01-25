import Browse from "./Components/Browse"
import Rooms from "./Components/Rooms"
import Furniture from "./Components/Furniture"
import Hero from "./Components/Hero"
import Heroproducts from "./Components/Heroproducts"



const page = () => {
  return (
    <div>
      
      <Hero/>
    <Browse/>
    <Heroproducts />
    <Rooms/>
    <Furniture/>
      
    </div>
  )
}

export default page
