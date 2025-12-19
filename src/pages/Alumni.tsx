import { useState } from 'react';
import { Link } from 'react-router-dom';

type AlumniType = {
  id: number;
  name: string;
  gradYear: number;
  role: string;
  bio: string;
  color: string;
  details: string;
  contacts: {
    linkedin?: string;
    instagram?: string;
    twitter?: string;
  };
};

const demoAlumni: AlumniType[] = [
  {
    id: 1,
    name: 'Amit Sharma',
    gradYear: 2018,
    role: 'Firmware Engineer',
    bio: 'Working on embedded systems and IoT devices.',
    details:
      'Amit has 5+ years of experience in embedded C, ARM microcontrollers, and IoT platforms. Actively mentors students.',
    color: 'from-cyan-500 to-blue-400',
    contacts: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
  },
  {
    id: 2,
    name: 'Priya Nair',
    gradYear: 2019,
    role: 'RF Engineer',
    bio: 'Specializes in RF front-end design.',
    details:
      'Priya works in wireless system design and antenna tuning. She guides final-year student projects.',
    color: 'from-purple-500 to-pink-400',
    contacts: {
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com',
    },
  },
  {
    id: 3,
    name: 'Rohit Verma',
    gradYear: 2016,
    role: 'Systems Architect',
    bio: 'Leads industrial control system design.',
    details:
      'Rohit designs large-scale control systems and conducts technical workshops for EESA.',
    color: 'from-emerald-500 to-teal-400',
    contacts: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
  },
];

export default function Alumni() {
  const [selectedAlumni, setSelectedAlumni] = useState<AlumniType | null>(null);
  const [modalType, setModalType] = useState<'profile' | 'contact' | null>(null);

  const closeModal = () => {
    setSelectedAlumni(null);
    setModalType(null);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">EESA Alumni</h1>
      <p className="text-muted-foreground mb-6">
        Welcome to the Alumni page — demo profiles and highlights from past members.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {demoAlumni.map(person => (
          <article
            key={person.id}
            className="bg-card rounded-lg shadow-sm overflow-hidden"
          >
            <div className={`w-full h-40 bg-gradient-to-r ${person.color}`} />

            <div className="p-4">
              <div className="flex items-baseline justify-between">
                <h2 className="text-lg font-semibold">{person.name}</h2>
                <span className="text-xs text-muted-foreground">
                  Class of {person.gradYear}
                </span>
              </div>

              <p className="text-sm text-muted-foreground mt-1">
                {person.role}
              </p>

              <p className="text-sm text-muted-foreground mt-3">
                {person.bio}
              </p>

              <div className="mt-4 flex items-center justify-between">
                <button
                  onClick={() => {
                    setSelectedAlumni(person);
                    setModalType('profile');
                  }}
                  className="text-primary hover:underline"
                >
                  View profile
                </button>

                <button
                  onClick={() => {
                    setSelectedAlumni(person);
                    setModalType('contact');
                  }}
                  className="text-sm px-3 py-1 rounded-md bg-primary/10 text-primary"
                >
                  Contact
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8">
        <Link to="/" className="text-primary hover:underline">
          Back to Home
        </Link>
      </div>

      {/* MODAL */}
      {selectedAlumni && modalType && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-muted-foreground hover:text-black"
            >
              ✕
            </button>

            {modalType === 'profile' && (
              <>
                <h2 className="text-xl font-semibold mb-2">
                  {selectedAlumni.name}
                </h2>
                <p className="text-sm text-muted-foreground mb-1">
                  {selectedAlumni.role}
                </p>
                <p className="text-sm mb-4">
                  Class of {selectedAlumni.gradYear}
                </p>
                <p className="text-sm text-muted-foreground">
                  {selectedAlumni.details}
                </p>
              </>
            )}

            {modalType === 'contact' && (
              <>
                <h2 className="text-xl font-semibold mb-4">
                  Contact {selectedAlumni.name}
                </h2>
                <ul className="space-y-2 text-sm">
                  {selectedAlumni.contacts.linkedin && (
                    <li>
                      <a
                        href={selectedAlumni.contacts.linkedin}
                        target="_blank"
                        className="text-primary hover:underline"
                      >
                        LinkedIn
                      </a>
                    </li>
                  )}
                  {selectedAlumni.contacts.instagram && (
                    <li>
                      <a
                        href={selectedAlumni.contacts.instagram}
                        target="_blank"
                        className="text-primary hover:underline"
                      >
                        Instagram
                      </a>
                    </li>
                  )}
                  {selectedAlumni.contacts.twitter && (
                    <li>
                      <a
                        href={selectedAlumni.contacts.twitter}
                        target="_blank"
                        className="text-primary hover:underline"
                      >
                        Twitter
                      </a>
                    </li>
                  )}
                </ul>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
