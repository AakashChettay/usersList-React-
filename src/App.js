import UserProfile from './components/UserProfile'
import './App.css'

const userDetailsList = [
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Kapil Yadav',
    role: 'Cloud Engineer',
    uniqueKey: 1
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'MERN Developer',
    uniqueKey: 2
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'ML Engineer',
    uniqueKey: 3
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'Data Scientist',
    uniqueKey: 4
  },
]

const App = () => (
  <div className="list-container">
    <h1 className="title">Users List</h1>
    <ul>
      {userDetailsList.map(eachItem => (
        <UserProfile userDetails={eachItem} key={eachItem.uniqueKey}/>
      ))}
    </ul>
  </div>
)

export default App
