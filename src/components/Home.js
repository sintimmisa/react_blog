import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    const {data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

    return (
        <div>
            {error && <div>{error}</div>}
            {isPending && <div>Loading ...</div>}
            <BlogList blog={blogs} title="All Blogs" />

        </div>
    )
}

export default Home;
