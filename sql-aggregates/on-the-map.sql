select "countries"."name",
       count(*) as "totalCitiesInCountry"
from   "cities"
join   "countries" using ("countryId")
group by "countryId"
