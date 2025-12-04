import { Link } from 'react-router-dom';

const demoAlumni = [
  {
    id: 1,
    name: 'Amit Sharma',
    gradYear: 2018,
    role: 'Firmware Engineer',
    bio: 'Working on embedded systems and IoT devices. Passionate about low-power design and robotics.',
    img: '/Images/GroupPhoto1.jpg',
  },
  {
    id: 2,
    name: 'Priya Nair',
    gradYear: 2019,
    role: 'RF Engineer',
    bio: 'Specializes in RF front-end design and wireless communications. Mentor for student projects.',
    img: '/Images/GroupPhoto2.jpg',
  },
  {
    id: 3,
    name: 'Rohit Verma',
    gradYear: 2016,
    role: 'Systems Architect',
    bio: 'Leads system-level design for industrial control systems and teaches occasional workshops.',
    img: '/Images/GroupPhoto3.jpg',
  },
];

export default function Alumni() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-display font-bold mb-4">EESA Alumni</h1>
      <p className="text-muted-foreground mb-6">Welcome to the Alumni page — demo profiles and highlights from past members.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {demoAlumni.map(person => (
          <article key={person.id} className="bg-card rounded-lg shadow-sm overflow-hidden">
            <img src={person.img} alt={`${person.name} photo`} className="w-full h-40 object-cover" />
            <div className="p-4">
              <div className="flex items-baseline justify-between">
                <h2 className="text-lg font-semibold">{person.name}</h2>
                <span className="text-xs text-muted-foreground">Class of {person.gradYear}</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">{person.role}</p>
              <p className="text-sm text-muted-foreground mt-3">{person.bio}</p>
              <div className="mt-4 flex items-center justify-between">
                <Link to="#" className="text-primary hover:underline">View profile</Link>
                <button className="text-sm px-3 py-1 rounded-md bg-primary/10 text-primary">Contact</button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8">
        <Link to="/" className="text-primary hover:underline">Back to Home</Link>
      </div>
    </div>
  );
}
