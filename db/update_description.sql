update products
  set item_desc = $2
  where item_id = $1;
