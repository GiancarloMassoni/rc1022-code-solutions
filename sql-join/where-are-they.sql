select "line1",
      "district",
      "cities"."name" as "cities"
from "addresses"
join "cities" using ("cityId")
