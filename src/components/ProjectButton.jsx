import 'swiper/css';
import '../styles/swiperComponent.css';

export default function ImageSlider({ isRight, posts }) {
  const sortedPosts = posts.sort((a, b) => a.frontmatter.order - b.frontmatter.order);

  const projects = sortedPosts.map((post) => post.frontmatter.name);

  const currentPath = window.location.href.split('/');
  const currentProject = currentPath[currentPath.length - 1];

  const index = projects.indexOf(
    projects.find((project) => project === currentProject)
  );
  const Alenght = projects.length;

  const newURL = isRight ? (index + 1) % Alenght : (index - 1 + Alenght) % Alenght;
  return (
    <a
      className={`flex justify-center self-center ${
        isRight ? 'right-arrow-class' : 'left-arrow-class'
      }`}
      href={projects[newURL]}
    >
      <img
        src="/assets/arrow.png"
        className={`h-12 ${isRight ? 'rotate-180' : ''}`}
      />
    </a>
  );
}
