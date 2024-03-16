import '../src/Assets/image.jpg'
import Profile from './components/Profile'
import Codingninjas from './components/Codingninjas'
import Linkedin from './components/Linkedin'
import Twitter from './components/Twitter'
import Gitub from './components/Gitub'

function App() {
  return (
    <div>
      <h1 className='text-white text-center font-serif text-2xl mt-1'>PROFILE PICKER</h1>
    <div className="flex justify-center mt-10">
      <img
        className="rounded-xl w-40 h-40 "
        src='../src/Assets/image.jpg'
        alt="Extra large avatar"
        />
    </div>
      <div className='p-2 ml-64 mr-64 mt-10 rounded-xl'>
        {/* <Profile profile = "PORTFOLIO WEBSITE" />         */}
        <Profile profile = "LEETCODE ACCOUNT" />        
        <Codingninjas profile = "CODING  NINJAS ACC" />        
        <Linkedin profile = "LINKEDIN  PROFILE" />
        <Gitub profile = "GITHUB ACCOUNT" />        
        <Twitter profile = "TWITTER ACCOUNT" />        
      </div>  
  </div>
  )
}
export default App
