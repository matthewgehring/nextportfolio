import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

const ProjectPage = () => {
  const router = useRouter();

  const handleLearnMoreClick = () => {
    router.push('/'); // Change this to the path of your details page
  };

  // Define your initial, animate, and transition properties
  const pageVariants = {
    initial: {
      opacity: 0,
      x: "-100vw"
    },
    in: {
      opacity: 1,
      x: 0
    },
    out: {
      opacity: 0,
      x: "100vw"
    }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 1
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <motion.div
        whileHover={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        style={{
          fontSize: '2rem',
          cursor: 'pointer'
        }}
        onClick={handleLearnMoreClick}
      >
        X
      </motion.div>

      <div style={{ display: 'flex', marginTop: '20px' }}>
        <div style={{ marginRight: '20px' }}>
          <h2>Project Name</h2>
          <p>Short description of the project.</p>
        </div>
        <div>
          <p>Larger block of text about the project...</p>
        </div>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Tools Used</h3>
        <ul>
          <li>Tool 1</li>
          <li>Tool 2</li>
          <li>Tool 3</li>
          {/* Add more tools as needed */}
        </ul>
      </div>
    </div>    </motion.div>
  );
};

export default ProjectPage;
