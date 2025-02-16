
import Card from "./Card";

const projects = [
  {
    id: 1,
    title: "movie-website",
    description: "This is a movie recommendation system to recommend movies based on their Genre or cataegory.",
    image: "https://plus.unsplash.com/premium_photo-1721955487786-76802cbf0812?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2hhdCUyMGFwcHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 2,
    title: "Taskify",
    description: "A Kanban-style task management app with drag-and-drop support, user authentication, and dark mode.",
    image: "https://plus.unsplash.com/premium_photo-1684331678124-ff62c82cef7a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dGFza3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 3,
    title: "Vibe-Cart",
    description: "A full-fledged e-commerce platform with product listings, cart management, and Stripe payment integration.",
    image: "https://plus.unsplash.com/premium_photo-1677995700941-100976883af7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGVjb21tZXJjZXxlbnwwfHwwfHx8MA%3D%3D"
  }
];


export default function Projects() {
  return (
    <div id="projects" className="px-10 md:px-0">
        <h2 className="text-center py-20 font-heading mb-4 font-bold tracking-tight text-lime-900  text-3xl sm:text-5xl">
          My projects
        </h2>
      <div className="mt-20 container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-20">
        {
          projects.map(item => (
            <div key={item.id}>
              <Card image={item.image} title={item.title} description={item.description} />
            </div>
          ))
        }
      </div>
    </div>
  );
}
