
import Header from "./components/Header";
import content from "./content";
import Card from "./components/Card";
import Footer from "./components/Footer";


function App() {
  return (
   <>
      <Header/> 
      {content.map((post) =>
          <Card title={post.title} body={post.body} image={post.image} id={post
          .id}/>
        
      )}
      <Footer/>

   </>
  );
}

export default App;
