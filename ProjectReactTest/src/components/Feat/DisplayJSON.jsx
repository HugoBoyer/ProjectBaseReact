import { useFetch } from "../hooks/useFetch"

export function DisplayJSON() {
    const {loading, data, errors} = useFetch('https://jsonplaceholder.typicode.com/posts?_limit=10&_delay=2000')


    return (
    <div>
        <p>Affichage JSON</p>
    {loading && <div>Chargement...</div>}
    {data && <div>
        <ul>
          {data.map(post =>(<li key={post.id}>{post.title}</li>))}
        </ul>
      </div>}
    {errors && <div>{errors}</div>}
    <br/>
    ----------------------------------------------------
    </div>
    )
}