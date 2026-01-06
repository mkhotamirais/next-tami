import SidebarTitleDesktop from "@/components/layouts/SidebarTitleDesktop";

export const dummyJsonUrl = "https://dummyjson.com";
export const fakeStoreApiUrl = "https://fakestoreapi.com";
export const jikanAnimeUrl = "https://api.jikan.moe/v4";
export const jsonPlaceholderUrl = "https://jsonplaceholder.typicode.com";
export const mediaStackUrl = "https://api.mediastack.com/v1/news";
// export const newsApiUrl = "https://newsapi.org/v2";
export const omdbApiUrl = "https://www.omdbapi.com";
export const reqresUrl = "https://reqres.in/api";
export const siskoUrl = "https://sistemtoko.com/public";
// src={`https://sistemtoko.com/img/user/${query.type}/product/${single?.product_img}`}
export const tmdbUrl = "https://api.themoviedb.org/3";
// export const urlImg = "https://sistemtoko.com/img/user/hijja/product/";

const publicApis = [
  { label: "dummyjson", url: "https://dummyjson.com" },
  { label: "fakestoreapi", url: "https://fakestoreapi.com" },
  { label: "jikananime", url: "https://api.jikan.moe/v4" },
  { label: "jsonplaceholder", url: "https://jsonplaceholder.typicode.com" },
  { label: "mediastack", url: "https://api.mediastack.com/v1/news" },
  { label: "newsapi", url: "https://newsapi.org/v2" },
  { label: "omdbapi", url: "https://www.omdbapi.com" },
  { label: "reqres", url: "https://reqres.in/api" },
  { label: "sistemtoko", url: "https://sistemtoko.com/public" },
  { label: "themoviedb", url: "https://api.themoviedb.org/3" },
];
export default function PublicApi() {
  return (
    <div>
      <SidebarTitleDesktop />
      <ul>
        {publicApis.map((item, i) => (
          <li key={i}>
            <a href={item.url} target="_blank" rel="noopener noreferrer" className="hover:underline py-1 block">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
