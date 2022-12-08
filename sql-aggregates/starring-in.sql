select  "genres"."name" as "Genres",
        count("genres".*)  as "numOfGenre"
from    "actors"
join "castMembers" using ("actorId")
join "films" using ("filmId")
join "filmGenre" using ("filmId")
join "genres" using ("genreId")
where "firstName" = 'Lisa' AND
      "lastName" = 'Monroe'
group by "genres"."name"
