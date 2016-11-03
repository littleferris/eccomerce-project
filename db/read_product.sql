select item_name as Name,
 item_desc as Description,
 item_price as Price,
 item_image as Image
 from products
  where item_id = $1;
