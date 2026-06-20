{


/**
 * Union Types
 */

type FrontendDeveloper = "FakibajDeveloper" | "JuniorDeveloper";
type FullStackDeveloper = "FullStackDeveloper" | "FrontendDeveloper" | "BackendDeveloper";

type Developer = FrontendDeveloper | FullStackDeveloper;

const frontendDeveloper1: FrontendDeveloper = "FakibajDeveloper";
const frontendDeveloper2: FrontendDeveloper = "JuniorDeveloper";
const fullStackDeveloper1: FullStackDeveloper = "FullStackDeveloper";
const fullStackDeveloper2: FullStackDeveloper = "BackendDeveloper";

const developer1: Developer = "FakibajDeveloper";
const developer2: Developer = "FullStackDeveloper";
const developer3: Developer = "BackendDeveloper";


//Real Life Example of Union Types

type User = {
  name: string;
  age: number;
  role: "admin" | "user" | "guest"; // Union type for role property
}

const user1: User = {
  name: "John",
  age: 30,
  role: "admin"
}

const user2: User = {
  name: "Jane",
  age: 25,
  role: "user"
}

const user3: User = {
  name: "Bob",
  age: 35,
  role: "guest"
  
}


//Intersection Types

type Actor = {
  movies: string[];
  industry: "Bollywood" | "Hollywood";
}

type Singer = {
  songs: string[];
  genre: "Pop" | "Rock" | "Classical";
}

type ActorSinger = Actor & Singer;

const actorSinger1: ActorSinger = {
  movies: ["Movie1", "Movie2"],
  industry: "Bollywood",
  songs: ["Song1", "Song2"],
  genre: "Pop"
}

const actorSinger2: ActorSinger = {
  movies: ["Movie3", "Movie4"],
  industry: "Hollywood",
  songs: ["Song3", "Song4"],
  genre: "Rock"
}
}
