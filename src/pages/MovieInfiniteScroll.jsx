import { useInfiniteQuery } from '@tanstack/react-query'
import { useInView } from 'react-intersection-observer' // 관찰자 라이브러리
import { fetchMovieData } from '../api/movie'

export default function MovieInfiniteScroll() {
  const {
    data: movies,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage
  } = useInfiniteQuery({
    queryKey: ['movies'],
    queryFn: fetchMovieData,
    getNextPageParam: (lastPage) => {
      console.log('getNextPageParam 호출')
      console.log('lastPage(현재 페이지): ', lastPage)
      if (lastPage.page < lastPage.total_pages) {
        console.log('다음 페이지로 pageParam 저장')
        return lastPage.page + 1
      }
    },
    select: (data) => {
      return data.pages.map((pageData) => pageData.results).flat()
    }
  })
  console.log('hasNextPage:', hasNextPage)
  console.log('movies: ', movies)
  const { ref } = useInView({
    // 밑에까지 네모가 다 보여야 더 데이터를 가져오겠다
    threshold: 1,
    onChange: (inView) => {
      if (!inView || !hasNextPage || isFetchingNextPage) return
      fetchNextPage()
    }
  })

  return (
    <div>
      {console.log('무한스크롤 UI 렌더링')}
      <h1>영화 무한스크롤 예제</h1>

      <ul style={{ marginBottom: 300 }}>
        {movies?.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
      <div
        style={{
          textAlign: 'center',
          backgroundColor: 'green',
          color: 'white',
          width: '100%',
          height: 50
        }}
        ref={ref}
      >
        Trigger to Fetch Here
      </div>
    </div>
  )
}
