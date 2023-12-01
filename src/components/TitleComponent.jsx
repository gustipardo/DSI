
import '.././styles/Title.css';
export default function Title({ posts}) {

  const urlParts = window.location.href.split('/');

  console.log(urlParts[urlParts.length-1])
  const name=urlParts[urlParts.length-1]
  console.log(posts)
  const props = posts.find(prop => prop.frontmatter.name === name);
  const Title = props.frontmatter.title
  console.log("title "+Title)
  return (
  <h1 className="py-2 text-black text-center flex justify-center self-center">
  {Title}
</h1>
  );
}