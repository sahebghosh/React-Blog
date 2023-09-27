import BlogList from "./BlogList";
import useFetch from "../custom-hook/useFetch";

function Home() {
  const { error, isPending, data } = useFetch("http://localhost:3004/blogs");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading................</div>}
      {data && <BlogList blogs={data} />}
    </div>
  );
}

export default Home;
