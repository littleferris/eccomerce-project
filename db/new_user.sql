insert into users (
  username,
  password,
  email,
  first_name,
  last_name,
  phone_number,
  address_street,
  address_city,
  address_zip,
  address_state
)
  values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);
