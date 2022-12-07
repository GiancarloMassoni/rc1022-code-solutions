select "firstName",
       "lastName"
from "films"
join "inventory" using ("filmId")
join "rentals" using ("inventoryId")
join "customers" using ("customerId")
where "title" = 'Magic Mallrats'


-- inventory has filmID and inventory Id
-- rentals has inventoryId and customerId
-- customers has customerId
