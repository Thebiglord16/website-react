import leo from "./leo.png";
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, Image, Container} from "react-bootstrap";
import './App.css';

function App() {
  return (
    <div className="container">
      <Barra/>
      <main>
        <section id="about">
            <h2>About Me</h2>
          <AboutMe/>
        </section>
        <section id="interests">
            <h2> More about my interests</h2>
            {interests.map((x, i) => <InterestsPiece key={i} title={x.title} text={x.text}/>)}
        </section>
        <hr/>
        <section id="personal">
            <ListComponent title="Info" items={personalData}/>
        </section>
        <hr/>
        <section id="education">
            <ListComponent title="Education" items={education}/>
        </section>
      </main>
    </div>
  );
}

const Barra = () => {
  return (
    <Navbar collapseOneSelect expand="md" id="nav" sticky="top">
      <Container id="main-nav">
        <Navbar.Brand href="#home" id="brand">
          Leonardo Mejia
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="auto">
            <Nav.Link href="#about">About me</Nav.Link>
            <Nav.Link href="#interests">Interests</Nav.Link>
            <Nav.Link href="#personal">Personal Info</Nav.Link>
            <Nav.Link href="#education">Education</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const AboutMe = () => {
  return(
    <div className="container-fluid col-md-12">
        <div className="row " id="AboutMe">
            <div className="col-md-8">
              <p>
                Hey! my name is Leonardo Mejía I'm a 24 year old student who enjoys programming. I'm currently working towards my undergraduate degree in 
                Sytems and Computing engineering at Universidad de los Andes in Bogota, Colombia and I look forward to make a living as a software developer.
                <br/>
                <br/>
                I like gaming, anime, chess, pokémon, cycling, basketball and PC building!
                <br/>
                I speak English, Spanish and a little bit of Japanese.
                <br/>
                My taste in music goes from metal all the way to salsa.
              </p>
            </div>
            <div className="col-md-4">
              <div className="yo">
                <Photo/>
              </div>
            </div>
        </div>
        <hr/>
    </div>
    
  );
};


const InterestsPiece = (props) => {
  return(
    <div>
      <h3>{props.title}</h3>
        <p>
          {props.text}
        </p>
    </div>
  );
};

const Photo = () => {
  return (
    <div className="yo">
      <Image src={leo} fluid/>
    </div>
  );
};

const ListComponent = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
        <ul>
          {props.items.map((item, i) => <li key={i}><p>{item}</p></li>)}
        </ul>
    </div>
  )
}

const interests = [
    {
      title: "Music",
      text:"I usually listen a lot of rock, my favorite bands being Royal Blood, Nirvana, Foo Fighters, The Ramones and The police. But sometimes I listen other genres, usually from Latin America, Salsa for example."
    },
    {
      title: "Gaming",
      text:"Gaming is my hobby, being doing it for as long as I can remember, I've played a lot of different games on different platforms the most memorable of them being Persona 5, The elder Scrolls V:Skyrim, Hollow knight, Pokemon:emerald version, The Legend of Zelda: The wind Waker, The witcher 3:Wild Hunt and World of Warcraft. There's a ton of games I've played that should be on that list, but it would be too long."
    },
    {
      title: "Anime",
      text:"This is most of the media I consume, Japanese animation is really cool you can see simple universes like naruto or more complex and intrincate stories like Attack on Titan. It is really entertaining!"
    },
    {
      title: "Pokémon",
      text:"I'm a huge pokéfan! I've been playing the games since I'm 6 and know most of the Pokemon there are, I have a favorite Pokemon per generation and in order it goes as follows: Charizard, Quilava, Flygon, Darkrai, Reshiram, Greninja, Salazzle and Corviknight!"
    },
    {
      title: "Chess",
      text:"I love board games, but there's nothing much more exciting than a good chess match, I started playing chess when I was 9 and my mom signed me up into a chess course, since then it has always been a part of my life, I'm not even close to being good at it but I do have fun!"
    },
    {
      title: "Cycling",
      text: "I enjoy going cycling with my dad, we try to go out on cycling journeys every weekend we mostly do mountain bike and usually climb up to Alto de Patios in Bogotá, I mostly enjoy roads with no asphalt and a high inclination."
    },
    {
      title: "Basketball",
      text: "I really enjoy the excercise you do during a good basketball match I love the sport's dynamic, the fast pace it has makes me feel competitive and keeps my mind distracted when i want to blow off some steam."
    },
  ]

  const personalData= [
    "Birth date : February 26 1998",
    "Place of Birth : Bogotá D.C, Colombia",
    "Email : l.mejia@uniandes.com"
  ]

  const education = [
    "Bachiller Academico - Jordan de Sajonia School, Bogota, Colombia",
    "Kumon Math program completer",
    "Curreently studying systems and computer engineering at Universidad de los Andes, Bogota, Colombia"
  ]
export default App;

