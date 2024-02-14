
import '../assets/css/main/main.css'; // Import your CSS file
function Main(){
  const Main_section = [
    {
      name: 'Sarah M.',
      stars: 5,
      quote: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    },
    {
      name: 'Alex K.',
      stars: 5,
      quote: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    },
    {
      name: 'James L.',
      stars: 5,
      quote: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    },
  ];
  const a= Main_section.map((Main_section,index)=>(
    <div key={index}>{Main_section}</div>
  ))
  return(
    <div>
     <h1>name</h1>
    </div>
  )
}
 
const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' },
  { id: 3, name: 'Bob Smith' },
];

const userItems = users.map((user) => (
  <li key={user.id}>{user.name}</li>
));

return (
  <div>
    <h1>User List</h1>
    <ul>{userItems}</ul>
  </div>
);


  
 
export default Main;
