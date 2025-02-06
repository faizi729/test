<<<<<<< HEAD
import Image from "next/image";

const jobs = [
  {
    id: 1,
    title: "Software Developer (Fresher)",
    description: "Good communication required with good knowledge of C, C++, and OOPs concepts or Core Java, advance Java.",
    image: "/images/software-dev.png", // Replace with actual path
  },
  {
    id: 2,
    title: "Fresher React-Native Developer",
    description: "Knowledge of UI/UX design and other common Android/iOS libraries using React Native platform.",
    image: "/images/react-native.png",
  },
  {
    id: 3,
    title: "BDE/Online Bidder (1+ years of experience)",
    description: "Excellent communication skills. Must have worked on freelancer.com platform and have taken mobile application projects.",
    image: "/images/bde.png",
  },
  {
    id: 4,
    title: "Web Designer (1+ years of experience)",
    description: "Must have designed websites, knowledge of HTML, CSS, Bootstrap, JavaScript and ability to convert PSD to HTML.",
    image: "/images/web-designer.png",
  },
  {
    id: 5,
    title: "SEO (Freshers)",
    description: "Good communication, knowledge of On-Page & Off-Page SEO.",
    image: "/images/seo.png",
  },
  {
    id: 6,
    title: "Digital Marketing Executive",
    description: "Good communication, 1+ years of experience in SEO, SMM, PPC.",
    image: "/images/digital-marketing.png",
  },
];

const JobList = () => {
  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Job Listings</h2>
      <div className="space-y-6">
        {jobs.map((job) => (
          <div key={job.id} className="flex items-center justify-between p-5 border rounded-lg shadow-sm bg-white">
            <div className="flex items-center space-x-4">
              <Image src={job.image} alt={job.title} width={60} height={60} className="rounded-md" />
              <div>
                <h3 className="text-xl font-semibold">{job.title}</h3>
                <p className="text-gray-600">{job.description}</p>
              </div>
            </div>
            <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white transition">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;
=======
import Image from "next/image";

const jobs = [
  {
    id: 1,
    title: "Software Developer (Fresher)",
    description: "Good communication required with good knowledge of C, C++, and OOPs concepts or Core Java, advance Java.",
    image: "/images/software-dev.png", // Replace with actual path
  },
  {
    id: 2,
    title: "Fresher React-Native Developer",
    description: "Knowledge of UI/UX design and other common Android/iOS libraries using React Native platform.",
    image: "/images/react-native.png",
  },
  {
    id: 3,
    title: "BDE/Online Bidder (1+ years of experience)",
    description: "Excellent communication skills. Must have worked on freelancer.com platform and have taken mobile application projects.",
    image: "/images/bde.png",
  },
  {
    id: 4,
    title: "Web Designer (1+ years of experience)",
    description: "Must have designed websites, knowledge of HTML, CSS, Bootstrap, JavaScript and ability to convert PSD to HTML.",
    image: "/images/web-designer.png",
  },
  {
    id: 5,
    title: "SEO (Freshers)",
    description: "Good communication, knowledge of On-Page & Off-Page SEO.",
    image: "/images/seo.png",
  },
  {
    id: 6,
    title: "Digital Marketing Executive",
    description: "Good communication, 1+ years of experience in SEO, SMM, PPC.",
    image: "/images/digital-marketing.png",
  },
];

const JobList = () => {
  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Job Listings</h2>
      <div className="space-y-6">
        {jobs.map((job) => (
          <div key={job.id} className="flex items-center justify-between p-5 border rounded-lg shadow-sm bg-white">
            <div className="flex items-center space-x-4">
              <Image src={job.image} alt={job.title} width={60} height={60} className="rounded-md" />
              <div>
                <h3 className="text-xl font-semibold">{job.title}</h3>
                <p className="text-gray-600">{job.description}</p>
              </div>
            </div>
            <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white transition">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;
>>>>>>> 0463540 (first commit)
